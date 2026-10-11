import React from 'react';

export default function Navbar({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'home', label: 'Guriga', icon: '🌿' },
    { id: 'editor', label: 'Qoris Cusub', icon: '✍️' },
    { id: 'list', label: 'Xusuus-Qorkayga', icon: '📖' },
    { id: 'stats', label: 'Istaatistiko', icon: '📊' },
    { id: 'contact', label: 'Talo & Taageero', icon: '💬' },
  ];

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div 
            onClick={() => setActiveTab('home')}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <span className="text-2xl transform group-hover:scale-110 transition-transform">🪞</span>
            <span className="text-xl font-bold bg-gradient-to-r from-teal-800 via-amber-700 to-teal-600 bg-clip-text text-transparent">
              Muraayad Journal
            </span>
          </div>

          <div className="flex space-x-1 sm:space-x-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-teal-700 text-white shadow-md shadow-teal-700/20 font-semibold'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-teal-800'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span className="hidden sm:inline">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}