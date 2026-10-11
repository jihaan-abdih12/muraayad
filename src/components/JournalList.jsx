import React from 'react';

export default function JournalList({ entries, onDelete }) {
  if (entries.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-3xl border border-amber-100 shadow-sm max-w-2xl mx-auto">
        <span className="text-5xl block mb-3">📖</span>
        <h3 className="text-xl font-bold text-stone-700 mb-2">Weli Ma Jiro Xusuus-Qor</h3>
        <p className="text-stone-500 text-sm">Ku dhufo "Qoris Cusub" si aad u qorato xusuustaadii ugu horeysay!</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-stone-800 mb-6 flex items-center space-x-2">
        <span>📖</span>
        <span>Xusuus-Qorkayga ({entries.length})</span>
      </h2>

      <div className="grid gap-6">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="bg-white p-6 rounded-2xl border border-amber-100 shadow-sm hover:shadow-md transition-shadow relative group"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className="inline-block px-3 py-1 rounded-lg text-xs font-semibold bg-amber-100 text-amber-800 mb-2">
                  {entry.mood}
                </span>
                <h3 className="text-xl font-bold text-stone-800">{entry.title}</h3>
              </div>
              <span className="text-xs text-stone-400 font-medium">{entry.date}</span>
            </div>

            <p className="text-stone-600 leading-relaxed whitespace-pre-wrap mb-4">{entry.content}</p>

            <div className="flex justify-end border-t border-stone-100 pt-3">
              <button
                onClick={() => onDelete(entry.id)}
                className="text-red-500 hover:text-red-700 text-sm font-medium flex items-center space-x-1 transition-colors"
              >
                <span>🗑️</span>
                <span>Tirtir</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}