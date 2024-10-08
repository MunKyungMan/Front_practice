// esLint-disable

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [logo, setLogo] = useState('ReactBlog');

  let [좋아요, 좋아요변경] = useState(0);


  // function 함수(){
  //   console.log(1);
  // }

  // let num = [1,2];
  // let [a, c] = [1 , 2];
  // let a = num[0];
  // let c = num[1];



  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>

      <button onClick={() => {
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        // 글제목[0] = '여자 코트 추천';
        글제목변경(copy);
      }}>글수정</button>

      <button onClick={() => {
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}>가나다순정렬</button>





      <div className="list">
        <h4>{글제목[0]} <span onClick={() => { 좋아요변경(좋아요 + 1) }}>👍</span> {좋아요} </h4>
        <p>8월 2일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]} <span onClick={() => { 좋아요변경(좋아요 + 1) }}>👍</span> {좋아요} </h4>
        <p>8월 2일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]} <span onClick={() => { 좋아요변경(좋아요 + 1) }}>👍</span> {좋아요} </h4>
        <p>8월 2일 발행</p>
      </div>

      <Modal></Modal>







    </div>
  );

  // return (
  //   <div className="App">
  //     <div className="black-nav">
  //       <h4 id ={post} style={ {color : 'red', fontSize : '16px'}}>블로그</h4>
  //     </div>
  //     <h4>{ post }</h4>
  //   </div>
  // );
}

function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
