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

const typeText = '從英文字母、數字到中文字形，整理字體的筆畫與造型，使不同字元之間維持一致的視覺特徵。這次練習著重在字形的造型與排列，希望讓文字即使脫離一般閱讀功能，也能成為具有個性的視覺元素。';
const posterText = '以字體為主要設計元素，結合版面編排與視覺構成，模擬活動海報及雜誌封面、封底的設計。';

export const works: Work[] = [
  {
    slug: 'stock-comeback',
    title: '股海翻身｜欠債千萬的股市人生',
    category: 'game',
    summary: '獨立企劃並與 AI 協作開發的網頁遊戲。從「欠債千萬」的故事開場、難度與數值設計，到像素美術、商城與成就系統，完整做出一款可遊玩、可分享的產品。',
    tags: ['Game Planning', 'Pixel Art', 'AI-assisted Development'],
    images: [{ src: '/works/game.jpg', alt: '《股海翻身》網頁遊戲的三個畫面：開場、商城與成就', w: 1400, h: 667 }],
    links: [{ label: '立即試玩', href: 'https://youzi900g-bblin.github.io/stock-comeback/' }],
  },
  {
    slug: 'range-rover-video',
    title: '興裕汽車音響｜安卓主機安裝宣傳片',
    category: 'video',
    summary: '為汽車音響店家製作的社群宣傳短片。依「原廠保留 → 新功能展示 → 品牌收尾」安排節奏，用字卡逐一標出賣點，讓車主 30 秒內看懂升級價值。',
    tags: ['Editing', 'Copywriting', 'Social Video'],
    images: [{ src: '/works/video.jpg', alt: '興裕汽車音響宣傳片：Range Rover 與安卓主機畫面', w: 1400, h: 1083 }],
    links: [{ label: '觀看影片', href: 'https://youtu.be/mCgeZjNUOlA' }],
  },
  {
    slug: 'bringing-visuals-into-motion',
    title: '手繪動畫｜Bringing Visuals Into Motion',
    category: 'video',
    summary: '這段影片是我親手繪製加剪輯的作品，也是我首次接觸 AE 這個軟體，透過畫面和音樂的配合，我努力放大每一個情感瞬間，每一次轉場和節奏都花了我很多時間，以確保畫面流暢、故事連貫。',
    tags: ['Hand-drawn', 'After Effects', 'Editing'],
    images: [{ src: '/works/motion.jpg', alt: '手繪的人物與角色草稿，用於 After Effects 動畫', w: 1400, h: 1280 }],
    links: [{ label: '觀看影片', href: 'https://youtu.be/att5Oh_z01g' }],
  },
  {
    slug: 'hot-topic',
    title: '影像剪輯練習｜Hot Topic',
    category: 'video',
    summary: '影像剪輯與視覺設計練習，透過不同畫面與節奏建立作品的情緒。',
    tags: ['Editing', 'Visual Design'],
    images: [{ src: '/works/motion-edit.jpg', alt: '影像剪輯練習的畫面與 Hot Topic 字樣', w: 1400, h: 430 }],
    links: [{ label: '觀看影片', href: 'https://youtu.be/mrNUA03MBqM' }],
  },
  {
    slug: 'illustration',
    title: '插畫｜人物與角色',
    category: 'illustration',
    summary: '從人物與角色出發，嘗試透過線條、色彩與表情呈現不同的個性與情緒。',
    tags: ['Observation', 'Character', 'Line', 'Expression'],
    images: [{ src: '/works/illustration.jpg', alt: '彩色馬克筆繪製的女孩人物插畫，周圍有閃光星星', w: 982, h: 1374 }, { src: '/works/illustration-pink.jpg', alt: '粉紅背景的人物插畫，少女側臉', w: 663, h: 542 }, { src: '/works/illustration-sketch.jpg', alt: '灰階手繪的男性人物插畫', w: 675, h: 644 }],
  },
  {
    slug: 'ah-boo-font',
    title: 'Ah Boo Font｜手寫字體',
    category: 'type',
    summary: typeText,
    tags: ['Letterform', 'Typeface', 'Chinese Typography'],
    images: [{ src: '/works/type-font.jpg', alt: 'Ah Boo Font 手寫字體的英文字母與數字', w: 1400, h: 480 }],
  },
  {
    slug: 'vertical-type-poster',
    title: '字體海報｜你會不會和我一樣',
    category: 'type',
    summary: posterText,
    tags: ['Chinese Typography', 'Poster', 'Layout'],
    images: [{ src: '/works/type-poster.jpg', alt: '中文直排字體海報，文字為「你會不會和我一樣」', w: 845, h: 1463 }],
  },
  {
    slug: 'one-to-one',
    title: 'one to one｜雜誌封面與封底',
    category: 'type',
    summary: posterText,
    tags: ['Typeface', 'Magazine', 'Layout'],
    images: [{ src: '/works/type-onetoone.jpg', alt: 'one to one 雜誌封面與封底設計', w: 1300, h: 929 }],
  },
  {
    slug: 'xmas-wonderland',
    title: '耶誕小鎮｜活動海報',
    category: 'graphic',
    summary: posterText,
    tags: ['Poster', 'Typography', 'Visual Concept'],
    images: [{ src: '/works/xmas.jpg', alt: '2025 耶誕小鎮活動海報', w: 1040, h: 1463 }],
  },
  {
    slug: 'infection',
    title: 'INFECTION｜電影海報',
    category: 'graphic',
    summary: '以 3D 黏土塑像的實拍與合成為基礎，透過光影變化與黑白色調，營造出不安且壓迫的視覺氛圍。',
    tags: ['Poster', 'Visual Concept'],
    images: [{ src: '/works/infection.jpg', alt: 'INFECTION 海報：黑白森林中的黏土怪物', w: 1040, h: 1463 }],
  },
  {
    slug: 'dead-line',
    title: 'DEAD LINE｜海報',
    category: 'graphic',
    summary: '加入少量紅色作為強烈對比，希望透過具象的視覺語言，呈現面對期限時的焦慮與壓力。',
    tags: ['Poster', 'Visual Concept'],
    images: [{ src: '/works/deadline.jpg', alt: 'DEAD LINE 海報：黑灰畫面與紅色眼睛', w: 701, h: 1053 }],
  },
  {
    slug: 'visual-experiments',
    title: '視覺實驗｜Different stories, different visual languages',
    category: 'graphic',
    summary: '透過不同題材與風格進行視覺實驗，從鮮明色彩、手繪線條到暗色調影像，探索不同情緒在平面設計中的呈現方式。',
    tags: ['Poster', 'Illustration', 'Experiment'],
    images: [{ src: '/works/snake.jpg', alt: '三張風格各異的海報：黃色蛇形、紅色森林、藍綠色海洋', w: 1400, h: 787 }],
  },
  {
    slug: 'tigger-menu',
    title: '品牌延伸｜Tigger Coffee & Bar 菜單',
    category: 'graphic',
    summary: '將品牌概念延伸至菜單、封面與店內視覺，透過插畫、字體與版面建立一致的品牌氛圍。',
    tags: ['Branding', 'Menu Design', 'Layout'],
    images: [{ src: '/works/menu.jpg', alt: 'Tigger Coffee & Bar 菜單封面與內頁', w: 1400, h: 530 }],
  },
  {
    slug: 'ugly-doll',
    title: '《醜娃娃》繪本',
    category: 'editorial',
    summary: '在創作這本繪本的過程中，我希望能透過畫面與故事傳遞「接納自己」的概念。社會往往對「美」有既定標準，但我想表達的是，每個人都有獨特的美與價值。',
    tags: ['Story', 'Layout', 'Editorial Design'],
    images: [{ src: '/works/book.jpg', alt: '《醜娃娃》繪本封面與內頁', w: 1400, h: 635 }, { src: '/works/book-pages.jpg', alt: '《醜娃娃》繪本內頁排版', w: 1400, h: 787 }],
  },
  {
    slug: 'plum-violet',
    title: 'Plum Violet｜色彩研究',
    category: 'editorial',
    summary: '以 Plum Violet 為主題，從色彩特性、歷史、服裝、生活應用與品牌案例進行研究，將資料整理成完整的編輯設計。',
    tags: ['Editorial Design', 'Color Research', 'Layout'],
    images: [{ src: '/works/plum.jpg', alt: 'Plum Violet 色彩研究的封面與目錄', w: 1400, h: 591 }, { src: '/works/plum-pages.jpg', alt: 'Plum Violet 色彩研究的內頁編排', w: 1400, h: 1193 }],
  },
  {
    slug: 'type-layout-dfa',
    title: '文字排版練習｜DEATH FROM ABOVE 1979',
    category: 'type',
    summary: '文字排版練習。同一組文字資訊，以斜排、橫排與直排三種方式編排版面。',
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
    category: 'type',
    summary: '以手寫字體設計的文字海報：「太陽照常升起，請往前走，不要在此停留」，搭配英文 May the flowers bloom again.',
    tags: ['Lettering', 'Chinese Typography', 'Poster'],
    images: [{ src: '/works/sun-poster.jpg', alt: '太陽照常升起文字設計海報：藍天與紅日漸層上的白色手寫字', w: 1100, h: 1555 }],
  },
  {
    slug: 'jester-cat',
    title: '小丑貓 IP｜角色設計',
    category: 'illustration',
    summary: '小丑貓的角色 IP：設定圖、線稿與大頭圖。設定圖含線稿草圖，以及三個不同的姿態與表情。',
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
    summary: '粉紅、紫與深藍三色的插畫。穿著圍裙、胸前有「BB」名牌的女孩舉著魔杖，周圍有蝴蝶、星芒與植物剪影。',
    tags: ['Illustration', 'Limited Palette', 'Character'],
    images: [{ src: '/works/bb-girl.jpg', alt: '粉紅、紫與深藍三色插畫：舉著魔杖、穿圍裙的女孩，周圍有蝴蝶與星芒', w: 1200, h: 1800 }],
  },
  {
    slug: 'portrait-studies',
    title: '人像習作',
    category: 'illustration',
    summary: '三張人像習作：白髮藍眼的半身像、綠色橫紋背景的捲髮女孩，以及米灰色調的男生側臉。',
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
    summary: '黑白版畫風的插畫。女孩在浴室鏡前舉著手機拍照，胸腔的位置畫成肋骨。',
    tags: ['Black & White', 'Print Style', 'Illustration'],
    images: [{ src: '/works/rib-print.jpg', alt: '黑白版畫風插畫：女孩對鏡自拍，胸腔是肋骨，鏡前有牙刷與瓶罐', w: 1200, h: 1600 }],
  },
  {
    slug: 'forget',
    title: 'forget｜文字與影像',
    category: 'type',
    summary: '以 forget 為題的一組文字與影像：模糊故障的手寫字、剪影造型字、缺字重複排列，以及黑色顆粒的抽象影像。',
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
    summary: '藍色調的 LIFE 海報。字格裡是海洋的線稿，有魚、鯨與漂浮的垃圾。',
    tags: ['Poster', 'Illustration', 'Lettering'],
    images: [{ src: '/works/life.jpg', alt: '藍色 LIFE 海報：字母格中有海洋生物與瓶罐垃圾的白色線稿', w: 1200, h: 1697 }],
  },
  {
    slug: 'birthday-card',
    title: '生日賀卡',
    category: 'illustration',
    summary: '手繪的生日賀卡：一對情侶，女孩抱著綠色小熊，蛋糕上點著蠟燭。',
    tags: ['Card', 'Portrait', 'Illustration'],
    images: [{ src: '/works/birthday.jpg', alt: 'Happy Birthday 賀卡插畫：女孩抱著綠色小熊，男孩伸手輕點她的臉頰', w: 1200, h: 1800 }],
  },
  {
    slug: 'night-falls',
    title: '夜幕｜Night Falls',
    category: 'graphic',
    summary: '品牌設計課的作業。以黑與銀灰為基調，標誌是蝙蝠翅膀與側臉疊成的輪廓，並延伸到名片、筆記本、信封與蠟封章、購物提袋與筆記本等應用。',
    tags: ['Brand Identity', 'Logo', 'Stationery'],
    images: [
      { src: '/works/nightfalls.jpg', alt: '夜幕 Night Falls 品牌海報：墨水瓶與羽毛筆，下方是名片、筆記本、蠟封章信封與提袋', w: 1190, h: 1700 },
    ],
  },
  {
    slug: 'sleepless',
    title: '不眠樂｜sleepless',
    category: 'graphic',
    summary: '虛構音樂品牌「不眠樂」的 CD 專輯包裝與品牌識別（2024）。黑與紫是主色；圖形從 A、B、C 三個發想挑出 A-08，延伸成重複的紋樣，用在光碟、盒封與面具上。版面也整理了品牌理念、色彩靈感與圖形發想。',
    tags: ['Brand Identity', 'Packaging', 'Pattern'],
    images: [
      { src: '/works/sleepless.jpg', alt: '不眠樂 sleepless 的 CD 包裝海報：紫色紋樣的光碟與盒封、貓面具、色票與圖形發想', w: 1202, h: 1700 },
    ],
  },
  {
    slug: 'ocean-not-bin',
    title: '海洋≠回收桶｜環保海報',
    category: 'graphic',
    summary: '環保主題的海報。回收桶被畫成裝滿海水的透明桶子，裡面有珊瑚、魚與海星；背景是漂浮垃圾的線稿，下方標語是「海洋≠回收桶」。',
    tags: ['Poster', 'Illustration', 'Environmental'],
    images: [
      { src: '/works/ocean.jpg', alt: '海洋≠回收桶海報：藍色水桶形狀的海水，裡面有珊瑚與魚，上方落下一個玻璃瓶', w: 1060, h: 1500 },
    ],
  },
  {
    slug: 'yue-rong',
    title: '悅容｜楊玉環 Q 版角色 IP',
    category: 'graphic',
    summary: '高中專題。以古代人物為題的仿古 Q 版角色 IP，設定為化妝品品牌。展桌上有黏土公仔、壓克力立牌、識別證套、名片、圓形鐵盒與扇形包裝等周邊，旁邊的說明板整理了標準字、色票與角色設定。',
    tags: ['Character IP', 'Packaging', 'Brand Identity'],
    images: [
      { src: '/works/yuerong.jpg', alt: '悅容展桌：黏土公仔、壓克力立牌、識別證套、名片、圓形鐵盒與扇形包裝，後方是說明板', w: 1035, h: 943 },
    ],
  },
  {
    slug: 'colored-pencil',
    title: '色鉛筆｜昆蟲、花與面部',
    category: 'handdrawn',
    summary: '高中時期的色鉛筆習作：瓢蟲、鳳蝶與紫色繡球花，以及只留眼睛與嘴唇的面部局部。',
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
    summary: '高中時期的鉛筆素描靜物：瓶罐與玻璃、腳踏車，以及楊桃與小果實。',
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
    summary: '高中時期的鉛筆素描人像與動物：捲髮女孩、長髮女孩、留鬍子的老先生，以及套著繩籠頭的牛。',
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
    summary: '高中時期的水彩習作：紅色飲料的高腳杯、漢堡與薯條、兩個玻璃杯，以及戴著條紋帽的小鳥。',
    tags: ['Watercolor', 'Still Life', 'Study'],
    images: [
      { src: '/works/wc-wine.jpg', alt: '水彩：裝著紅色飲料的高腳杯，背景是藍綠色暈染', w: 1083, h: 1500 },
      { src: '/works/wc-burger.jpg', alt: '水彩：漢堡與薯條', w: 964, h: 1500 },
      { src: '/works/wc-glasses.jpg', alt: '水彩：兩個藍色透明玻璃杯', w: 964, h: 1500 },
      { src: '/works/wc-bird.jpg', alt: '水彩：戴著紫黃條紋帽與圍巾的小鳥，站在松枝與鈴鐺上', w: 1084, h: 1500 },
    ],
  },
  {
    slug: 'characters',
    title: '角色人像',
    category: 'illustration',
    summary: '數位繪製的角色人像：戴眼鏡的女孩、金髮微笑的男子、抱著兔子的生日賀圖，以及藍色挑染與額頭有疤的男子。',
    tags: ['Character', 'Portrait', 'Digital Painting'],
    images: [
      { src: '/works/girl-glasses.jpg', alt: '紫粉色調插畫：戴透明框眼鏡、綁低髮髻的女孩，簽名日期 2023/11/26', w: 990, h: 1400 },
      { src: '/works/char-blond.jpg', alt: '綠色背景前，金髮留鬍子的男子笑著', w: 1126, h: 1400 },
      { src: '/works/char-birthday.jpg', alt: '藍色背景的生日賀圖：男子抱著一隻棕色兔子，寫著 Happy Birthday', w: 1191, h: 1375 },
      { src: '/works/char-blue.jpg', alt: '藍色挑染黑髮的男子，微笑並歪著頭', w: 1400, h: 1400 },
      { src: '/works/char-scar.jpg', alt: '額頭有疤的黑髮男子，穿白襯衫與棕色外套', w: 1400, h: 1400 },
    ],
  },
];

export const featuredSlugs = ['stock-comeback', 'range-rover-video', 'illustration', 'infection', 'xmas-wonderland', 'ugly-doll'];
export const bySlug = (s: string) => works.find((w) => w.slug === s)!;
