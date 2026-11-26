// 時間線：全部取自履歷與作品集。「相關作品」是我依主題配對，並非保證該作品完成於當時，請以你的記憶為準再調整。
export interface Step {
  period: string;
  title: string;
  place?: string;
  note?: string;
  icon: string;
  work: string; // 作品 slug
}

export const timeline: Step[] = [
  { period: '從小', title: '接觸繪畫', note: '最早的興趣就是畫畫，一路畫到後來念設計。', icon: 'pencil', work: 'illustration' },
  { period: '2019 – 2023', title: '廣告設計科', place: '基隆私立二信高級中學', note: '從這裡開始接觸視覺設計。', icon: 'school', work: 'yue-rong' },
  { period: '2023 –', title: '設計系 平面設計組', place: '國立台灣師範大學（大四休學中）', note: '因家庭因素，我需要自己負擔生活開銷，所以在大四時選擇休學。休學期間我一邊工作、一邊累積實務經驗，持續精進設計實力，也在這段時間釐清了自己的定位與方向。我計畫重返校園完成學業，日後再次進入職場時，能以更充實的能力和更清楚的方向前進。', icon: 'compass', work: 'dead-line' },
  { period: '2024/2 – 2025/6', title: '繪畫助教', place: '星期六畫室', note: '教學的過程中需要自己編排教案，帶領 2 到 10 人的小班。', icon: 'easel', work: 'sketch-portrait' },
  { period: '2025/6 – 2025/8', title: '繪畫老師', place: '靜靜看海藝術工作室', note: '獨立編排教案，以多媒材帶領 2 到 10 人小班。', icon: 'easel', work: 'ugly-doll' },
  { period: '2026/9 – 2026/11', title: '設計助理', place: 'SOGO 網頁維護課（專案型職缺）', note: '製作網頁視覺，將同一主視覺依手機、電腦、首頁橫幅、預覽縮圖等規格重新排版。依品牌規範與團隊分工，準時交件。', icon: 'laptop', work: 'stock-comeback' },
];
