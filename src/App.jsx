import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import JournalEditor from './components/JournalEditor';
import JournalList from './components/JournalList';
import Stats from './components/Stats';
import Contact from './components/Contact';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [entries, setEntries] = useState(() => {
    const saved = localStorage.getItem('muraayad_entries');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('muraayad_entries', JSON.stringify(entries));
  }, [entries]);

  const addEntry = (newEntry) => {
    setEntries([newEntry, ...entries]);
    setActiveTab('list');
  };

  const deleteEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-100/80 text-slate-800 font-sans flex flex-col justify-between">
      <div>
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main className="max-w-5xl mx-auto px-4 py-8">
          {activeTab === 'home' && <Home setActiveTab={setActiveTab} entriesCount={entries.length} />}
          {activeTab === 'editor' && <JournalEditor onSave={addEntry} />}
          {activeTab === 'list' && <JournalList entries={entries} onDelete={deleteEntry} />}
          {activeTab === 'stats' && <Stats entries={entries} />}
          {activeTab === 'contact' && <Contact />}
        </main>
      </div>

      <footer className="text-center py-6 text-slate-600 font-medium text-sm border-t border-slate-200 bg-white shadow-inner mt-12">
        © {new Date().getFullYear()} Muraayad Journal — <span className="text-teal-800 font-bold">Dhise: Jihaan Abdikadir</span>
      </footer>
    </div>
  );
}