import React, {useState} from "react";

import './Write.css'

const Write = () => {
    // 상태로 입력값 관리
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    // 글쓰기 버튼 눌렀을 때 실행될 함수
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("제목: ", title);
        console.log("내용: ", content);
    }

    return (
        <div className="post">
            <h2 className="board-title">게시글 작성</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>제목: </label>
                    <input type="text"
                           value={title}
                           onChange={(e) => setTitle(e.target.value)}
                           className="board-title-input"/>
                </div>
                <div>
                    <label>내용: </label>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)}
                              className="board-content-input"/>
                </div>
                <button className="submit" type="submit">작성하기</button>
            </form>
        </div>

    )
}

export default Write;