# Portfolio – Nguyễn Quốc Khánh

Website tĩnh bằng HTML, CSS, JavaScript thuần. Không cần cài đặt hay build.

## Cấu trúc

```
portfolio/
├── index.html        Khung trang (hero, robot, các section)
├── css/style.css     Giao diện, animation, responsive. Đổi màu nhấn ở biến --accent
├── js/data.js        ★ TOÀN BỘ NỘI DUNG CÁ NHÂN + câu hỏi/trả lời của A-bot
├── js/main.js        Logic: timeline, lọc, robot nhìn theo chuột, chatbot
├── api/chat.js       A-bot AI (Vercel Serverless Function, gọi Gemini)
├── test/chat.test.js Test cho api/chat.js: node --test test/
├── vercel.json       Đóng gói js/data.js kèm function
├── assets/
│   ├── favicon.svg
│   ├── cv.pdf        (bạn thêm vào)
│   └── og-image.png  (bạn thêm vào, 1200x630)
├── README.md
└── PROMPT.md         Prompt cho Claude Code / Cursor để làm tiếp
```

## 1. Chạy thử trên máy

Mở thẳng `index.html` bằng trình duyệt là được. Hoặc chạy server nhỏ để giống môi trường thật:

```bash
npx serve .
# hoặc
python3 -m http.server 8000
```

## 2. Điền nội dung của bạn

Chỉ cần sửa `js/data.js`: tên, giới thiệu, hành trình, dự án, kỹ năng, link liên hệ và FAQ của A-bot.
File có 2 bản cùng cấu trúc, `vi` và `en`: sửa một bên thì sửa cả bên kia.
Chữ cố định của giao diện (tiêu đề hero, nút, nhãn…) nằm trong `ui` của mỗi bản.
Tìm và thay mọi chỗ trong `[ngoặc vuông]`.

Dạy thêm cho A-bot: thêm một mục vào `bot.faq` của từng ngôn ngữ, `keywords` viết không dấu, chữ thường.
