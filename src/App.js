import React from "react";
import './App.css';
import './Route/BoardList';
import {Routes, Route} from "react-router-dom";
import BoardList from "./Route/BoardList";
// import './Home';

function Home(){
    return <div>홈 화면</div>
}

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/board" element={<BoardList />} />
        </Routes>

    </div>
  );
}

export default App;
