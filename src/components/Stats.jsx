import React from 'react';

export default function Stats({ entries }) {
  const totalEntries = entries.length;

  const moodCounts = entries.reduce((acc, entry) => {
    acc[entry.mood] = (acc[entry.mood] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-stone-800 mb-6 flex items-center space-x-2">
        <span>📊</span>
        <span>Istaatistikada Xusuus-Qorka</span>
      </h2>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-amber-100 shadow-sm">
          <span className="text-stone-500 text-sm font-medium block mb-1">Kulamada Wadarta Qoraalada</span>
          <span className="text-4xl font-extrabold text-teal-700">{totalEntries}</span>
          <p className="text-xs text-stone-400 mt-2">Xusuus-qorood qoray ilaa hadda.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-amber-100 shadow-sm">
          <span className="text-stone-500 text-sm font-medium block mb-3">Eegida Dareenka (Moods)</span>
          {Object.keys(moodCounts).length === 0 ? (
            <p className="text-stone-400 text-sm">Weli xog ma jirto.</p>
          ) : (
            <div className="space-y-2">
              {Object.entries(moodCounts).map(([mood, count]) => (
                <div key={mood} className="flex justify-between items-center text-sm">
                  <span className="font-medium text-stone-700">{mood}</span>
                  <span className="bg-stone-100 px-2.5 py-1 rounded-lg text-xs font-bold text-stone-600">
                    {count} maalmood
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}