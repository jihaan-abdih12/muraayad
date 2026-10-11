import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-2xl mx-auto py-4">
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md text-center">
        <span className="text-4xl block mb-3">💬</span>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Talo & Taageero</h2>
        <p className="text-slate-600 text-sm mb-6">
          Ma haysaa talo ama fikir aad ku kobcinayso Muraayad Journal? Nala wadaag si aan app-ka sii horumarino.
        </p>

        {submitted ? (
          <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-4 rounded-xl text-sm font-bold">
            🎉 Waad ku mahadsan tahay taladaada! Waa nala soo gaaray.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Magacaaga</label>
              <input
                type="text"
                placeholder="Ku qor magacaaga..."
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:bg-white transition-all text-sm font-medium"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Fariintaada / Taladaada</label>
              <textarea
                rows="4"
                placeholder="Nala wadaag taladaada ama waxaad rabto in lagu soo daro..."
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:bg-white transition-all text-sm resize-none font-medium"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold shadow-md shadow-teal-700/20 transition-all text-sm"
            >
              Dir Fariinta 🚀
            </button>
          </form>
        )}
      </div>
    </div>
  );
}