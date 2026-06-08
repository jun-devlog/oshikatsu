export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 'free',
    question: '無料でも使えますか？',
    answer: 'はい。基本的な予定・グッズ・支出管理は無料で使えます。',
  },
  {
    id: 'multi-oshi',
    question: '複数の推しを登録できますか？',
    answer: 'プレミアムプランで複数の推しを登録できます。',
  },
  {
    id: 'goods-photo',
    question: 'グッズの写真も登録できますか？',
    answer: 'はい。写真つきでグッズを管理できます。',
  },
  {
    id: 'privacy',
    question: '支出は他の人に見えますか？',
    answer: 'いいえ。記録した内容は自分だけが確認できます。',
  },
  {
    id: 'release',
    question: 'リリース時期はいつですか？',
    answer: '現在開発中です。リリース通知に登録すると最新情報を受け取れます。',
  },
];
