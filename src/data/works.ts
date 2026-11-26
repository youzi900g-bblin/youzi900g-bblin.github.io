// 作品資料：文字全部取自「Portfolio」作品集，沒有另外編寫。
// 要新增或修改作品，只要改這個檔案；圖片放在 public/works/。
export type Category = 'illustration' | 'handdrawn' | 'graphic' | 'type' | 'video' | 'game' | 'editorial';
export interface WorkImage { src: string; alt: string; w: number; h: number }
export interface Work {
  slug: string;
  title: string;
  category: Category;
  summary: string;
  tags: string[];
  images: WorkImage[];
  links?: { label: string; href: string }[];
  year?: string;   // 年份（有才顯示）
  role?: string;   // 負責項目
  tools?: string;  // 使用工具
}

export const categories: { id: 'all' | Category; label: string }[] = [
  { id: 'all', label: '全部' },
  { id: 'illustration', label: '插畫' },
  { id: 'handdrawn', label: '手繪' },
  { id: 'graphic', label: '平面設計' },
  { id: 'type', label: '字體設計' },
  { id: 'video', label: '影音動態' },
  { id: 'game', label: '遊戲企劃' },
  { id: 'editorial', label: '編輯設計' },
];
export const categoryLabel = (c: Category) => categories.find((x) => x.id === c)?.label ?? '';

