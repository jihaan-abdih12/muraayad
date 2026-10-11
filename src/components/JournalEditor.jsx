import React, { useState } from 'react';

export default function JournalEditor({ onSave }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [mood, setMood] = useState('😊 Degan');

  const moods = [
    { label: '😊 Degan', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
    { label: '🚀 Dhiirran', color: 'bg-blue-100 text-blue-900 border-blue-300' },
    { label: '💭 Fikir', color: 'bg-purple-100 text-purple-900 border-purple-300' },
    { label: '🌿 Nabad', color: 'bg-teal-100 text-teal-900 border-teal-300' },
    { label: '🎯 Diyaar', color: 'bg-amber-100 text-amber-900 border-amber-300' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    onSave({
      id: Date.now(),
      title,
      content,
      mood,
      date: new Date().toLocaleDateString('so-SO', {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    });

    setTitle('');
    setContent('');
    setMood('😊 Degan');
  };

  return (
    <div className="max-w-3xl mx-auto py-2">
      <div className="bg-white rounded-3xl shadow-md border border-slate-200 p-6 sm:p-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center space-x-2 border-b border-slate-100 pb-4">
          <span>✍️</span>
          <span>Qoris Xusuus-Qor Cusub</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">
              Ciwanka Qoraalka
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Maanta waa maalin cusub..."
              className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:bg-white transition-all font-medium"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">
              Dooro Dareenkaaga (Mood)
            </label>
            <div className="flex flex-wrap gap-2">
              {moods.map((m) => (
                <button
                  key={m.label}
                  type="button"
                  onClick={() => setMood(m.label)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${
                    mood === m.label
                      ? `${m.color} ring-2 ring-teal-600 shadow-sm font-bold scale-105`
                      : 'bg-slate-50 text-slate-600 border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">
              Qoraalka Xusuus-Qorka
            </label>
            <textarea
              rows="6"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Kaga sheekee halkan xusuustaada ama fikradahaaga..."
              className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:bg-white transition-all resize-none font-medium"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold shadow-md shadow-teal-700/20 transition-all transform hover:-translate-y-0.5"
          >
            Kaydi Xusuus-Qorka 💾
          </button>
        </form>
      </div>
    </div>
  );
}