"use client";
import { useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import PaymentModal from "./components/PaymentModal";

const Dashboard = () => {
  const [unlockedCards, setUnlockedCards] = useState<number[]>([]);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleUnlock = (index: number) => {
    setSelectedCard(index);
    setShowPaymentModal(true);
  };

  const handlePaymentSuccess = (message: string) => {
    if (selectedCard !== null) {
      setUnlockedCards((prev) => [...prev, selectedCard]);
    }
    setShowPaymentModal(false);
  };

  const cards = [
    {
      token: "SHIB.USDT",
      entry: "$0.285 - $0.295",
      tp1: "$0.520 (+28%)",
      tp2: "$0.380 (+76%)",
      tp3: "$0.345 (-26%)",
      tp4: "$0.310 (-40%)",
      tp5: "$0.290 (-2%)",
      sl: "$0.21 (-26.3%)",
      leverage: "50x",
      holding: "4 - 14 hours",
      long: true,
      short: false,
    },
    {
      token: "BTC.USDT",
      entry: "$65,500 - $66,200",
      tp1: "$68,000 (+3%)",
      tp2: "$70,000 (+6%)",
      tp3: "$72,000 (+9%)",
      tp4: "$0.310 (-40%)",
      tp5: "$0.290 (-2%)",
      sl: "$64,000 (-2%)",
      leverage: "10x",
      holding: "12 - 24 hours",
      long: false,
      short: true,
    },
    {
      token: "ETH.USDT",
      entry: "$3,100 - $3,150",
      tp1: "$3,400 (+9%)",
      tp2: "$3,600 (+15%)",
      tp3: "$3,800 (+22%)",
      tp4: "$0.310 (-40%)",
      tp5: "$0.290 (-2%)",
      sl: "$3,000 (-4%)",
      leverage: "20x",
      holding: "6 - 12 hours",
      long: true,
      short: false,
    },
    {
      token: "ADA.USDT",
      entry: "$1.20 - $1.25",
      tp1: "$1.40 (+12%)",
      tp2: "$1.55 (+24%)",
      tp3: "$1.70 (+36%)",
      tp4: "$0.310 (-40%)",
      tp5: "$0.290 (-2%)",
      sl: "$1.10 (-12%)",
      leverage: "15x",
      holding: "8 - 16 hours",
      long: true,
      short: false,
    },
    {
      token: "XRP.USDT",
      entry: "$0.75 - $0.80",
      tp1: "$0.90 (+12.5%)",
      tp2: "$1.00 (+25%)",
      tp3: "$1.10 (+37.5%)",
      tp4: "$0.310 (-40%)",
      tp5: "$0.290 (-2%)",
      sl: "$0.70 (-12.5%)",
      leverage: "25x",
      holding: "10 - 20 hours",
      long: true,
      short: false,
    },
    {
      token: "SOL.USDT",
      entry: "$150 - $155",
      tp1: "$170 (+12.9%)",
      tp2: "$185 (+19.4%)",
      tp3: "$200 (+29%)",
      tp4: "$0.310 (-40%)",
      tp5: "$0.290 (-2%)",
      sl: "$140 (-9.7%)",
      leverage: "30x",
      holding: "5 - 15 hours",
      long: true,
      short: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0b0b0f] to-black text-white flex flex-col">
      {/* Top Bar */}
      <header
        className="flex items-center justify-between px-6 py-2 border-b border-[#1f1f25] bg-[#0e0e12]/80 backdrop-blur-xl shadow-lg"
        style={{ zIndex: 100 }}
      >
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-[0_0_15px_rgba(99,102,241,0.5)]">
            <div className="absolute inset-0.5 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-bold text-sm">TP</span>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-wide bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              TradePulse
            </h1>
            <p className="text-[10px] text-gray-500 uppercase tracking-wider">
              Signal Dashboard
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 px-0 hover:border-indigo-500/50 hover:bg-[#1f1f25] transition-all duration-300">
            <svg
              className="w-5 h-5 text-gray-400 hover:text-indigo-400 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
          <div className="hidden md:flex items-center gap-2 px-1 py-1.5">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs text-gray-400">Live</span>
          </div>
          <WalletMultiButton style={{ height: "38px" }} />
        </div>
      </header>

      <div className="flex flex-1">
        {/* Main Content */}
        <main className="flex-1 py-6 p-10 overflow-y-auto">
          {/* First Division - Stats Overview */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-3 rounded-lg bg-[#0e0e12]/30">
            {/* Realized Profit */}
            <div className="relative bg-gradient-to-br from-[#141418]/90 to-[#1a1a1f]/90 border border-green-500/20 rounded-xl p-6 hover:shadow-[0_0_25px_rgba(34,197,94,0.3)] transition-all duration-300 overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl group-hover:bg-green-500/10 transition-all"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-gray-400 text-xs uppercase tracking-wider font-medium">
                    Realized Profit
                  </h3>
                  <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center border border-green-500/20">
                    <svg
                      className="w-4 h-4 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-green-400 text-3xl font-bold mb-2">
                  $12,540
                </p>
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2 py-0.5 bg-green-500/10 text-green-400 rounded-md border border-green-500/20">
                    +18.5%
                  </span>
                  <span className="text-gray-500">vs last month</span>
                </div>
              </div>
            </div>

            {/* Realized Loss */}
            <div className="relative bg-gradient-to-br from-[#141418]/90 to-[#1a1a1f]/90 border border-red-500/20 rounded-xl p-6 hover:shadow-[0_0_25px_rgba(239,68,68,0.3)] transition-all duration-300 overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl group-hover:bg-red-500/10 transition-all"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-gray-400 text-xs uppercase tracking-wider font-medium">
                    Realized Loss
                  </h3>
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center border border-red-500/20">
                    <svg
                      className="w-4 h-4 text-red-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-red-400 text-3xl font-bold mb-2">$2,140</p>
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2 py-0.5 bg-red-500/10 text-red-400 rounded-md border border-red-500/20">
                    -4.2%
                  </span>
                  <span className="text-gray-500">vs last month</span>
                </div>
              </div>
            </div>

            {/* Open Orders */}
            <div className="relative bg-gradient-to-br from-[#141418]/90 to-[#1a1a1f]/90 border border-indigo-500/20 rounded-xl p-6 hover:shadow-[0_0_25px_rgba(99,102,241,0.3)] transition-all duration-300 overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-all"></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-gray-400 text-xs uppercase tracking-wider font-medium">
                    Open Orders
                  </h3>
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                    <svg
                      className="w-4 h-4 text-indigo-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-500/5 rounded-lg p-3 border border-green-500/20">
                    <p className="text-green-400 text-xl font-bold">+$8,430</p>
                    <p className="text-gray-500 text-[10px] mt-1 uppercase tracking-wide">
                      Unrealized Profit
                    </p>
                  </div>
                  <div className="bg-red-500/5 rounded-lg p-3 border border-red-500/20">
                    <p className="text-red-400 text-xl font-bold">-$1,210</p>
                    <p className="text-gray-500 text-[10px] mt-1 uppercase tracking-wide">
                      Unrealized Loss
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Second Division (Cards Section) */}
          <section className="p-4 rounded-lg border border-[#2a2a33] bg-[#0e0e12]/30">
            {/* Search Bar and DEX Link */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search signals..."
                  className="w-full px-4 py-2.5 pl-10 bg-[#1a1a1f] border border-[#2a2a33] rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all"
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 border-2 border-indigo-500/50 text-indigo-400 hover:border-indigo-400 hover:bg-indigo-500/10 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
                <span>DEX LINK</span>
              </button>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cards.map((card, index) => {
                const isUnlocked = unlockedCards.includes(index);
                return (
                  <div
                    key={index}
                    className={`relative border rounded-xl p-4 bg-gradient-to-br from-[#141418]/90 to-[#1a1a1f]/90 border-[#2a2a33] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:border-indigo-500/50 ${
                      isUnlocked ? "ring-2 ring-green-500/30" : ""
                    }`}
                  >
                    {/* Card Header with Token Badge */}
                    <div className="flex items-start justify-between mb-3 pb-2 border-b border-[#2a2a33]">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-600/20 border border-indigo-500/30 flex items-center justify-center">
                          <span className="text-indigo-400 font-bold text-[10px]">
                            {card.token.split(".")[0].slice(0, 2)}
                          </span>
                        </div>
                        <div>
                          <p className="font-bold text-sm text-white">
                            {card.token}
                          </p>
                          <p className="text-[9px] text-yellow-300 drop-shadow-[0_0_8px_rgba(34,197,94,0.6)] uppercase tracking-wide">
                            {card.leverage} Leverage
                          </p>
                        </div>
                      </div>
                      {card.long && (
                        <div
                          className="flex items-center gap-2 border-green-500/50 text-green-400 text-[10px] font-semibold rounded-sm border-2"
                          style={{ padding: "3px 10px" }}
                        >
                          <svg
                            className="w-4 h-4 text-green-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                            />
                          </svg>
                          LONG
                        </div>
                      )}
                      {card.short && (
                        <div
                          className="flex items-center gap-2 border-red-500/50 text-red-400 text-[10px] font-semibold rounded-sm border-2"
                          style={{ padding: "3px 10px" }}
                        >
                          <svg
                            className="w-4 h-4 text-red-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6"
                            />
                          </svg>
                          SHORT
                        </div>
                      )}
                      <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-400 pt-1 bg-[#1a1a1f]/40 rounded-md py-1.5">
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>{card.holding}</span>
                      </div>
                    </div>

                    {/* Card Content - Blurred if unlocked, clear if locked */}
                    <div
                      className={`space-y-2 text-xs transition-all duration-300 ${
                        isUnlocked
                          ? "opacity-100"
                          : "opacity-40 blur-[2px] pointer-events-none select-none"
                      }`}
                    >
                      {/* Entry Zone */}
                      <div className="bg-[#1a1a1f]/60 rounded-md p-2 border border-[#2a2a33]">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 text-[10px] uppercase tracking-wider font-medium">
                            Entry
                          </span>
                          <span className="text-white font-semibold text-xs">
                            {card.entry}
                          </span>
                        </div>
                      </div>

                      {/* Take Profits & Stop Loss Grid */}
                      <div className="grid grid-cols-2 gap-1.5">
                        <div className="flex items-center justify-between bg-green-500/5 rounded-sm p-1.5 border border-green-500/20">
                          <span className="text-gray-400 text-[10px] font-medium">
                            TP1
                          </span>
                          <span className="text-green-400 font-semibold text-[10px]">
                            {card.tp1}
                          </span>
                        </div>
                        <div className="flex items-center justify-between bg-green-500/5 rounded-sm p-1.5 border border-green-500/20">
                          <span className="text-gray-400 text-[10px] font-medium">
                            TP2
                          </span>
                          <span className="text-green-400 font-semibold text-[10px]">
                            {card.tp2}
                          </span>
                        </div>
                        <div className="flex items-center justify-between bg-green-500/5 rounded-sm p-1.5 border border-green-500/20">
                          <span className="text-gray-400 text-[10px] font-medium">
                            TP3
                          </span>
                          <span className="text-green-400 font-semibold text-[10px]">
                            {card.tp3}
                          </span>
                        </div>
                        <div className="flex items-center justify-between bg-green-500/5 rounded-sm p-1.5 border border-green-500/20">
                          <span className="text-gray-400 text-[10px] font-medium">
                            TP4
                          </span>
                          <span className="text-green-400 font-semibold text-[10px]">
                            {card.tp4}
                          </span>
                        </div>
                        <div className="flex items-center justify-between bg-green-500/5 rounded-sm p-1.5 border border-green-500/20">
                          <span className="text-gray-400 text-[10px] font-medium">
                            TP5
                          </span>
                          <span className="text-green-400 font-semibold text-[10px]">
                            {card.tp5}
                          </span>
                        </div>
                        <div className="flex items-center justify-between bg-red-500/5 rounded-sm p-1.5 border border-red-500/20">
                          <span className="text-gray-400 text-[10px] font-medium">
                            SL
                          </span>
                          <span className="text-red-400 font-semibold text-[10px]">
                            {card.sl}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action Button - Always accessible */}
                    <div className="relative flex justify-end mt-3 pt-2 border-t border-[#2a2a33] z-10">
                      <button
                        onClick={() => handleUnlock(index)}
                        className={`flex items-center gap-1.5 px-4 py-2 rounded-sm text-xs font-semibold transition-all duration-300 transform hover:scale-105 border-2 ${
                          isUnlocked
                            ? "border-green-500/50 text-green-400 hover:border-green-400 hover:bg-green-500/10 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                            : "border-indigo-500/50 text-indigo-400 hover:border-indigo-400 hover:bg-indigo-500/10 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                        }`}
                      >
                        {isUnlocked ? (
                          <a
                            href="https://app.hyperliquid.xyz/trade/BTC"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between bg-transparent no-underline"
                          >
                            <svg
                              className="w-3.5 h-3.5 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                              />
                            </svg>
                            <span>DEX LINK</span>
                          </a>
                        ) : (
                          <>
                            <svg
                              className="w-3.5 h-3.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                              />
                            </svg>
                            <span>PAY FOR TIP</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </main>
      </div>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        onSuccess={handlePaymentSuccess}
        cardIndex={selectedCard ?? 0}
      />
    </div>
  );
};

export default Dashboard;
