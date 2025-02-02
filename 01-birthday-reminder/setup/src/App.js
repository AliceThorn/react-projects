import React, { useState } from 'react';
import data from './data';
import List from './List';


function App() {
  const [people, setPeople] = useState(data)

  return (
  <main>
    <section classname='container'>
      <h3> {people.length} Birthdays Today </h3>
      <List people={people}/>
      <button onClick={() => setPeople([])}>Clear All</button>
      <button onClick={(<List people={people}/>)}>Todays Reminders</button>
    </section>
  </main>
  );
}

export default App;
