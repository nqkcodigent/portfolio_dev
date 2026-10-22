/* =====================================================================
   TOÀN BỘ NỘI DUNG CÁ NHÂN NẰM Ở FILE NÀY.
   Sửa thông tin tại đây, không cần đụng vào HTML hay main.js.
   Có 2 bản cùng cấu trúc: vi (Tiếng Việt) và en (English). Sửa một bên thì sửa cả bên kia.
   ui: chữ cố định của giao diện (tiêu đề, nút, nhãn…), gắn vào HTML qua data-i18n.
   Những chỗ còn trong [ngoặc vuông] là thông tin CV chưa có, cần bổ sung.
   ===================================================================== */

window.PORTFOLIO = {
  vi: {
    ui: {
      pageTitle: 'Nguyễn Quốc Khánh – Fullstack Developer',
      pageDesc: 'Portfolio của Nguyễn Quốc Khánh, Fullstack Developer tại TP. Hồ Chí Minh. Hơn 4 năm kinh nghiệm React, Next.js, Node.js.',
      skip: 'Bỏ qua, đến nội dung chính',
      navLabel: 'Điều hướng chính',
      navJourney: 'Hành trình', navProjects: 'Dự án', navSkills: 'Kỹ năng', navContact: 'Liên hệ', navCv: 'CV ↓',
      langSwitch: 'VI EN – Switch to English',
      themeLabel: 'Giao diện tối',
      heroLine1: 'Tôi viết phần\u00A0mềm', heroLine2: 'để người\u00A0khác', heroLine3: 'bớt phải\u00A0chờ.',
      ctaProjects: 'Xem dự án', ctaCv: 'Tải CV (PDF)',
      ctaMore: 'Muốn nghe kỹ hơn về các dự án này?', ctaContact: 'Liên hệ với mình',
      chatSub: 'Hỏi nhanh về', online: 'Trực tuyến',
      chatLabel: 'Câu hỏi cho A-bot', chatPlaceholder: 'Ví dụ: Bạn biết những công nghệ nào?', chatSend: 'Gửi câu hỏi',
      typing: 'A-bot đang trả lời…',
      journeyTitle: 'Hành trình',
      journeyIntro: 'Học tập và công việc của mình, kể theo cách một developer quen đọc nhất: từng commit một.',
      legendWork: 'Nhánh work: công việc', legendEdu: 'Nhánh edu: học tập, chứng chỉ',
      filtersLabel: 'Lọc hành trình', filterAll: 'Tất cả', filterWork: 'Làm việc', filterEdu: 'Học tập',
      showMore: 'Xem chi tiết', showLess: 'Thu gọn',
      projectsTitle: 'Dự án chọn lọc',
      projectsLead: 'Mỗi dự án kể ngắn gọn: bài toán là gì, mình giải thế nào, và kết quả đo được ra sao.',
      problem: 'Bài toán', solution: 'Cách làm', result: 'Kết quả', stack: 'Công nghệ',
      skillsTitle: 'Kỹ năng và thành tích',
      contactTitle: 'Cùng xây thứ gì đó đáng dùng?',
      builtWith: 'Build bằng tay, deploy trên Vercel.'
    },

    profile: {
      name: 'Nguyễn Quốc Khánh',
      shortName: 'Khánh',
      status: 'Fullstack Developer tại Apollogix',
      intro: 'Mình là Nguyễn Quốc Khánh, Fullstack Developer tại TP. Hồ Chí Minh. Hơn 4 năm xây dựng web app với React, Next.js và Node.js, tập trung vào hiệu năng, kiến trúc frontend dễ mở rộng và trải nghiệm người dùng thật.',
      contactNote: 'Mình phản hồi email trong vòng 24 giờ. Rất vui được trao đổi về công việc, dự án hoặc công nghệ web.'
    },

    links: [
      { label: 'Gửi email cho mình', href: 'mailto:nguyenquockhanhkz20@gmail.com', primary: true },
      { label: 'Gọi 0853 381 861', href: 'tel:+84853381861' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/khanhnguyen1211/' },
      { label: 'GitHub', href: 'https://github.com/nqkcodigent' }
    ],

    /* Hành trình: mới nhất ở trên. lane: 'work' hoặc 'edu'. head: true cho mốc hiện tại. */
    journey: [
      {
        hash: 'a3f9c21', lane: 'work', head: true, date: 'T8/2026 – nay',
        title: 'Fullstack Developer', org: 'Apollogix',
        summary: 'Phát triển nền tảng phần mềm logistics trên cloud (TMS, FMS, WMS) cho doanh nghiệp vận tải và giao nhận, ở cả frontend và backend.',
        details: [
          'Phát triển tính năng cho hệ thống quản lý vận tải (TMS): đơn vận chuyển, điều phối chuyến, quản lý container, tài xế và xác nhận giao hàng (POD).',
          'Xây dựng màn hình nghiệp vụ cho phần mềm giao nhận (FMS): báo giá, booking, lô hàng đường biển và đường hàng không, chứng từ.',
          'Làm dashboard và báo cáo vận hành giúp đội điều phối theo dõi chuyến hàng và KPI theo thời gian thực.',
          'Tích hợp API với phần mềm kế toán, khai báo hải quan và hệ thống kho (WMS) để dữ liệu chảy liền mạch giữa các bộ phận.'
        ],
        tags: ['Next.js', 'React.js', 'Java', 'REST API', 'Logistics (TMS/FMS/WMS)']
      },
      {
        hash: 'e51c8a0', lane: 'work', date: 'T6/2025 – T6/2026',
        title: 'Software Developer', org: 'LF Global Tech',
        summary: 'Xây dựng web app quy mô lớn với React, Next.js và kiến trúc Micro Frontend, cùng hệ thống Admin Dashboard cho hơn 100 người dùng nội bộ.',
        details: [
          'Áp dụng kiến trúc Micro Frontend, giảm phụ thuộc khi deploy trên hơn 5 module tính năng.',
          'Xây dựng và duy trì Admin Dashboard phục vụ hơn 100 người dùng nội bộ cho quản lý giao dịch, báo cáo và giám sát vận hành.',
          'Tích hợp hơn 20 RESTful API và cổng thanh toán, hỗ trợ hàng nghìn giao dịch mỗi ngày với dữ liệu đồng bộ ổn định.',
          'Giảm 30% thời gian tải trang nhờ memoization và code splitting.',
          'Refactor component dùng chung và kiến trúc frontend, giảm 40% code trùng lặp.',
          'Phối hợp với Product, Design, QA và Backend để bàn giao hơn 30 tính năng qua nhiều đợt release.'
        ],
        tags: ['React.js', 'Next.js', 'Micro Frontend', 'REST API', 'Payment gateway']
      },
      {
        hash: '7be04d9', lane: 'edu', date: '2023',
        title: 'Professional Scrum Master I (PSM I)', org: 'Scrum.org',
        summary: 'Chứng chỉ về Scrum, nền tảng cho cách làm việc Agile với đội nhóm đa chức năng.',
        details: ['Áp dụng trực tiếp vào quy trình làm việc Agile/Scrum tại các dự án.'],
        tags: ['Scrum', 'Agile']
      },
      {
        hash: '0c92f17', lane: 'work', date: 'T2/2022 – T4/2025',
        title: 'Software Developer', org: 'Monstarlab',
        summary: 'Phát triển giao diện React responsive từ thiết kế Figma và chuẩn hoá bộ component, hook dùng chung cho cả team.',
        details: [
          'Xây dựng component React tái sử dụng và giao diện responsive từ thiết kế Figma.',
          'Tích hợp hơn 10 RESTful API và hiện thực các luồng nghiệp vụ phức tạp.',
          'Chuẩn hoá component và hook dùng chung, giúp code dễ bảo trì và phát triển nhanh hơn.',
          'Tối ưu hiệu năng bằng lazy loading, code splitting và cải thiện rendering.',
          'Đảm bảo tương thích đa trình duyệt và trải nghiệm tốt trên mọi thiết bị.',
          'Tham gia code review, debug và hỗ trợ production.'
        ],
        tags: ['React.js', 'JavaScript', 'Figma', 'REST API', 'Agile']
      },
      {
        hash: '4d6b3e8', lane: 'edu', date: '2018 – 2022',
        title: 'Đại học Duy Tân', org: '', // org: ngành học, điền khi có
        summary: 'Tốt nghiệp với GPA 3.4/4 (T8/2018 – T9/2022).',
        details: ['Đồ án tốt nghiệp: website đặt lịch hẹn khám với bác sĩ.'],
        tags: ['GPA 3.4/4']
      }
    ],

    projects: [
      {
        title: 'Nền tảng logistics trên cloud (TMS, FMS, WMS)', meta: 'Apollogix · 2026 – nay',
        problem: 'Doanh nghiệp vận tải và giao nhận thường dùng nhiều hệ thống rời rạc, dữ liệu điều phối, chứng từ, kho và kế toán bị phân mảnh.',
        solution: 'Phát triển các module TMS, FMS và WMS trên một nền tảng dùng chung dữ liệu: điều phối chuyến, lô hàng, chứng từ, dashboard vận hành và tích hợp API với kế toán, hải quan.',
        result: 'Các bộ phận làm việc trên cùng một nguồn dữ liệu và theo dõi chuyến hàng, KPI theo thời gian thực.',
        stack: ['Next.js', 'React.js', 'Java', 'REST API'],
        links: []
      },
      {
        title: 'Admin Dashboard trên kiến trúc Micro Frontend', meta: 'LF Global Tech · 2025–2026',
        problem: 'Đội vận hành cần một nơi tập trung để quản lý giao dịch và báo cáo, trong khi các module phụ thuộc nhau khi deploy và code trùng lặp nhiều.',
        solution: 'Xây dashboard bằng React và Next.js theo kiến trúc Micro Frontend, tích hợp hơn 20 RESTful API, cổng thanh toán và bộ component dùng chung.',
        result: 'Phục vụ hơn 100 người dùng nội bộ, hàng nghìn giao dịch mỗi ngày; giảm phụ thuộc deploy trên 5+ module và 40% code trùng lặp.',
        stack: ['React.js', 'Next.js', 'Micro Frontend', 'TypeScript', 'REST API'],
        links: []
      },
      {
        title: 'Tối ưu hiệu năng ứng dụng web', meta: 'LF Global Tech, Monstarlab',
        problem: 'Trang tải chậm và re-render thừa khiến giao diện kém mượt.',
        solution: 'Áp dụng memoization, code splitting, lazy loading và tối ưu rendering.',
        result: 'Giảm 30% thời gian tải trang.',
        stack: ['React.js', 'Code Splitting', 'Lazy Loading', 'Memoization'],
        links: []
      }
    ],

    skills: [
      { group: 'Frontend', items: 'React.js, Next.js, Vue.js, TypeScript, Redux, Ant Design' },
      { group: 'Backend', items: 'Java, Node.js, NestJS, MySQL, RESTful API' },
      { group: 'Kiến trúc và hiệu năng', items: 'Micro Frontend, SSR, Code Splitting, Lazy Loading' },
      { group: 'Quy trình', items: 'Git, CI/CD, Agile/Scrum, PSM I' },
      { group: 'Thành tích', items: 'Best Performance Award 2023, Employee of the Month, Technical Excellence Recognition' }
    ],

    /* ===== A-bot =====
       keywords: viết KHÔNG DẤU, chữ thường. Mục đứng trước được ưu tiên. */
    bot: {
      greeting: 'Chào bạn! Mình là A-bot, trợ lý của Khánh. Bạn muốn biết gì về kinh nghiệm, kỹ năng hay dự án của anh ấy?',
      fallback: 'Câu này mình chưa được dạy. Bạn thử hỏi về kỹ năng, dự án, kinh nghiệm hoặc cách liên hệ nhé.',
      suggestions: ['Kỹ năng chính?', 'Dự án nổi bật?', 'Kinh nghiệm bao lâu?', 'Liên hệ thế nào?'],
      faq: [
        { keywords: ['xin chao', 'chao', 'hello', 'hi'], answer: 'Chào bạn! Hãy hỏi mình về kỹ năng, dự án, kinh nghiệm hoặc cách liên hệ với Khánh nhé.' },
        { keywords: ['thanh tich', 'giai thuong', 'award', 'khen thuong'], answer: 'Khánh từng nhận Best Performance Award 2023 cho đóng góp nổi bật vào dự án, Employee of the Month, và Technical Excellence Recognition cho việc cải thiện kiến trúc frontend.' },
        { keywords: ['hieu nang', 'toi uu', 'performance', 'nhanh'], answer: 'Khánh từng giảm 30% thời gian tải trang nhờ memoization và code splitting, kết hợp lazy loading và tối ưu rendering.' },
        { keywords: ['micro frontend', 'kien truc'], answer: 'Khánh đã áp dụng Micro Frontend tại LF Global Tech, giảm phụ thuộc deploy trên hơn 5 module và giảm 40% code trùng lặp.' },
        { keywords: ['scrum', 'agile', 'psm', 'quy trinh'], answer: 'Khánh làm việc theo Agile/Scrum nhiều năm và có chứng chỉ Professional Scrum Master I (PSM I) từ 2023.' },
        { keywords: ['ky nang', 'stack', 'cong nghe', 'ngon ngu', 'biet gi', 'framework', 'react', 'next js', 'nextjs', 'vue', 'typescript', 'java', 'backend', 'frontend'], answer: 'Khánh mạnh nhất ở frontend với React.js, Next.js, Vue.js và TypeScript; nắm vững Micro Frontend, SSR, Redux. Phía backend Khánh dùng Java (tại Apollogix), Node.js, NestJS (cơ bản) và MySQL.' },
        { keywords: ['du an', 'project', 'san pham', 'dashboard'], answer: 'Hiện tại Khánh đang phát triển nền tảng logistics trên cloud (TMS, FMS, WMS) tại Apollogix. Trước đó nổi bật là Admin Dashboard phục vụ hơn 100 người dùng nội bộ và hàng nghìn giao dịch mỗi ngày, chuyển đổi Micro Frontend giảm 40% code trùng lặp, và tối ưu giúp giảm 30% thời gian tải trang. Kéo xuống mục Dự án để xem chi tiết.' },
        { keywords: ['kinh nghiem', 'bao lau', 'may nam', 'nam lam'], answer: 'Khánh có hơn 4 năm kinh nghiệm: Monstarlab (2022–2025), LF Global Tech (2025–2026), và hiện là Fullstack Developer tại Apollogix từ tháng 8/2026.' },
        { keywords: ['hoc', 'truong', 'bang', 'chung chi', 'tot nghiep', 'gpa', 'duy tan'], answer: 'Khánh tốt nghiệp Đại học Duy Tân (2018–2022) với GPA 3.4/4, và có chứng chỉ Professional Scrum Master I (PSM I) năm 2023.' },
        { keywords: ['lien he', 'email', 'tuyen', 'thue', 'cv', 'phone', 'sdt', 'so dien thoai', 'goi'], answer: 'Bạn có thể gửi email tới nguyenquockhanhkz20@gmail.com hoặc gọi 0853 381 861. Bạn cũng có thể tải CV ở nút "Tải CV" phía trên.' },
        { keywords: ['lam gi', 'cong viec', 'vi tri', 'dang lam', 'cong ty', 'apollogix', 'hien tai', 'lam o dau', 'dang lam o dau'], answer: 'Hiện Khánh là Fullstack Developer tại Apollogix (từ tháng 8/2026), công ty phần mềm logistics. Khánh phát triển nền tảng cloud gồm TMS, FMS và WMS cho doanh nghiệp vận tải và giao nhận.' },
        { keywords: ['o dau', 'dia chi', 'song o', 'thanh pho'], answer: 'Khánh đang sống ở Thủ Đức, TP. Hồ Chí Minh.' },
        { keywords: ['viec moi', 'co hoi', 'san sang', 'freelance', 'remote', 'tu xa', 'hop tac'], answer: 'Hiện Khánh đang làm Fullstack Developer tại Apollogix. Nếu bạn có cơ hội hợp tác, cứ gửi email để trao đổi nhé.' },
        { keywords: ['ban la ai', 'gioi thieu', 'la ai', 'ten'], answer: 'Mình là A-bot. Còn Khánh, tên đầy đủ Nguyễn Quốc Khánh, là Fullstack Developer tại TP. Hồ Chí Minh với hơn 4 năm làm web app bằng React, Next.js và Node.js.' }
      ]
    }
  },

  en: {
    ui: {
      pageTitle: 'Nguyen Quoc Khanh – Fullstack Developer',
      pageDesc: 'Portfolio of Nguyen Quoc Khanh, a Fullstack Developer based in Ho Chi Minh City with 4+ years of experience in React, Next.js and Node.js.',
      skip: 'Skip to main content',
      navLabel: 'Main navigation',
      navJourney: 'Journey', navProjects: 'Projects', navSkills: 'Skills', navContact: 'Contact', navCv: 'CV ↓',
      langSwitch: 'VI EN – Chuyển sang Tiếng Việt',
      themeLabel: 'Dark mode',
      heroLine1: 'I write software', heroLine2: 'so people', heroLine3: 'wait\u00A0less.',
      ctaProjects: 'View projects', ctaCv: 'Download CV (PDF)',
      ctaMore: 'Want the full story behind these projects?', ctaContact: 'Get in touch',
      chatSub: 'Quick answers about', online: 'Online',
      chatLabel: 'Question for A-bot', chatPlaceholder: 'e.g. What technologies do you know?', chatSend: 'Send question',
      typing: 'A-bot is typing…',
      journeyTitle: 'Journey',
      journeyIntro: 'My education and career, told the way developers read history best: one commit at a time.',
      legendWork: 'work branch: career', legendEdu: 'edu branch: education & certifications',
      filtersLabel: 'Filter journey', filterAll: 'All', filterWork: 'Work', filterEdu: 'Education',
      showMore: 'Show details', showLess: 'Hide details',
      projectsTitle: 'Selected projects',
      projectsLead: 'Each project in brief: the problem, how I solved it, and the measurable outcome.',
      problem: 'Problem', solution: 'Approach', result: 'Outcome', stack: 'Tech stack',
      skillsTitle: 'Skills & achievements',
      contactTitle: 'Let’s build something worth using.',
      builtWith: 'Hand-built, deployed on Vercel.'
    },

    profile: {
      name: 'Nguyen Quoc Khanh',
      shortName: 'Khanh',
      status: 'Fullstack Developer at Apollogix',
      intro: 'I’m Nguyen Quoc Khanh, a Fullstack Developer based in Ho Chi Minh City. For over 4 years I’ve been building web apps with React, Next.js and Node.js, with a focus on performance, scalable frontend architecture and real user experience.',
      contactNote: 'I reply to emails within 24 hours. Always happy to talk about roles, projects or web technology.'
    },

    links: [
      { label: 'Email me', href: 'mailto:nguyenquockhanhkz20@gmail.com', primary: true },
      { label: 'Call +84 853 381 861', href: 'tel:+84853381861' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/khanhnguyen1211/' },
      { label: 'GitHub', href: 'https://github.com/nqkcodigent' }
    ],

    journey: [
      {
        hash: 'a3f9c21', lane: 'work', head: true, date: 'Aug 2026 – Present',
        title: 'Fullstack Developer', org: 'Apollogix',
        summary: 'Building a cloud logistics platform (TMS, FMS, WMS) for transport and freight-forwarding companies, across frontend and backend.',
        details: [
          'Develop features for the Transportation Management System (TMS): transport orders, dispatch and trip planning, container and driver management, and proof of delivery (POD).',
          'Build business screens for the Freight Management System (FMS): quotations, bookings, ocean and air shipments, and documentation.',
          'Create operational dashboards and reports that help dispatch teams track shipments and KPIs in real time.',
          'Integrate APIs with accounting, customs declaration and warehouse (WMS) systems so data flows seamlessly across departments.'
        ],
        tags: ['Next.js', 'React.js', 'Java', 'REST API', 'Logistics (TMS/FMS/WMS)']
      },
      {
        hash: 'e51c8a0', lane: 'work', date: 'Jun 2025 – Jun 2026',
        title: 'Software Developer', org: 'LF Global Tech',
        summary: 'Built large-scale web apps with React, Next.js and a Micro Frontend architecture, plus an Admin Dashboard used by 100+ internal users.',
        details: [
          'Adopted a Micro Frontend architecture, reducing deployment dependencies across 5+ feature modules.',
          'Built and maintained an Admin Dashboard serving 100+ internal users for transaction management, reporting and operations monitoring.',
          'Integrated 20+ RESTful APIs and a payment gateway, handling thousands of daily transactions with reliable data sync.',
          'Cut page load time by 30% through memoization and code splitting.',
          'Refactored shared components and frontend architecture, reducing duplicated code by 40%.',
          'Worked with Product, Design, QA and Backend to ship 30+ features across multiple releases.'
        ],
        tags: ['React.js', 'Next.js', 'Micro Frontend', 'REST API', 'Payment gateway']
      },
      {
        hash: '7be04d9', lane: 'edu', date: '2023',
        title: 'Professional Scrum Master I (PSM I)', org: 'Scrum.org',
        summary: 'Scrum certification that underpins how I work in Agile, cross-functional teams.',
        details: ['Applied directly to Agile/Scrum workflows across projects.'],
        tags: ['Scrum', 'Agile']
      },
      {
        hash: '0c92f17', lane: 'work', date: 'Feb 2022 – Apr 2025',
        title: 'Software Developer', org: 'Monstarlab',
        summary: 'Built responsive React interfaces from Figma designs and standardised the team’s shared components and hooks.',
        details: [
          'Built reusable React components and responsive UIs from Figma designs.',
          'Integrated 10+ RESTful APIs and implemented complex business flows.',
          'Standardised shared components and hooks, making the codebase easier to maintain and faster to extend.',
          'Improved performance with lazy loading, code splitting and rendering optimisations.',
          'Ensured cross-browser compatibility and a solid experience on every device.',
          'Took part in code reviews, debugging and production support.'
        ],
        tags: ['React.js', 'JavaScript', 'Figma', 'REST API', 'Agile']
      },
      {
        hash: '4d6b3e8', lane: 'edu', date: '2018 – 2022',
        title: 'Duy Tan University', org: '', // org: major, fill in when available
        summary: 'Graduated with a GPA of 3.4/4 (Aug 2018 – Sep 2022).',
        details: ['Graduation project: a web app for booking appointments with doctors.'],
        tags: ['GPA 3.4/4']
      }
    ],

    projects: [
      {
        title: 'Cloud logistics platform (TMS, FMS, WMS)', meta: 'Apollogix · 2026 – Present',
        problem: 'Transport and freight-forwarding companies often juggle disconnected systems, leaving dispatch, documents, warehouse and accounting data fragmented.',
        solution: 'Building TMS, FMS and WMS modules on one shared-data platform: trip dispatch, shipments, documentation, operational dashboards and API integrations with accounting and customs.',
        result: 'Every department works from a single source of truth and tracks shipments and KPIs in real time.',
        stack: ['Next.js', 'React.js', 'Java', 'REST API'],
        links: []
      },
      {
        title: 'Admin Dashboard on a Micro Frontend architecture', meta: 'LF Global Tech · 2025–2026',
        problem: 'Operations needed one place to manage transactions and reports, while feature modules were coupled at deploy time and full of duplicated code.',
        solution: 'Built the dashboard with React and Next.js on a Micro Frontend architecture, integrating 20+ RESTful APIs, a payment gateway and a shared component library.',
        result: 'Serves 100+ internal users and thousands of daily transactions; removed deploy coupling across 5+ modules and cut duplicated code by 40%.',
        stack: ['React.js', 'Next.js', 'Micro Frontend', 'TypeScript', 'REST API'],
        links: []
      },
      {
        title: 'Web app performance optimisation', meta: 'LF Global Tech, Monstarlab',
        problem: 'Slow page loads and unnecessary re-renders made the UI feel sluggish.',
        solution: 'Applied memoization, code splitting, lazy loading and rendering optimisations.',
        result: 'Cut page load time by 30%.',
        stack: ['React.js', 'Code Splitting', 'Lazy Loading', 'Memoization'],
        links: []
      }
    ],

    skills: [
      { group: 'Frontend', items: 'React.js, Next.js, Vue.js, TypeScript, Redux, Ant Design' },
      { group: 'Backend', items: 'Java, Node.js, NestJS, MySQL, RESTful API' },
      { group: 'Architecture & performance', items: 'Micro Frontend, SSR, Code Splitting, Lazy Loading' },
      { group: 'Workflow', items: 'Git, CI/CD, Agile/Scrum, PSM I' },
      { group: 'Achievements', items: 'Best Performance Award 2023, Employee of the Month, Technical Excellence Recognition' }
    ],

    /* keywords: lowercase, letters and digits only. Earlier entries win. */
    bot: {
      greeting: 'Hi there! I’m A-bot, Khanh’s assistant. What would you like to know about his experience, skills or projects?',
      fallback: 'I haven’t learned that one yet. Try asking about skills, projects, experience or how to get in touch.',
      suggestions: ['Main skills?', 'Key projects?', 'How much experience?', 'How to contact?'],
      faq: [
        { keywords: ['hello', 'hi', 'hey', 'xin chao'], answer: 'Hi! Ask me about Khanh’s skills, projects, experience or how to reach him.' },
        { keywords: ['achievement', 'achievements', 'award', 'awards', 'recognition'], answer: 'Khanh received the Best Performance Award 2023 for outstanding project contributions, Employee of the Month, and Technical Excellence Recognition for improving the frontend architecture.' },
        { keywords: ['performance', 'optimize', 'optimise', 'optimization', 'optimisation', 'fast', 'speed'], answer: 'Khanh cut page load time by 30% using memoization and code splitting, combined with lazy loading and rendering optimisations.' },
        { keywords: ['micro frontend', 'micro frontends', 'architecture'], answer: 'Khanh introduced Micro Frontends at LF Global Tech, removing deploy coupling across 5+ modules and cutting duplicated code by 40%.' },
        { keywords: ['scrum', 'agile', 'psm', 'process'], answer: 'Khanh has worked in Agile/Scrum teams for years and has held the Professional Scrum Master I (PSM I) certification since 2023.' },
        { keywords: ['skill', 'skills', 'stack', 'tech', 'technology', 'technologies', 'language', 'languages', 'framework', 'frameworks', 'know', 'react', 'next js', 'nextjs', 'vue', 'typescript', 'java', 'backend', 'frontend'], answer: 'Khanh is strongest on the frontend with React.js, Next.js, Vue.js and TypeScript, with solid experience in Micro Frontends, SSR and Redux. On the backend he uses Java (at Apollogix), Node.js, NestJS (basic) and MySQL.' },
        { keywords: ['project', 'projects', 'product', 'products', 'dashboard', 'portfolio'], answer: 'Right now Khanh is building a cloud logistics platform (TMS, FMS, WMS) at Apollogix. Earlier highlights include an Admin Dashboard serving 100+ internal users and thousands of daily transactions, a Micro Frontend migration that cut duplicated code by 40%, and optimisations that reduced page load time by 30%. Scroll down to Projects for details.' },
        { keywords: ['experience', 'how long', 'years', 'career'], answer: 'Khanh has 4+ years of experience: Monstarlab (2022–2025), LF Global Tech (2025–2026), and Fullstack Developer at Apollogix since August 2026.' },
        { keywords: ['education', 'study', 'studied', 'university', 'degree', 'certificate', 'certification', 'graduate', 'graduated', 'gpa', 'duy tan'], answer: 'Khanh graduated from Duy Tan University (2018–2022) with a GPA of 3.4/4, and earned the Professional Scrum Master I (PSM I) certification in 2023.' },
        { keywords: ['contact', 'email', 'reach', 'hire', 'hiring', 'cv', 'resume', 'phone', 'call'], answer: 'You can email nguyenquockhanhkz20@gmail.com or call +84 853 381 861. You can also grab the CV with the “Download CV” button above.' },
        { keywords: ['job', 'role', 'position', 'current', 'currently', 'company', 'apollogix', 'work', 'working'], answer: 'Khanh has been a Fullstack Developer at Apollogix, a logistics software company, since August 2026. He works on its cloud platform of TMS, FMS and WMS products for transport and freight-forwarding businesses.' },
        { keywords: ['where', 'location', 'live', 'based', 'city'], answer: 'Khanh lives in Thu Duc, Ho Chi Minh City, Vietnam.' },
        { keywords: ['opportunity', 'opportunities', 'available', 'open', 'freelance', 'remote', 'collaborate', 'collaboration'], answer: 'Khanh is currently a Fullstack Developer at Apollogix. If you have a collaboration opportunity, feel free to send an email.' },
        { keywords: ['who are you', 'who', 'about', 'introduce', 'name'], answer: 'I’m A-bot. Khanh, full name Nguyen Quoc Khanh, is a Fullstack Developer in Ho Chi Minh City with 4+ years of building web apps with React, Next.js and Node.js.' }
      ]
    }
  }
};