const raw: Work[] = [
  {
    slug: 'stock-comeback',
    title: '股海翻身｜欠債千萬的股市人生',
    category: 'game',
    summary: '《股海翻身》是我獨立製作的網頁遊戲。玩家開局負債 1000 萬、手上僅有 50 萬，必須在期限內透過買賣股票還清債務。介面分為股市、商城、事業與還款四個分頁，企劃、數值設計與像素美術皆由我完成，程式部分請 AI 協助撰寫；遊戲中的股票、公司與新聞均為虛構，可直接試玩。',
    tags: ['Game Planning', 'Pixel Art', 'AI-assisted Development'],
    images: [{ src: '/works/game.jpg', alt: '《股海翻身》網頁遊戲的三個畫面：開場、商城與成就', w: 1400, h: 667 }],
    links: [{ label: '立即試玩', href: 'https://youzi900g-bblin.github.io/stock-comeback/' }],
  },
  {
    slug: 'range-rover-video',
    title: '興裕汽車音響｜安卓主機安裝宣傳片',
    category: 'video',
    summary: '這是面試時拿到的作品題目，並非客戶案，由我獨立完成。題目是為汽車音響店製作一支社群宣傳短片，主角為 Range Rover Evoque 加裝的安卓多媒體主機。影片依序呈現原廠介面、安卓系統與店名，並以字卡逐項標出賣點。',
    tags: ['Editing', 'Copywriting', 'Social Video'],
    images: [{ src: '/works/video.jpg', alt: '興裕汽車音響宣傳片：Range Rover 與安卓主機畫面', w: 1400, h: 1083 }],
    links: [{ label: '觀看影片', href: 'https://youtu.be/mCgeZjNUOlA' }],
  },
  {
    slug: 'bringing-visuals-into-motion',
    title: '手書剪輯｜Bringing Visuals Into Motion',
    category: 'video',
    summary: '這是一支由我獨立製作的手書剪輯：以歌曲的意象搭配手繪畫面，詮釋一部小說的故事情節，並使用 After Effects 剪輯完成。畫面中有線稿人物、一雙眼睛，以及一隻握著綠色圓環的手。',
    tags: ['Hand-drawn', 'After Effects', 'Editing'],
    images: [{ src: '/works/motion.jpg', alt: '手繪的人物與角色草稿，用於 After Effects 動畫', w: 1400, h: 1280 }],
    links: [{ label: '觀看影片', href: 'https://youtu.be/att5Oh_z01g' }],
  },
  {
    slug: 'hot-topic',
    title: '影像剪輯練習｜Hot Topic',
    category: 'video',
    summary: '這是一次影像剪輯練習。黑底上以紅色粗糙筆觸的字體呈現片名 Hot Topic，其餘畫面則將數段影片拼貼組合。',
    tags: ['Editing', 'Visual Design'],
    images: [{ src: '/works/motion-edit.jpg', alt: '影像剪輯練習的畫面與 Hot Topic 字樣', w: 1400, h: 430 }],
    links: [{ label: '觀看影片', href: 'https://youtu.be/mrNUA03MBqM' }],
  },
  {
    slug: 'illustration',
    title: '插畫｜人物與角色',
    category: 'illustration',
    summary: '以麥克筆繪製的人物插畫。主圖是綠藍色捲髮、面帶笑容的女孩，臉部塗成黃色，四周散布星芒，右下角簽有 youzi；另有粉紅背景的少女側臉，以及一幅灰階的男性人物。',
    tags: ['Observation', 'Character', 'Line', 'Expression'],
    images: [{ src: '/works/illustration.jpg', alt: '彩色馬克筆繪製的女孩人物插畫，周圍有閃光星星', w: 982, h: 1374 }, { src: '/works/illustration-pink.jpg', alt: '粉紅背景的人物插畫，少女側臉', w: 663, h: 542 }, { src: '/works/illustration-sketch.jpg', alt: '灰階手繪的男性人物插畫', w: 675, h: 644 }],
  },
  {
    slug: 'ah-boo-font',
    title: 'Ah Boo Font｜手寫字體',
    category: 'type',
    summary: 'Ah Boo Font 是我獨立設計的手寫字體，包含大寫、小寫與數字。筆畫粗細一致，字母轉角帶有些微尖角，展示時排列在橫線格上。',
    tags: ['Letterform', 'Typeface', 'Chinese Typography'],
    images: [{ src: '/works/type-font.jpg', alt: 'Ah Boo Font 手寫字體的英文字母與數字', w: 1400, h: 480 }],
  },
  {
    slug: 'vertical-type-poster',
    title: '字體海報｜你會不會和我一樣',
    category: 'graphic',
    summary: '直排字體海報。文案為「你會不會和我一樣，覺得自己最多就是這樣，把希望寄託在別人的身上」，分三行直排，黑色粗體字疊在灰色漸層背景上。',
    tags: ['Chinese Typography', 'Poster', 'Layout'],
    images: [{ src: '/works/type-poster.jpg', alt: '中文直排字體海報，文字為「你會不會和我一樣」', w: 845, h: 1463 }],
  },
  {
    slug: 'one-to-one',
    title: 'one to one｜雜誌封面與封底',
    category: 'type',
    summary: '這是我獨立設計的虛構雜誌 one to one 封面與封底。封面使用大稻埕紅磚老街的照片，「大稻埕」三字以大字直排，上方標示 MAY 2026；封底為 1:1 的標誌，旁邊直排刊名與版權資訊。',
    tags: ['Typeface', 'Magazine', 'Layout'],
    images: [{ src: '/works/type-onetoone.jpg', alt: 'one to one 雜誌封面與封底設計', w: 1300, h: 929 }],
  },
  {
    slug: 'xmas-wonderland',
    title: '耶誕小鎮｜活動海報',
    category: 'graphic',
    summary: '這是一份模擬活動海報的作業，並非實際的活動案，題目為臺北流行音樂中心的「耶誕小鎮」。畫面以 2025 的大字，以及用綠色文字排成的聖誕樹為主，背景由藍漸層至粉色；海報標明 12/14 至 12/15、免費入場，活動內容包括 DJ 演出、美食餐車與近百攤質感店家。',
    tags: ['Poster', 'Typography', 'Visual Concept'],
    images: [{ src: '/works/xmas.jpg', alt: '2025 耶誕小鎮活動海報', w: 1040, h: 1463 }],
  },
  {
    slug: 'infection',
    title: 'INFECTION｜電影海報',
    category: 'graphic',
    summary: '電影海報，片名為 INFECTION。主角是以黏土製作的人形怪物，拍成實體照片後合成進黑白森林，身上留有紅色血跡。片名下方的標語為 Water, air, soil... and inside your brain.',
    tags: ['Poster', 'Visual Concept'],
    images: [{ src: '/works/infection.jpg', alt: 'INFECTION 海報：黑白森林中的黏土怪物', w: 1040, h: 1463 }],
  },
  {
    slug: 'dead-line',
    title: 'DEAD LINE｜海報',
    category: 'graphic',
    summary: 'DEAD LINE 海報。灰色的畫面中，一隻手從筆電裡伸出，螢幕上有一滴水；人物的一雙眼睛是整個畫面唯一的紅色，用來表現趕在期限前的壓力。',
    tags: ['Poster', 'Visual Concept'],
    images: [{ src: '/works/deadline.jpg', alt: 'DEAD LINE 海報：黑灰畫面與紅色眼睛', w: 701, h: 1053 }],
  },
  {
    slug: 'visual-experiments',
    title: '視覺實驗｜Different stories, different visual languages',
    category: 'graphic',
    summary: '以三張海報嘗試不同的視覺風格：桃紅底的 Snake 2025 蛇年海報、以紅黑色樹林與樹墩構成的 please don\'t hurt me，以及深青色的 THEIR FUTURE? OUR FUTURE.（鐵絲折成魚形，拍照後再進行設計）。',
    tags: ['Poster', 'Illustration', 'Experiment'],
    images: [{ src: '/works/snake.jpg', alt: '三張風格各異的海報：黃色蛇形、紅色森林、藍綠色海洋', w: 1400, h: 787 }],
  },
  {
    slug: 'tigger-menu',
    title: '品牌延伸｜Tigger Coffee & Bar 菜單',
    category: 'graphic',
    summary: 'Tigger Coffee & Bar 的菜單設計。內頁採米色舊紙質感，印有海浪與海龜的線稿及一句問話；封面與封底為深紅色，配上老虎花紋，並標示營業時間 15:00 至 00:00。',
    tags: ['Branding', 'Menu Design', 'Layout'],
    images: [{ src: '/works/menu.jpg', alt: 'Tigger Coffee & Bar 菜單封面與內頁', w: 1400, h: 530 }],
  },
  {
    slug: 'ugly-doll',
    title: '《醜娃娃》繪本',
    category: 'editorial',
    summary: '《醜娃娃》是我自己繪製的繪本。主角是穿粉紅洋裝、眼睛為鈕釦的布娃娃，與其他娃娃一同擺在貨架上。故事想傳達的是：每個人都有自己的樣子，不必符合他人對美的標準。',
    tags: ['Story', 'Layout', 'Editorial Design'],
    images: [{ src: '/works/book.jpg', alt: '《醜娃娃》繪本封面與內頁', w: 1400, h: 635 }, { src: '/works/book-pages.jpg', alt: '《醜娃娃》繪本內頁排版', w: 1400, h: 787 }],
  },
  {
    slug: 'plum-violet',
    title: 'Plum Violet｜色彩研究',
    category: 'editorial',
    summary: '以 Plum Violet 為主題的色彩研究，編排成一本編輯設計。內容分為色彩介紹、歷史與知識、服裝搭配、生活應用與品牌連結，版面以紫色為主調，並附上 Pantone 色票。',
    tags: ['Editorial Design', 'Color Research', 'Layout'],
    images: [{ src: '/works/plum.jpg', alt: 'Plum Violet 色彩研究的封面與目錄', w: 1400, h: 591 }, { src: '/works/plum-pages.jpg', alt: 'Plum Violet 色彩研究的內頁編排', w: 1400, h: 1193 }],
  },
  {
    slug: 'type-layout-dfa',
    title: '文字排版練習｜DEATH FROM ABOVE 1979',
    category: 'type',
    summary: '文字排版練習，素材為 Death from Above 1979 的專輯資訊。同一段文字分別以斜排、橫排與直排編排，黑色大字疊在帶有顆粒質感的白底上。',
    tags: ['Typography', 'Layout', 'Typesetting'],
    images: [
      { src: '/works/dfa-1.jpg', alt: '文字排版練習一：文字斜排，搭配念珠與噪點底圖', w: 1400, h: 1400 },
      { src: '/works/dfa-2.jpg', alt: '文字排版練習二：文字橫排，搭配星系與噪點底圖', w: 1400, h: 1400 },
      { src: '/works/dfa-3.jpg', alt: '文字排版練習三：文字直排，搭配花朵與噪點底圖', w: 1400, h: 1400 },
    ],
  },
  {
    slug: 'sun-still-rises',
    title: '太陽照常升起｜文字設計海報',
    category: 'graphic',
    summary: '文字設計海報。「太陽照常升起」以手寫風格的字體呈現，下方是「請往前走，不要在此停留」，中央為一顆紅色的圓，背景由藍漸層至橘色，英文標語為 May the flowers bloom again.',
    tags: ['Lettering', 'Chinese Typography', 'Poster'],
    images: [{ src: '/works/sun-poster.jpg', alt: '太陽照常升起文字設計海報：藍天與紅日漸層上的白色手寫字', w: 1100, h: 1555 }],
  },
  {
    slug: 'jester-cat',
    title: '小丑貓 IP｜角色設計',
    category: 'illustration',
    summary: '小丑貓的角色設計。灰色的貓戴著縫有星星的小丑帽，身上是補丁布料。設定圖包含線稿草圖，以及三種姿態與表情，另附一張線稿與一個大頭圖。',
    tags: ['Character', 'IP', 'Illustration'],
    images: [
      { src: '/works/jester-cat.jpg', alt: '小丑貓角色設定圖：灰黑拼布帽與紅色鞋子，三個姿態與一張草稿', w: 1300, h: 1662 },
      { src: '/works/jester-line.jpg', alt: '小丑貓線稿：戴著星星拼布帽的貓在空中跳躍，旁邊飄著幾顆圓球', w: 1200, h: 1200 },
      { src: '/works/jester-icon.jpg', alt: '小丑貓大頭圖：閉著眼微笑，拼布帽左淺灰右深灰，帽上有米黃與暗紅星星', w: 1000, h: 1333 },
    ],
  },
  {
    slug: 'bb-girl',
    title: 'BB｜圍裙女孩',
    category: 'illustration',
    summary: '以粉紅、紫與深藍三色繪製的插畫。女孩身穿圍裙，胸前別著「BB」名牌，手持魔杖，周圍環繞著蝴蝶、星芒與植物的剪影。',
    tags: ['Illustration', 'Limited Palette', 'Character'],
    images: [{ src: '/works/bb-girl.jpg', alt: '粉紅、紫與深藍三色插畫：舉著魔杖、穿圍裙的女孩，周圍有蝴蝶與星芒', w: 1200, h: 1800 }],
  },
  {
    slug: 'portrait-studies',
    title: '人像習作',
    category: 'illustration',
    summary: '三張人像習作：白髮藍眼的半身像、站在綠色橫紋背景前的捲髮女孩，以及米灰色調、蘑菇頭的男生。',
    tags: ['Portrait', 'Digital Painting', 'Illustration'],
    images: [
      { src: '/works/portrait-a.jpg', alt: '白髮藍眼的半身人像，暖橘色膚色', w: 1100, h: 1466 },
      { src: '/works/portrait-b.jpg', alt: '綠色橫紋背景前的捲髮女孩，穿米色長洋裝並背著包', w: 1100, h: 1555 },
      { src: '/works/portrait-c.jpg', alt: '米灰色調的男生人像，蘑菇頭髮型', w: 1100, h: 1100 },
    ],
  },
  {
    slug: 'rib-print',
    title: '肋骨｜版畫風插畫',
    category: 'illustration',
    summary: '黑白版畫風格的插畫。女孩在浴室鏡子前舉著手機自拍，胸口被畫成一副肋骨，鏡前擺著牙刷與瓶罐。',
    tags: ['Black & White', 'Print Style', 'Illustration'],
    images: [{ src: '/works/rib-print.jpg', alt: '黑白版畫風插畫：女孩對鏡自拍，胸腔是肋骨，鏡前有牙刷與瓶罐', w: 1200, h: 1600 }],
  },
  {
    slug: 'forget',
    title: 'forget｜文字與影像',
    category: 'type',
    summary: '以 forget 為題的四張圖：黑底白字的造型字、灰白色模糊的手寫字、刻意缺漏筆畫並重複排列的 FORGET，以及一張黑色顆粒的抽象影像。',
    tags: ['Typography', 'Glitch', 'Image'],
    images: [
      { src: '/works/forget-2.jpg', alt: '黑底白字的 forget 造型字，中間有載入中的圖示', w: 1200, h: 1200 },
      { src: '/works/forget-1.jpg', alt: '灰白色模糊故障的手寫字 forget', w: 1200, h: 1200 },
      { src: '/works/forget-3.jpg', alt: '白底黑字 FORGET，字母被刻意缺漏後重複排列', w: 1200, h: 1200 },
      { src: '/works/forget-4.jpg', alt: '黑色顆粒的模糊抽象影像', w: 1200, h: 1200 },
    ],
  },
  {
    slug: 'life-poster',
    title: 'LIFE｜海報',
    category: 'graphic',
    summary: '藍色的 LIFE 海報。三排 LIFE 的字格內畫有白色線稿，包括魚、鯨魚，以及漂在海中的瓶罐垃圾。',
    tags: ['Poster', 'Illustration', 'Lettering'],
    images: [{ src: '/works/life.jpg', alt: '藍色 LIFE 海報：字母格中有海洋生物與瓶罐垃圾的白色線稿', w: 1200, h: 1697 }],
  },
  {
    slug: 'birthday-card',
    title: '生日賀卡',
    category: 'illustration',
    summary: '手繪的生日賀卡。畫面中一對情侶相依，女孩抱著綠色小熊，男孩伸手輕觸她的臉頰，前方是點著蠟燭的蛋糕。',
    tags: ['Card', 'Portrait', 'Illustration'],
    images: [{ src: '/works/birthday.jpg', alt: 'Happy Birthday 賀卡插畫：女孩抱著綠色小熊，男孩伸手輕點她的臉頰', w: 1200, h: 1800 }],
  },
  {
    slug: 'night-falls',
    title: '夜幕｜Night Falls',
    category: 'graphic',
    summary: '這是品牌設計課的作業，由我獨立完成，品牌名為「夜幕 Night Falls」。整體以黑色與銀灰色為主，標誌由蝙蝠翅膀與人臉側影疊合而成。海報中放置墨水瓶與羽毛筆，並展示名片、筆記本、信封、蠟封章與提袋等應用。',
    tags: ['Brand Identity', 'Logo', 'Stationery'],
    images: [
      { src: '/works/nightfalls.jpg', alt: '夜幕 Night Falls 品牌海報：墨水瓶與羽毛筆，下方是名片、筆記本、蠟封章信封與提袋', w: 1190, h: 1700 },
    ],
  },
  {
    slug: 'sleepless',
    year: '2024',
    title: '不眠樂｜sleepless',
    category: 'graphic',
    summary: '2024 年製作的虛構音樂品牌「不眠樂」，本件為 CD 專輯包裝的展示海報，以黑與紫為主色。圖形從 A、B、C 三組發想中選定 A-08，重複排列成紋樣，應用於光碟、盒封與貓面具；版面另附品牌理念與色彩說明。',
    tags: ['Brand Identity', 'Packaging', 'Pattern'],
    images: [
      { src: '/works/sleepless.jpg', alt: '不眠樂 sleepless 的 CD 包裝海報：紫色紋樣的光碟與盒封、貓面具、色票與圖形發想', w: 1202, h: 1700 },
    ],
  },
  {
    slug: 'ocean-not-bin',
    title: '海洋≠回收桶｜環保海報',
    category: 'graphic',
    summary: '環保海報。回收桶被畫成裝滿海水的透明水桶，裡面有珊瑚、魚與海星，一個玻璃瓶正落入水中。背景為藍色的垃圾線稿，下方標語是「海洋≠回收桶」。',
    tags: ['Poster', 'Illustration', 'Environmental'],
    images: [
      { src: '/works/ocean.jpg', alt: '海洋≠回收桶海報：藍色水桶形狀的海水，裡面有珊瑚與魚，上方落下一個玻璃瓶', w: 1060, h: 1500 },
    ],
  },
  {
    slug: 'yue-rong',
    title: '悅容｜仿古 Q 版角色 IP',
    category: 'graphic',
    summary: '高中專題，為團隊作品，我擔任美術主要負責人，負責插畫線稿、上色細化，以及包裝的開模與印刷。專題以古代美人為題，設計成 Q 版角色，並設定為化妝品品牌：貂蟬、西施、王昭君與楊玉環各有一組代表色，應用於圓鐵盒、香水瓶、包裝盒、識別證套、名片與 DM。團隊另外製作了黏土公仔，壓克力立牌則由我製作。',
    tags: ['Character IP', 'Packaging', 'Brand Identity'],
    images: [
      { src: '/works/yuerong.jpg', alt: '悅容展桌：黏土公仔、壓克力立牌、識別證套、名片、圓形鐵盒與扇形包裝，後方是說明板', w: 1035, h: 943 },
      { src: '/works/yr-chars.jpg', alt: '四位 Q 版古代美人頭像：貂蟬（紅）、西施（紫）、王昭君（綠）、楊玉環（粉）', w: 1600, h: 1600 },
      { src: '/works/yr-photo2.jpg', alt: '悅容展桌的另一個角度：香水瓶、鐵盒、公仔、立牌、名片與扇形包裝', w: 1179, h: 1012 },
      { src: '/works/yr-products.jpg', alt: '衍生產品：圓形鐵盒、產品使用說明書，以及四色名片與卡片', w: 1500, h: 964 },
      { src: '/works/yr-pack.jpg', alt: '包裝設計：罐子、盒子、香水瓶、展開圖與四色標籤', w: 1500, h: 1035 },
      { src: '/works/yr-merch.jpg', alt: '周邊與 DM：識別證套、名片、四位角色的宣傳 DM 與卡片', w: 1500, h: 989 },
    ],
  },
  {
    slug: 'colored-pencil',
    title: '色鉛筆｜昆蟲、花與面部',
    category: 'handdrawn',
    summary: '高中時期的色鉛筆練習，題材有停在松針上的瓢蟲、停在紫花上的鳳蝶、一團紫色繡球花，以及只畫眼睛與嘴唇的臉部局部。',
    tags: ['Colored Pencil', 'Realism', 'Study'],
    images: [
      { src: '/works/hd-ladybug.jpg', alt: '色鉛筆繪製的瓢蟲，停在綠色松針上', w: 1470, h: 941 },
      { src: '/works/hd-butterfly.jpg', alt: '色鉛筆繪製的鳳蝶，停在紫色小花上', w: 1470, h: 938 },
      { src: '/works/hd-hydrangea.jpg', alt: '色鉛筆繪製的紫色繡球花', w: 911, h: 1470 },
      { src: '/works/hd-eyelip.jpg', alt: '色鉛筆繪製的一隻藍色眼睛與紅色嘴唇', w: 1067, h: 1470 },
    ],
  },
  {
    slug: 'sketch-still-life',
    title: '鉛筆素描｜靜物',
    category: 'handdrawn',
    summary: '高中時期的鉛筆素描，包含一組軟管、噴霧瓶與水瓶的靜物、一台腳踏車，以及楊桃與一顆小果實。',
    tags: ['Pencil', 'Still Life', 'Study'],
    images: [
      { src: '/works/hd-still-life.jpg', alt: '鉛筆素描靜物：軟管、噴霧瓶、水瓶、玻璃珠與網狀布', w: 744, h: 1023 },
      { src: '/works/hd-bike.jpg', alt: '鉛筆素描的腳踏車', w: 1360, h: 901 },
      { src: '/works/hd-starfruit.jpg', alt: '鉛筆素描的楊桃與一顆小果實', w: 1083, h: 1500 },
    ],
  },
  {
    slug: 'sketch-portrait',
    title: '鉛筆素描｜人像與動物',
    category: 'handdrawn',
    summary: '高中時期的鉛筆素描，題材有捲髮女孩、長髮女孩、留鬍子的老先生，以及一頭套著繩編籠頭的牛。',
    tags: ['Pencil', 'Portrait', 'Study'],
    images: [
      { src: '/works/hd-girl-curly.jpg', alt: '鉛筆素描：穿著拼色上衣的捲髮女孩', w: 1075, h: 1382 },
      { src: '/works/hd-girl-long.jpg', alt: '鉛筆素描：長髮女孩的正面肖像', w: 1030, h: 1470 },
      { src: '/works/hd-old-man.jpg', alt: '鉛筆素描：留鬍子的老先生', w: 1027, h: 1419 },
      { src: '/works/hd-cow.jpg', alt: '鉛筆素描：套著繩籠頭的牛', w: 1015, h: 1412 },
    ],
  },
  {
    slug: 'watercolor',
    title: '水彩習作',
    category: 'handdrawn',
    summary: '高中時期的水彩練習。靜物有紅色飲料的高腳杯、漢堡薯條、玻璃杯、戴條紋帽的小鳥、櫻桃飲料與巧克力蛋糕；另外也畫了風景、路燈，以及有金色圓頂的歐式建築。',
    tags: ['Watercolor', 'Still Life', 'Study'],
    images: [
      { src: '/works/wc-wine.jpg', alt: '水彩：裝著紅色飲料的高腳杯，背景是藍綠色暈染', w: 1083, h: 1500 },
      { src: '/works/wc-burger.jpg', alt: '水彩：漢堡與薯條', w: 964, h: 1500 },
      { src: '/works/wc-glasses.jpg', alt: '水彩：兩個藍色透明玻璃杯', w: 964, h: 1500 },
      { src: '/works/wc-bird.jpg', alt: '水彩：戴著紫黃條紋帽與圍巾的小鳥，站在松枝與鈴鐺上', w: 1084, h: 1500 },
      { src: '/works/wc-barn.jpg', alt: '水彩風景：黃綠色天空下的紅色穀倉，旁邊停著一輛小貨車', w: 1224, h: 891 },
      { src: '/works/wc-snow.jpg', alt: '水彩風景：雪地裡的深綠色房子與小貨車', w: 774, h: 540 },
      { src: '/works/wc-cherry.jpg', alt: '水彩：杯中的紅色飲料，放著櫻桃與檸檬片', w: 511, h: 781 },
      { src: '/works/wc-cake.jpg', alt: '水彩：黑色盤子上的巧克力三角蛋糕，頂端有草莓與鮮奶油', w: 1156, h: 727 },
      { src: '/works/wc-lantern.jpg', alt: '水彩：鑄鐵支架上掛著的老式路燈', w: 655, h: 1178 },
      { src: '/works/wc-building.jpg', alt: '水彩加鋼筆：有金色圓頂的歐式建築', w: 1074, h: 916 },
    ],
  },
  {
    slug: 'characters',
    title: '角色人像',
    category: 'illustration',
    summary: '數位繪製的角色人像，共八張：戴眼鏡的女孩、金髮男子、抱著兔子的生日賀圖、藍色挑染的男子、額頭有疤的男子、棕髮留鬍子的男子、戴粉紅動物耳朵的男孩，以及一對並肩的情侶。',
    tags: ['Character', 'Portrait', 'Digital Painting'],
    images: [
      { src: '/works/girl-glasses.jpg', alt: '紫粉色調插畫：戴透明框眼鏡、綁低髮髻的女孩，簽名日期 2023/11/26', w: 990, h: 1400 },
      { src: '/works/char-blond.jpg', alt: '綠色背景前，金髮留鬍子的男子笑著', w: 1126, h: 1400 },
      { src: '/works/char-birthday.jpg', alt: '藍色背景的生日賀圖：男子抱著一隻棕色兔子，寫著 Happy Birthday', w: 1191, h: 1375 },
      { src: '/works/char-blue.jpg', alt: '藍色挑染黑髮的男子，微笑並歪著頭', w: 1400, h: 1400 },
      { src: '/works/char-scar.jpg', alt: '額頭有疤的黑髮男子，穿白襯衫與棕色外套', w: 1400, h: 1400 },
      { src: '/works/char-bearded.jpg', alt: '淺藍色背景前，留鬍子的棕髮男子，綠眼睛，穿粉紅色上衣', w: 1400, h: 1400 },
      { src: '/works/char-pigears.jpg', alt: '青綠色圓形背景前，戴粉紅動物耳朵的棕髮男孩', w: 1400, h: 1400 },
      { src: '/works/char-couple.jpg', alt: '藍髮戴眼鏡的女孩與白髮男孩並肩，穿深色立領制服', w: 1400, h: 1330 },
    ],
  },
  {
    slug: 'suffocation',
    year: '2023',
    title: '窒息｜封面插畫',
    category: 'illustration',
    summary: '2023 年作品集《窒息》的封面插畫。正面是浮在水中的女孩，周圍環繞紫藍色的光網與氣泡；封底為深藍色的水下，有一個潛水者的剪影。',
    tags: ['Cover Illustration', 'Digital Painting', 'Portfolio'],
    images: [
      { src: '/works/sf-cover.jpg', alt: '《窒息 suffocation》作品集封面與封底：左邊是潛水者的深藍水下，右邊是水中的女孩', w: 1700, h: 1186 },
      { src: '/works/sf-girl.jpg', alt: '水中的女孩，臉被紫藍色的光網與氣泡圍繞', w: 1060, h: 1500 },
    ],
  },
  {
    slug: 'ioaf-2021',
    year: '2021',
    title: '海洋藝術節｜Special Award',
    category: 'graphic',
    summary: '2021 年 IOAF 國際海洋藝術節（Art Star Awards，韓國濟州）Special Award 得獎作品。我將鐵絲折成魚的形狀，拍成照片後再進行設計：青綠色的海底有纏繞的鐵絲與一條掛著淚滴的魚，上下兩行文字為 THEIR FUTURE? 與 OUR FUTURE.，作品後附有證書。',
    tags: ['Award', 'Poster', 'Wire Sculpture'],
    images: [
      { src: '/works/ocean-future.jpg', alt: '深青色海報：纏繞的鐵絲折成魚，掛著一滴淚，寫著 THEIR FUTURE? OUR FUTURE.', w: 776, h: 1141 },
      { src: '/works/ioaf-cert.jpg', alt: 'IOAF 2021 國際海洋藝術節 Special Award 證書', w: 919, h: 1300 },
    ],
  },
  {
    slug: 'ocean-heart',
    title: 'OCEAN is our heart.｜海洋心臟海報',
    category: 'graphic',
    summary: '藍色海報。心臟的輪廓由海浪與魚群組成，紅色與深藍的色塊疊在淺藍的水面上，左下角寫著 OCEAN is our heart.',
    tags: ['Poster', 'Ocean', 'Illustration'],
    images: [
      { src: '/works/ocean-heart.jpg', alt: '藍色海報：以海浪與魚群畫成的心臟，下方寫著 OCEAN is our heart.', w: 990, h: 1400 },
    ],
  },
  {
    slug: 'marker',
    title: '麥克筆插畫｜海報與人物',
    category: 'handdrawn',
    summary: '課堂作業，全部以麥克筆繪製。六張海報的主題分別為救溺與防溺、原住民族、故宮西洋美術展、地震避難、桌遊與路跑賽，另有四張人物肖像。',
    tags: ['Marker', 'Poster', 'Portrait'],
    images: [
      { src: '/works/mk-flood.jpg', alt: '麥克筆海報：救溺五步、防溺十招，水中有許多戴泳帽的人物', w: 738, h: 1044 },
      { src: '/works/mk-force.jpg', alt: '麥克筆海報：原力覺醒，人像臉部被切開成圖案，下方寫著 Austronesian', w: 736, h: 1042 },
      { src: '/works/mk-museum.jpg', alt: '麥克筆海報：2022 故宮經典西洋美術展，金髮女子與色塊拼貼', w: 761, h: 1078 },
      { src: '/works/mk-quake.jpg', alt: '麥克筆海報：地動山搖一瞬間，正確避難保安全，戴安全帽的人物', w: 697, h: 987 },
      { src: '/works/mk-game.jpg', alt: '麥克筆海報：益智瘋桌遊，穿綠色連帽衣的男孩在棋盤上玩桌遊', w: 715, h: 1018 },
      { src: '/works/mk-367.jpg', alt: '麥克筆海報：惠海路跑賽，捲髮男子握著水瓶', w: 726, h: 1018 },
      { src: '/works/mk-p1.jpg', alt: '麥克筆人物：戴眼鏡、紫色頭髮的男子', w: 393, h: 557 },
      { src: '/works/mk-p2.jpg', alt: '麥克筆人物：紫色短髮、脖子上有 666 刺青的女子', w: 370, h: 504 },
      { src: '/works/mk-p3.jpg', alt: '麥克筆人物：灰色捲髮、手托著下巴的老太太', w: 420, h: 457 },
      { src: '/works/mk-p4.jpg', alt: '麥克筆人物：灰髮、戴眼鏡的老先生，穿毛領外套', w: 436, h: 533 },
    ],
  },
  {
    slug: 'pixel-sprites',
    title: '像素角色｜Overwatch 角色重新設計',
    category: 'illustration',
    summary: '將遊戲《Overwatch》的三個角色重新繪製為像素小人，並保留各自的武器與配色。',
    tags: ['Pixel Art', 'Redesign', 'Game Character'],
    images: [
      { src: '/works/pixel-sprites.png', alt: '三個像素風小角色並排', w: 1150, h: 500 },
    ],
  },
];

