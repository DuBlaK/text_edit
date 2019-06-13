import React from 'react';
import logo from './logo.svg';
import Notes from './components/Notes';
import NoteCreation from './components/NoteCreation';

function App() {
  return (
    <div className="App">
      <NoteCreation/>
	  <Notes/>
    </div>
  );
}

export default App;
