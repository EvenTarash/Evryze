import React, { useState } from 'react';
import './App.css';
import HabitTrackingTab from './tabs/HabitTrackingTab';

const TABS = [
  { label: 'Habit Tracking', icon: '📈', component: <HabitTrackingTab /> },
  { label: 'Notes', icon: '📝', component: <div className="tab-placeholder">Notes coming soon...</div> },
  { label: 'Journal', icon: '📔', component: <div className="tab-placeholder">Journal coming soon...</div> },
  { label: 'Routine', icon: '🌅', component: <div className="tab-placeholder">Routine coming soon...</div> },
  { label: 'Todo', icon: '✅', component: <div className="tab-placeholder">Todo List coming soon...</div> },
];

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="app-container">
      <div className="main-content">
        {TABS[activeTab].component}
      </div>
      <nav className="bottom-tab-bar">
        {TABS.map((tab, idx) => (
          <button
            key={tab.label}
            className={`tab-btn${activeTab === idx ? ' active' : ''}`}
            onClick={() => setActiveTab(idx)}
            aria-label={tab.label}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default App;
