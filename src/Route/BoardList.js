import React from "react";
import './BoardList.css'

const BoardList = () => {

    // ✅ 테스트용 게시글 데이터 (나중에 서버에서 가져올 수도 있음)
    const posts = [
        { id: 1, title: "첫 번째 글", author: "홍길동", date: "2025-08-19", views: 12 },
        { id: 2, title: "두 번째 글", author: "김철수", date: "2025-08-18", views: 30 },
        { id: 3, title: "세 번째 글", author: "이영희", date: "2025-08-17", views: 7 },
        { id: 4, title: "네 번째 글", author: "홍길동", date: "2025-08-16", views: 9 },
        { id: 5, title: "다섯 번째 글", author: "김철수", date: "2025-08-15", views: 15 },
        { id: 6, title: "여섯 번째 글", author: "이영희", date: "2025-08-14", views: 8 },
        { id: 7, title: "일곱 번째 글", author: "홍길동", date: "2025-08-13", views: 5 },
        { id: 8, title: "여덟 번째 글", author: "김철수", date: "2025-08-12", views: 18 },
        { id: 9, title: "아홉 번째 글", author: "이영희", date: "2025-08-11", views: 21 },
        { id: 10, title: "열 번째 글", author: "홍길동", date: "2025-08-10", views: 14 },
        { id: 11, title: "열한 번째 글", author: "김철수", date: "2025-08-09", views: 27 },
    ];

    // ✅ 현재 페이지 번호 (1페이지부터 시작)
    const [currentPage, setCurrentPage] = React.useState(1);

    // ✅ 한 페이지당 보여줄 게시글 개수
    const postsPerPage = 10;

    // ✅ 현재 페이지에서 보여줄 게시글 인덱스 계산
    //    currentPage=1 → indexOfFirst=0, indexOfLast=10 → 0~9번 게시글
    //    currentPage=2 → indexOfFirst=10, indexOfLast=20 → 10~19번 게시글
    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;

    // ✅ 실제로 잘라낸 현재 페이지용 게시글 데이터
    const currentPost = posts.slice(indexOfFirst, indexOfLast);

    // ✅ 전체 페이지 수 = 전체 게시글 수 / 한 페이지당 글 수
    //    Math.ceil: 나눴을 때 소수점이 있으면 올림 → 글 11개면 2페이지 필요
    const totalPages = Math.ceil(posts.length / postsPerPage);

    return (
        <div className="board-container">
            <h2>게시판 목록</h2>

            {/* ✅ 게시글 목록을 테이블로 출력 */}
            <table className="board-table">
                <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                    <th>조회수</th>
                </tr>
                </thead>
                <tbody>
                {/* ✅ currentPost만 map 돌리기 → 페이지당 10개만 출력됨 */}
                {currentPost.map((post) => (
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.author}</td>
                        <td>{post.date}</td>
                        <td>{post.views}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* ✅ 페이지네이션 버튼 영역 */}
            <div className="pagination">
                {Array.from({length: totalPages}, (_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => setCurrentPage(i + 1)}  // 클릭하면 currentPage 바뀜
                        className={currentPage === i + 1 ? "active" : ""} // 현재 페이지 강조
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default BoardList;
