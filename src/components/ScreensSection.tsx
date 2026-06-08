import React, { useState } from 'react';
import PhoneMockup from './PhoneMockup';
import { screens } from '../data/screens';
import { AnimateIn } from './AnimateIn';
import { ChevronLeft, ChevronRight, CalendarDays, Package, Wallet, Luggage, User, LayoutDashboard } from 'lucide-react';

/* ─── 各画面のダミーUI ─── */

const HomeScreen: React.FC = () => (
  <div className="w-full h-full flex flex-col" style={{ background: 'linear-gradient(180deg, #FDE8EE 0%, #fff 40%)' }}>
    <div className="pt-8 px-4 pb-2">
      <p className="text-[10px] font-bold text-oshi-navy">🏠 ホーム</p>
    </div>
    <div className="mx-3 rounded-2xl bg-gradient-to-r from-oshi-pink-deep to-oshi-lavender-deep p-3 text-white mb-2">
      <p className="text-[8px] opacity-80">次のイベントまで</p>
      <div className="flex items-end gap-1 mt-1">
        <span className="text-[20px] font-black leading-none">12</span>
        <span className="text-[8px] pb-0.5">日</span>
        <span className="text-[20px] font-black leading-none ml-1">5</span>
        <span className="text-[8px] pb-0.5">時間</span>
      </div>
    </div>
    <div className="px-3 grid grid-cols-2 gap-2 mb-2">
      <div className="bg-white rounded-xl p-2 shadow-sm">
        <p className="text-[7px] text-oshi-purple-light">今月の支出</p>
        <p className="text-[12px] font-bold text-oshi-navy">¥12,500</p>
      </div>
      <div className="bg-white rounded-xl p-2 shadow-sm">
        <p className="text-[7px] text-oshi-purple-light">グッズ</p>
        <p className="text-[12px] font-bold text-oshi-navy">24件</p>
      </div>
    </div>
    <div className="px-3">
      <p className="text-[8px] font-bold text-oshi-navy mb-1">推し一覧</p>
      <div className="flex gap-2">
        {['🎤', '🎮', '🎭'].map((e, i) => (
          <div key={i} className="w-10 h-10 rounded-full bg-oshi-pink-light flex items-center justify-center text-base">{e}</div>
        ))}
      </div>
    </div>
    <div className="px-3 mt-2">
      <p className="text-[8px] font-bold text-oshi-navy mb-1">今週の予定</p>
      {[{ d: '月', t: '締切', c: '#E991A8' }, { d: '水', t: '配信', c: '#9B7DD4' }, { d: '土', t: '発売', c: '#62C9BD' }].map((e, i) => (
        <div key={i} className="flex items-center gap-1.5 bg-white rounded-lg px-2 py-1.5 mb-1 shadow-sm">
          <div className="w-5 h-5 rounded text-[7px] font-bold text-white flex items-center justify-center" style={{ background: e.c }}>{e.d}</div>
          <span className="text-[8px] text-oshi-navy">{e.t}</span>
        </div>
      ))}
    </div>
  </div>
);

