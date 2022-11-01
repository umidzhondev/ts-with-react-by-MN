import React from 'react';
import './App.css';
import EventComponent from './components/EventComponent';
import UserSearch from './components/UserSearch';


function App() {
  return (
    <div className="App">
        <UserSearch/>
        <EventComponent/>
    </div>
  );
}

export default App;
