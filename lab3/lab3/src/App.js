
import React from 'react'
import './App.css';
import HomePage from "./components/Homepage";

function App() {

  //tried to get another line of text to show up after 500 milliseconds but uh, react is weird, i'm a vue guy
  let showQuestion = false;
  setTimeout(() => {
    showQuestion = true
  }, 500)

  return (
      <HomePage firstName={'matt'}/>
  );
}

export default App;
