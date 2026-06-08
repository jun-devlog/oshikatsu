import { 
  CalendarDays, 
  Package, 
  Wallet, 
  Luggage, 
  User, 
  LayoutDashboard,
  type LucideIcon
} from 'lucide-react';

export interface Feature {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  details: string[];
}

export const features: Feature[] = [
  {
    id: 'dashboard',
    icon: LayoutDashboard,
    title: 'ホームダッシュボード',
    description: '今日の予定、次イベントまでのカウントダウン、今月の支出をひとめで確認。',
    color: 'text-oshi-pink-deep',
    bgColor: 'bg-oshi-pink-light',
    details: ['今日の予定', 'イベントカウントダウン', '今月の支出サマリー', '推し一覧ショートカット'],
  },
  {
    id: 'calendar',
    icon: CalendarDays,
    title: 'イベントカレンダー',
    description: 'ライブ・配信・発売日・チケット締切を登録。リマインド通知で忘れない。',
    color: 'text-oshi-lavender-deep',
    bgColor: 'bg-oshi-lavender-light',
    details: ['カレンダー表示', 'リマインド通知', 'イベント詳細メモ', 'チケット申込締切管理'],
  },
  {
    id: 'goods',
    icon: Package,
    title: 'グッズ管理',
    description: '写真つきでグッズを登録。欲しいリスト、コンプリート状況もひとめで確認。',
    color: 'text-oshi-mint',
    bgColor: 'bg-oshi-mint-light',
    details: ['写真つき登録', '欲しいリスト', 'カテゴリ管理', '交換・譲渡メモ'],
  },
  {
    id: 'budget',
    icon: Wallet,
    title: '収支管理',
    description: '推し活費をカテゴリ別に記録。グラフで月ごとの支出を見える化。',
    color: 'text-oshi-cream-deep',
    bgColor: 'bg-oshi-cream',
    details: ['カテゴリ別記録', '月次支出グラフ', '予算設定', '円グラフ・棒グラフ'],
  },
  {
    id: 'expedition',
    icon: Luggage,
    title: '遠征チェック',
    description: '持ち物チェックリストと当日スケジュールで、遠征前のバタバタを解消。',
    color: 'text-oshi-purple-light',
    bgColor: 'bg-oshi-lavender-light',
    details: ['持ち物チェックリスト', '当日スケジュール', '交通・宿泊メモ', '遠征ノート'],
  },
  {
    id: 'mypage',
    icon: User,
    title: 'マイページ',
    description: '推しプロフィール、テーマカラー、通知設定をカスタマイズ。バックアップも対応予定。',
    color: 'text-oshi-pink-deep',
    bgColor: 'bg-oshi-pink-light',
    details: ['推しプロフィール管理', 'テーマカラー設定', 'データバックアップ', 'プレミアムプラン'],
  },
];