export const featuredSlugs = ['night-falls', 'stock-comeback', 'yue-rong', 'ioaf-2021', 'ah-boo-font', 'one-to-one'];

// 分層：主打作品 → 更多創作（列在作品頁下方）→ 收藏（不列在作品頁，網址仍可進入）。
// 要把作品升降級，只要在下面兩個清單加減 slug。
export const moreSlugs = ['visual-experiments', 'forget', 'type-layout-dfa', 'vertical-type-poster', 'ocean-not-bin', 'ocean-heart', 'life-poster', 'ugly-doll', 'jester-cat', 'rib-print'];
export const archiveSlugs = ['range-rover-video', 'xmas-wonderland', 'hot-topic', 'colored-pencil', 'sketch-still-life', 'sketch-portrait', 'watercolor', 'illustration', 'portrait-studies', 'characters', 'bb-girl', 'birthday-card', 'marker', 'pixel-sprites'];
const rank = (w: Work) => (archiveSlugs.includes(w.slug) ? 2 : moreSlugs.includes(w.slug) ? 1 : 0);
const sorted = [...raw].sort((a, b) => rank(a) - rank(b)); // 穩定排序，同層維持原順序
/** 所有作品（含收藏），用來產生每個作品頁 */
export const works: Work[] = sorted;
export const mainWorks = sorted.filter((w) => rank(w) === 0);
export const moreWorks = sorted.filter((w) => rank(w) === 1);
/** 作品頁會列出的作品（主打 + 更多創作） */
export const listedWorks = [...mainWorks, ...moreWorks];
export const bySlug = (s: string) => works.find((w) => w.slug === s)!;
