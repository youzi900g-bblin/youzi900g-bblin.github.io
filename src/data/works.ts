// 作品資料：文字全部取自「Portfolio」作品集，沒有另外編寫。
// 要新增或修改作品，只要改這個檔案；圖片放在 public/works/。
export type Category = 'illustration' | 'graphic' | 'type' | 'video' | 'game' | 'editorial';
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
];

export const featuredSlugs = ['stock-comeback', 'range-rover-video', 'illustration', 'infection', 'xmas-wonderland', 'ugly-doll'];
export const bySlug = (s: string) => works.find((w) => w.slug === s)!;