const CalendarScreen: React.FC = () => (
  <div className="w-full h-full flex flex-col" style={{ background: 'linear-gradient(180deg, #EDE6FB 0%, #fff 40%)' }}>
    <div className="pt-8 px-4 pb-2">
      <p className="text-[10px] font-bold text-oshi-navy">📅 イベントカレンダー</p>
    </div>
    <div className="mx-3 mb-2">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[10px] font-bold text-oshi-navy">2025年7月</span>
        <div className="flex gap-1">
          <div className="w-4 h-4 rounded-full bg-oshi-lavender-light flex items-center justify-center text-[8px] text-oshi-purple">◀</div>
          <div className="w-4 h-4 rounded-full bg-oshi-lavender-light flex items-center justify-center text-[8px] text-oshi-purple">▶</div>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-px text-center text-[6px] text-oshi-purple-light mb-1">
        {['日', '月', '火', '水', '木', '金', '土'].map(d => <span key={d}>{d}</span>)}
      </div>
      <div className="grid grid-cols-7 gap-px text-center">
        {Array.from({ length: 31 }, (_, i) => i + 1).map(d => (
          <div key={d} className={`text-[7px] py-1 rounded ${d === 12 ? 'bg-oshi-pink-deep text-white font-bold' : d === 20 ? 'bg-oshi-lavender-deep text-white font-bold' : d === 25 ? 'bg-oshi-mint text-oshi-navy font-bold' : 'text-oshi-navy'}`}>
            {d}
          </div>
        ))}
      </div>
    </div>
    <div className="px-3 mt-1">
      <p className="text-[8px] font-bold text-oshi-navy mb-1">イベント一覧</p>
      {[{ t: '7/12 ライブ', c: '#E991A8' }, { t: '7/20 配信', c: '#9B7DD4' }, { t: '7/25 グッズ発売', c: '#62C9BD' }].map((e, i) => (
        <div key={i} className="flex items-center gap-1.5 bg-white rounded-lg px-2 py-1.5 mb-1 shadow-sm">
          <div className="w-1.5 h-6 rounded-full" style={{ background: e.c }} />
          <span className="text-[8px] text-oshi-navy">{e.t}</span>
        </div>
      ))}
    </div>
  </div>
);

const GoodsScreen: React.FC = () => (
  <div className="w-full h-full flex flex-col" style={{ background: 'linear-gradient(180deg, #E0F7F5 0%, #fff 40%)' }}>
    <div className="pt-8 px-4 pb-2">
      <p className="text-[10px] font-bold text-oshi-navy">📦 グッズ管理</p>
    </div>
    <div className="mx-3 flex gap-1.5 mb-2">
      {['すべて', '持ってる', '欲しい', '交換'].map((t, i) => (
        <div key={t} className={`px-2 py-1 rounded-full text-[7px] font-medium ${i === 0 ? 'bg-oshi-mint text-oshi-navy' : 'bg-white text-oshi-purple-light'}`}>{t}</div>
      ))}
    </div>
    <div className="mx-3 grid grid-cols-2 gap-2">
      {[
        { name: 'アクスタ', cat: 'アクスタ', col: '#F8C8D4' },
        { name: 'ペンライト', cat: 'ライブグッズ', col: '#D4C5F0' },
        { name: 'ラバスト', cat: 'キーホルダー', col: '#B8EAE4' },
        { name: 'ブロマイド', cat: '写真', col: '#FFF3C0' },
      ].map((g, i) => (
        <div key={i} className="bg-white rounded-xl p-2 shadow-sm">
          <div className="w-full h-14 rounded-lg mb-1.5 flex items-center justify-center text-2xl" style={{ background: g.col + '40' }}>
            {['✨', '🔦', '🔑', '📸'][i]}
          </div>
          <p className="text-[9px] font-bold text-oshi-navy">{g.name}</p>
          <p className="text-[7px] text-oshi-purple-light">{g.cat}</p>
        </div>
      ))}
    </div>
  </div>
);

