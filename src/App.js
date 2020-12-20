import React from "react";
import './App.css';
import Friendrcards from "./Friendrcards";
import Header from "./Header";
import SwipeButtons from "./SwipeButtons";

function App() {
  return  (
  <div className="App">
    <Header />
    <Friendrcards />
    <SwipeButtons />
     </div>
      );
}

export default App;
