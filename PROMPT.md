# Prompt để thực thi và phát triển tiếp

Dùng với Claude Code, Cursor, Windsurf hoặc công cụ AI code tương tự.
Mở thư mục `portfolio/` trong công cụ, rồi dán **từng prompt một**, chạy xong và kiểm tra rồi mới sang prompt tiếp theo.

---

## Prompt 1 – Điền thông tin cá nhân (bắt buộc)

```
Đây là website portfolio tĩnh (HTML/CSS/JS thuần). Đọc README.md trước.
Toàn bộ nội dung nằm trong js/data.js, câu tiêu đề hero nằm trong index.html.

Hãy thay toàn bộ nội dung mẫu và mọi chỗ [ngoặc vuông] bằng thông tin thật của tôi dưới đây.
Giữ nguyên cấu trúc dữ liệu, giữ giọng văn ngắn gọn, thân thiện, xưng "mình".
Với hành trình: sắp xếp mới nhất ở trên, mốc hiện tại có head: true, tự tạo hash 7 ký tự hex.
Với dự án: viết theo Bài toán / Cách làm / Kết quả, kết quả phải có con số nếu tôi cung cấp.
Cập nhật luôn FAQ của A-bot cho khớp thông tin mới, và thêm 5–8 câu hỏi nhà tuyển dụng hay hỏi.
Cập nhật thẻ <title>, meta description và og: trong index.html theo tên và vai trò của tôi.
Không thay đổi thiết kế. Cuối cùng liệt kê những chỗ còn thiếu thông tin.

THÔNG TIN CỦA TÔI:
- Họ tên / tên gọi ngắn:
- Vị trí hiện tại, thành phố:
- Câu định vị (1 câu):
- Trạng thái tìm việc:
- Email, LinkedIn, GitHub:
- Học vấn (trường, ngành, năm, thành tích):
- Chứng chỉ:
- Kinh nghiệm (công ty, vị trí, thời gian, 2–3 thành tựu có số liệu, công nghệ):
- 3 dự án tiêu biểu (bài toán, cách làm, kết quả, stack, link):
- Kỹ năng theo nhóm:
- Sở thích:
```

---

## Prompt 2 – Kiểm tra chất lượng trước khi deploy

```
Rà soát toàn bộ dự án portfolio này và sửa trực tiếp:
1. Responsive: kiểm tra ở 360px, 390px, 768px, 1280px; không được có thanh cuộn ngang.
2. Accessibility: tương phản màu đạt WCAG AA, focus bàn phím nhìn thấy được,
   mọi nút có nhãn, thứ tự heading hợp lý.
3. Hiệu năng: mục tiêu Lighthouse trên 90; thêm width/height cho ảnh, lazy-load ảnh dưới màn hình đầu.
4. SEO: kiểm tra title, meta description, Open Graph; thêm JSON-LD schema.org Person.
5. Còn sót chỗ [ngoặc vuông] nào không.
Báo cáo ngắn những gì đã sửa.
```

---

## Prompt 3 – Deploy lên Vercel

```
Giúp tôi deploy thư mục này lên Vercel miễn phí:
1. Khởi tạo git, tạo .gitignore phù hợp, commit đầu tiên.
2. Hướng dẫn tôi tạo repo GitHub và push (đưa lệnh cụ thể).
3. Deploy bằng Vercel CLI (npx vercel) hoặc hướng dẫn import repo trên vercel.com,
   framework preset "Other", không build command.
4. Hướng dẫn gắn tên miền riêng [ten-mien-cua-ban] và cấu hình DNS.
Giải thích từng bước ngắn gọn, tôi là người mới deploy lần đầu.
```

---

## Prompt 4 (tuỳ chọn) – Nâng A-bot thành AI thật, miễn phí

```
Nâng cấp chatbot A-bot thành AI thật mà vẫn giữ chi phí 0đ:
- Tạo một serverless function trên Vercel tại api/chat.js (Node, không framework).
- Dùng một nhà cung cấp LLM có gói miễn phí (ví dụ Google Gemini API hoặc Groq).
  Kiểm tra tài liệu chính thức MỚI NHẤT của nhà cung cấp cho endpoint, tên model và giới hạn gói free,
  đừng dựa vào trí nhớ.
- API key lưu trong biến môi trường Vercel, tuyệt đối không đưa vào code phía trình duyệt.
- System prompt: chỉ trả lời về tôi dựa trên dữ liệu trong js/data.js (đưa profile, journey,
  projects, skills, faq vào ngữ cảnh); câu ngoài phạm vi thì lịch sự từ chối;
  trả lời tiếng Việt hoặc theo ngôn ngữ người hỏi, tối đa 3 câu; không bịa thông tin.
- Giới hạn: câu hỏi tối đa 200 ký tự, chặn spam đơn giản theo IP (ví dụ 20 câu/giờ).
- Trong js/main.js chỉ thay hàm getReply(): gọi /api/chat, timeout 8 giây;
  nếu lỗi, hết lượt free hoặc timeout thì tự quay về findAnswer() (FAQ cũ).
- Không đổi giao diện. Viết hướng dẫn thêm biến môi trường trên Vercel.
```

---

## Prompt 5 (tuỳ chọn) – Thêm song ngữ Việt / Anh

```
Thêm chuyển đổi ngôn ngữ Tiếng Việt / English cho portfolio:
- Tách nội dung trong js/data.js thành vi và en, giữ cùng cấu trúc; tự dịch sang tiếng Anh
  tự nhiên, chuyên nghiệp.
- Nút chuyển ngôn ngữ nhỏ trên header, nhớ lựa chọn bằng localStorage,
  mặc định theo ngôn ngữ trình duyệt.
- Dịch cả các chuỗi giao diện cố định trong index.html và main.js, cập nhật thuộc tính lang của <html>.
- A-bot dùng FAQ theo ngôn ngữ đang chọn.
```

---

## Prompt 6 (tuỳ chọn) – Chuyển sang Astro hoặc Next.js

Chỉ cần khi bạn muốn thêm blog, nhiều trang, hoặc quản lý nội dung bằng Markdown.

```
Chuyển portfolio tĩnh này sang Astro (ưu tiên vì nhẹ) hoặc Next.js App Router + TypeScript:
- Giữ nguyên 100% thiết kế, animation và hành vi hiện tại.
- Tách component: Header, Hero, Robot, ChatBot, Journey, Projects, Skills, Contact.
- Dữ liệu chuyển thành src/data/portfolio.ts có kiểu TypeScript.
- Thêm trang /blog đọc bài viết từ file Markdown.
- Render tĩnh để giữ tốc độ; chỉ ChatBot và Journey cần chạy JS phía client.
- Cấu hình deploy Vercel.
```
