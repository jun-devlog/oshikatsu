export interface Pain {
  id: string;
  emoji: string;
  text: string;
}

export const pains: Pain[] = [
  {
    id: 'forget-ticket',
    emoji: '😰',
    text: 'チケット申込の締切を忘れそう…',
  },
  {
    id: 'duplicate-goods',
    emoji: '🤔',
    text: '同じグッズ、もう買ったっけ？',
  },
  {
    id: 'spending',
    emoji: '💸',
    text: '今月いくら使ったか、見たくないけど知りたい',
  },
  {
    id: 'expedition-rush',
    emoji: '🧳',
    text: '遠征前に毎回バタバタしちゃう',
  },
  {
    id: 'multi-oshi',
    emoji: '🌟',
    text: '推しごとに予定や支出を分けたい',
  },
  {
    id: 'scattered',
    emoji: '📱',
    text: 'メモ帳、カレンダー、家計簿…情報が散らばってる',
  },
];
