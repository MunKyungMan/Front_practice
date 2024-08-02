import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, b] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [logo, setLogo] = useState('ReactBlog');

  // let num = [1,2];
  // let [a, c] = [1 , 2];
  // let a = num[0];
  // let c = num[1];



  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <div className="list">
        <h4>{ 글제목[0] }</h4>
        <p>8월 2일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>8월 2일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>8월 2일 발행</p>
      </div>
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

export default App;