const BudgetScreen: React.FC = () => (
  <div className="w-full h-full flex flex-col" style={{ background: 'linear-gradient(180deg, #FFF8E0 0%, #fff 40%)' }}>
    <div className="pt-8 px-4 pb-2">
      <p className="text-[10px] font-bold text-oshi-navy">💰 収支管理</p>
    </div>
    <div className="mx-3 bg-white rounded-xl p-3 shadow-sm mb-2">
      <p className="text-[7px] text-oshi-purple-light">7月の支出合計</p>
      <p className="text-[18px] font-black text-oshi-navy">¥23,800</p>
      <div className="w-full h-1.5 bg-oshi-gray rounded-full mt-1.5">
        <div className="h-full rounded-full bg-gradient-to-r from-oshi-pink-deep to-oshi-lavender-deep" style={{ width: '68%' }} />
      </div>
      <p className="text-[7px] text-oshi-purple-light mt-1">予算 ¥35,000 の 68%</p>
    </div>
    {/* Mini chart */}
    <div className="mx-3 bg-white rounded-xl p-3 shadow-sm mb-2">
      <p className="text-[8px] font-bold text-oshi-navy mb-2">カテゴリ別</p>
      <div className="flex items-end gap-2 h-16">
        {[
          { h: '60%', c: '#E991A8', l: 'チケット' },
          { h: '40%', c: '#9B7DD4', l: 'グッズ' },
          { h: '25%', c: '#62C9BD', l: '遠征' },
          { h: '15%', c: '#FFD966', l: '配信' },
          { h: '10%', c: '#7B5EA7', l: 'その他' },
        ].map((b, i) => (
          <div key={i} className="flex-1 flex flex-col items-center">
            <div className="w-full rounded-t-md" style={{ background: b.c, height: b.h }} />
            <span className="text-[5px] text-oshi-purple-light mt-0.5">{b.l}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="px-3">
      <p className="text-[8px] font-bold text-oshi-navy mb-1">最近の支出</p>
      {[{ t: 'チケット', a: '¥8,000' }, { t: 'アクスタ', a: '¥1,500' }].map((e, i) => (
        <div key={i} className="flex justify-between bg-white rounded-lg px-2 py-1.5 mb-1 shadow-sm">
          <span className="text-[8px] text-oshi-navy">{e.t}</span>
          <span className="text-[8px] font-bold text-oshi-pink-deep">{e.a}</span>
        </div>
      ))}
    </div>
  </div>
);

const ExpeditionScreen: React.FC = () => (
  <div className="w-full h-full flex flex-col" style={{ background: 'linear-gradient(180deg, #EDE6FB 0%, #fff 40%)' }}>
    <div className="pt-8 px-4 pb-2">
      <p className="text-[10px] font-bold text-oshi-navy">🧳 遠征チェック</p>
    </div>
    <div className="mx-3 bg-white rounded-xl p-3 shadow-sm mb-2">
      <p className="text-[8px] font-bold text-oshi-navy mb-1">持ち物リスト</p>
      <div className="w-full bg-oshi-gray rounded-full h-1.5 mb-2">
        <div className="h-full bg-oshi-lavender-deep rounded-full" style={{ width: '75%' }} />
      </div>
      <p className="text-[7px] text-oshi-purple-light">8 / 12 完了</p>
    </div>
    <div className="px-3">
      {[
        { t: 'チケット', done: true },
        { t: '身分証', done: true },
        { t: 'ペンライト', done: true },
        { t: 'うちわ', done: false },
        { t: 'ホテル予約確認', done: true },
        { t: '交通チケット', done: false },
        { t: 'モバイルバッテリー', done: true },
        { t: '着替え', done: false },
      ].map((item, i) => (
        <div key={i} className={`flex items-center gap-1.5 py-1.5 ${i < 7 ? 'border-b border-oshi-gray' : ''}`}>
          <div className={`w-4 h-4 rounded flex items-center justify-center text-[8px] ${item.done ? 'bg-oshi-lavender-deep text-white' : 'border border-oshi-lavender'}`}>
            {item.done ? '✓' : ''}
          </div>
          <span className={`text-[8px] ${item.done ? 'text-oshi-purple-light line-through' : 'text-oshi-navy'}`}>{item.t}</span>
        </div>
      ))}
    </div>
  </div>
);

const MyPageScreen: React.FC = () => (
  <div className="w-full h-full flex flex-col" style={{ background: 'linear-gradient(180deg, #FDE8EE 0%, #EDE6FB 30%, #fff 60%)' }}>
    <div className="pt-8 px-4 pb-2">
      <p className="text-[10px] font-bold text-oshi-navy">👤 マイページ</p>
    </div>
    <div className="mx-3 flex flex-col items-center mb-3">
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-oshi-pink-deep to-oshi-lavender-deep flex items-center justify-center text-2xl mb-1">💜</div>
      <p className="text-[10px] font-bold text-oshi-navy">推し活ファン</p>
      <p className="text-[7px] text-oshi-purple-light">プレミアム会員</p>
    </div>
    <div className="px-3 space-y-1.5">
      {[
        { icon: '🌸', label: '推しプロフィール', val: '3人' },
        { icon: '🎨', label: 'テーマカラー', val: 'ピンク' },
        { icon: '🔔', label: '通知設定', val: 'ON' },
        { icon: '💾', label: 'バックアップ', val: '最新' },
        { icon: '📊', label: 'CSV出力', val: '' },
        { icon: '👑', label: 'プレミアム', val: '有効' },
      ].map((item, i) => (
        <div key={i} className="flex items-center justify-between bg-white rounded-xl px-3 py-2 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="text-sm">{item.icon}</span>
            <span className="text-[8px] font-medium text-oshi-navy">{item.label}</span>
          </div>
          {item.val && <span className="text-[7px] text-oshi-purple-light">{item.val}</span>}
        </div>
      ))}
    </div>
  </div>
);

const screenComponents: Record<string, React.FC> = {
  home: HomeScreen,
  calendar: CalendarScreen,
  goods: GoodsScreen,
  budget: BudgetScreen,
  expedition: ExpeditionScreen,
  mypage: MyPageScreen,
};

const screenIcons = [LayoutDashboard, CalendarDays, Package, Wallet, Luggage, User];

const ScreensSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const ActiveScreen = screenComponents[screens[activeIdx].id];

  const prev = () => setActiveIdx((i) => (i === 0 ? screens.length - 1 : i - 1));
  const next = () => setActiveIdx((i) => (i === screens.length - 1 ? 0 : i + 1));

  return (
    <section id="screens" className="relative py-20 md:py-28 bg-gradient-to-b from-white via-oshi-lavender-light/30 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <AnimateIn>
          <h2 className="section-heading mb-3">
            <span className="gradient-text">画面イメージ</span>
          </h2>
          <p className="section-sub mb-10 max-w-lg mx-auto">
            直感的で使いやすいデザインで、推し活をサポートします
          </p>
        </AnimateIn>

        {/* Tab selector */}
        <AnimateIn delay={100}>
          <div className="flex justify-center mb-8">
            <div className="inline-flex gap-1 p-1.5 bg-white rounded-2xl shadow-soft">
              {screens.map((screen, idx) => {
                const Icon = screenIcons[idx];
                return (
                  <button
                    key={screen.id}
                    onClick={() => setActiveIdx(idx)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium transition-all duration-300 ${
                      activeIdx === idx
                        ? 'bg-gradient-to-r from-oshi-pink-deep to-oshi-lavender-deep text-white shadow-pink'
                        : 'text-oshi-purple hover:bg-oshi-gray'
                    }`}
                  >
                    <Icon size={14} />
                    <span className="hidden sm:inline">{screen.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </AnimateIn>

        {/* Phone display with nav arrows */}
        <AnimateIn delay={200}>
          <div className="flex items-center justify-center gap-4 md:gap-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center hover:bg-oshi-pink-light hover:scale-110 transition-all duration-300 flex-shrink-0"
              aria-label="前の画面"
            >
              <ChevronLeft size={20} className="text-oshi-purple" />
            </button>

            <div className="relative">
              <PhoneMockup scale={1.15} className="mx-auto">
                <ActiveScreen />
              </PhoneMockup>
              {/* Screen title badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-full px-4 py-1.5 shadow-soft">
                <p className="text-xs font-bold text-oshi-navy whitespace-nowrap">{screens[activeIdx].title}</p>
              </div>
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center hover:bg-oshi-pink-light hover:scale-110 transition-all duration-300 flex-shrink-0"
              aria-label="次の画面"
            >
              <ChevronRight size={20} className="text-oshi-purple" />
            </button>
          </div>
        </AnimateIn>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {screens.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeIdx === idx
                  ? 'bg-oshi-pink-deep w-7'
                  : 'bg-oshi-lavender hover:bg-oshi-lavender-deep'
              }`}
              aria-label={`画面 ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreensSection;
