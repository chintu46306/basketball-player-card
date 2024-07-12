import React from 'react';
import BasketballPlayerCard from './BasketballPlayerCard';

function App() {
  return (
    <div className="App">
      <h1>Basketball Player Card</h1>
      <BasketballPlayerCard
        name="LeBron James"
        position="Forward"
        stats={{ pointsPerGame: 25.4, assistsPerGame: 7.1, reboundsPerGame: 10.5 }}
      />
    </div>
  );
}

export default App;
