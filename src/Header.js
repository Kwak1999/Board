import React from "react";
import {Link} from "react-router-dom";
import "./Header.css"


const Header = () => {
    return (
        <header className="header">
            <a className="nav-item" href="/">홈</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a className="nav-item" href="/board">게시판</a>
            <hr/>
        </header>

        // SPA 방식
        // <header className="header">
        //     <Link className="nav-item" to="/">홈</Link>
        //     &nbsp;&nbsp;|&nbsp;&nbsp;
        //     <Link className="nav-item" to="/board">게시판</Link>
        // <hr/>
        // </header>
    )
}

export default Header;