import React from 'react';

export default function Home({ setActiveTab, entriesCount }) {
  return (
    <div className="max-w-4xl mx-auto py-4 space-y-8">
      {/* Hero Box */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 text-center shadow-md">
        <span className="text-5xl mb-4 block animate-bounce">🪞</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-800 mb-4 tracking-tight">
          Ku soo dhawaaw <span className="bg-gradient-to-r from-teal-700 to-amber-600 bg-clip-text text-transparent">Muraayad</span>
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
          Kani waa goobtaada gaarka ah ee aad ku eegayso naftaada, ku qorayso fikradahaaga maalinlaha ah, iyo kobcinta caafimaadkaaga maanka.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setActiveTab('editor')}
            className="px-6 py-3.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold shadow-md shadow-teal-700/20 transition-all transform hover:-translate-y-0.5"
          >
            ✍️ Bilow Qorista Maanta
          </button>
          <button
            onClick={() => setActiveTab('list')}
            className="px-6 py-3.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 transition-all shadow-sm"
          >
            📖 Eeg Xusuus-Qorka ({entriesCount})
          </button>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="text-3xl mb-3">🔒</div>
          <h3 className="font-bold text-slate-800 mb-1">Amaan iyo Gaar</h3>
          <p className="text-slate-600 text-sm">Xogtaada dhan waxay ku kaydsan tahay browser-kaaga oo kaliya.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="text-3xl mb-3">💡</div>
          <h3 className="font-bold text-slate-800 mb-1">Ogaal & Fikir</h3>
          <p className="text-slate-600 text-sm">La soco dareenkaaga maalinlaha ah iyo horumarkaaga shakhsiyaadeed.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="text-3xl mb-3">📊</div>
          <h3 className="font-bold text-slate-800 mb-1">Istaatistiko Buuxda</h3>
          <p className="text-slate-600 text-sm">Eeg inta maalmood ee aad qortay iyo heerka dadaalkaaga.</p>
        </div>
      </div>
    </div>
  );
}