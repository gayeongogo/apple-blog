import { useState } from 'react';
import './App.css';

function App() {

    let [name, setName] = useState(['남자코트 추천', '수원 우동맛집', '리액트 독학'])
    let [like, setLike] = useState(0);

    return (
        <div className="App">
            <div className="black-nav">
                <h4>ReactBlog</h4>
            </div>
            <div className="list">
                <h4>{name[0]}<span onClick={() => setLike(like+1)}>💗</span> {like}</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4>{name[1]}</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4>{name[2]}</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="modal">
                <h4>제목</h4>
                <p>날짜</p>
                <p>상세내용</p>
            </div>
        </div>
    );
}


export default App;
