export interface PlanFeature {
  text: string;
  free: boolean;
  premium: boolean;
}

export const planFeatures: PlanFeature[] = [
  { text: '推し登録', free: true, premium: true },
  { text: 'イベントカレンダー', free: true, premium: true },
  { text: 'グッズ管理', free: true, premium: true },
  { text: '基本の収支記録', free: true, premium: true },
  { text: '推し1人まで', free: true, premium: false },
  { text: '推し登録 無制限', free: false, premium: true },
  { text: 'グッズ30件まで', free: true, premium: false },
  { text: 'グッズ登録 無制限', free: false, premium: true },
  { text: 'イベント10件まで', free: true, premium: false },
  { text: 'イベント登録 無制限', free: false, premium: true },
  { text: 'OCR登録', free: false, premium: true },
  { text: '遠征チェックリスト', free: false, premium: true },
  { text: 'データバックアップ', free: false, premium: true },
  { text: 'CSV出力', free: false, premium: true },
  { text: 'テーマカラー変更', free: false, premium: true },
];

export const pricing = {
  monthly: 480,
  yearly: 4800,
};
