// Chạy: node --test test/
const test = require('node:test');
const assert = require('node:assert');
const handler = require('../api/chat.js');

const call = (body, method = 'POST', ip = '1.1.1.1') => new Promise((resolve) => {
  const res = { status(c) { this.code = c; return this; }, json(b) { resolve({ code: this.code, body: b }); } };
  handler({ method, body, headers: { 'x-forwarded-for': ip } }, res);
});

test('đọc được dữ liệu từ js/data.js vào system prompt', () => {
  const p = handler.systemPrompt('vi');
  assert.match(p, /Apollogix/);
  assert.match(p, /tối đa 3 câu/);
});

test('chặn sai method và câu hỏi rỗng / quá 200 ký tự', async () => {
  assert.equal((await call({ question: 'hi' }, 'GET')).code, 405);
  assert.equal((await call({ question: '  ' })).code, 400);
  assert.equal((await call({ question: 'a'.repeat(201) })).code, 400);
});

test('thiếu GEMINI_API_KEY thì trả 503 để trình duyệt quay về FAQ', async () => {
  delete process.env.GEMINI_API_KEY;
  assert.equal((await call({ question: 'Kỹ năng chính?' }, 'POST', '2.2.2.2')).code, 503);
});

test('giới hạn 20 câu mỗi IP mỗi giờ', () => {
  const t = 1e12;
  for (let i = 0; i < 20; i++) assert.equal(handler.rateLimited('9.9.9.9', t + i), false);
  assert.equal(handler.rateLimited('9.9.9.9', t + 20), true);
  assert.equal(handler.rateLimited('8.8.8.8', t + 20), false); // IP khác không bị ảnh hưởng
  assert.equal(handler.rateLimited('9.9.9.9', t + 60 * 60 * 1000 + 1), false); // hết 1 giờ thì mở lại
});

test('gọi Gemini đúng định dạng; hết lượt free (429) thì trả 503', async () => {
  process.env.GEMINI_API_KEY = 'test-key';
  const realFetch = global.fetch;
  let sent;
  global.fetch = async (url, opts) => { sent = { url, opts }; return { ok: true, json: async () => ({ candidates: [{ content: { parts: [{ text: 'Khánh dùng React và Java.' }] } }] }) }; };
  const ok = await call({ question: 'Kỹ năng?', lang: 'vi' }, 'POST', '3.3.3.3');
  assert.deepEqual(ok, { code: 200, body: { reply: 'Khánh dùng React và Java.' } });
  assert.match(sent.url, /models\/gemini-3\.5-flash-lite:generateContent$/);
  assert.equal(sent.opts.headers['x-goog-api-key'], 'test-key');
  global.fetch = async () => ({ ok: false, status: 429 });
  assert.equal((await call({ question: 'Kỹ năng?' }, 'POST', '4.4.4.4')).code, 503);
  global.fetch = realFetch;
  delete process.env.GEMINI_API_KEY;
});
