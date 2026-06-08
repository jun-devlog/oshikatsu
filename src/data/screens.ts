export interface ScreenData {
  id: string;
  title: string;
  color: string;
  bgGradient: string;
}

export const screens: ScreenData[] = [
  {
    id: 'home',
    title: 'ホーム',
    color: '#E991A8',
    bgGradient: 'linear-gradient(180deg, #FDE8EE 0%, #F8C8D4 100%)',
  },
  {
    id: 'calendar',
    title: 'イベントカレンダー',
    color: '#9B7DD4',
    bgGradient: 'linear-gradient(180deg, #EDE6FB 0%, #D4C5F0 100%)',
  },
  {
    id: 'goods',
    title: 'グッズ管理',
    color: '#62C9BD',
    bgGradient: 'linear-gradient(180deg, #E0F7F5 0%, #B8EAE4 100%)',
  },
  {
    id: 'budget',
    title: '収支管理',
    color: '#FFD966',
    bgGradient: 'linear-gradient(180deg, #FFF8E0 0%, #FFF3C0 100%)',
  },
  {
    id: 'expedition',
    title: '遠征チェック',
    color: '#7B5EA7',
    bgGradient: 'linear-gradient(180deg, #EDE6FB 0%, #D4C5F0 100%)',
  },
  {
    id: 'mypage',
    title: 'マイページ',
    color: '#E991A8',
    bgGradient: 'linear-gradient(180deg, #FDE8EE 0%, #EDE6FB 100%)',
  },
];
