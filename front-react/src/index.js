import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
/* import App1 from './App1'; */

// **** (2) 스토어를 만들고 현재 값 확인해보기
// 리덕스 개발자도구 적용

// **** (2) Provider 렌더링해서 기존의 App 감싸주기
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
