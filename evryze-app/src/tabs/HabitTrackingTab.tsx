import React from 'react';

const habits = [
  { name: 'Drink Water', progress: 5, goal: 8 },
  { name: 'Read Book', progress: 1, goal: 1 },
  { name: 'Exercise', progress: 0, goal: 1 },
];

const HabitTrackingTab: React.FC = () => {
  return (
    <div>
      <h2 style={{ marginBottom: 18, color: '#222', fontWeight: 600 }}>Habit Tracking</h2>
      {habits.map((habit) => (
        <div className="habit-card" key={habit.name}>
          <div>
            <div style={{ fontWeight: 500, fontSize: 17 }}>{habit.name}</div>
            <div style={{ fontSize: 13, color: '#888' }}>
              {habit.progress} / {habit.goal} today
            </div>
          </div>
          <div style={{ fontWeight: 600, color: habit.progress === habit.goal ? '#25d366' : '#aaa' }}>
            {habit.progress === habit.goal ? '✔️' : `${Math.round((habit.progress / habit.goal) * 100)}%`}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HabitTrackingTab; 