import React from "react";
import './App.css';
import './Route/BoardList';
import { Routes, Route } from "react-router-dom";
import BoardList from "./Route/BoardList";
// 파일 이름의 대소문자를 맞춰서 'Write.js'로 수정했습니다.
import Write from "./Route/Write";

// 홈 컴포넌트는 따로 파일을 만들지 않고, App.js 내부에 정의했습니다.
// 필요하다면 별도 파일로 분리할 수 있습니다.
function Home() {
    return <div>홈 화면</div>
}

function App() {
    return (
        <div className="App">
            {/* React Router를 사용하여 경로와 컴포넌트를 연결합니다. */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/board" element={<BoardList />} />
                <Route path="/write" element={<Write />} />
            </Routes>
        </div>
    );
}

export default App;
