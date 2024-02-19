import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Hello from './Hello';
import Card from './Card';

import reportWebVitals from './reportWebVitals';
import 'tachyons';

import { profileDatas } from './profileDatas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <h1>Hello World</h1> */}
    {/* <App /> */}

    {/* <Hello /> */}
    {/* <Hello greeting={'Hello' + 'React Ninja'}/> */}
    {/* <Card /> */}
    <div>
      <Card id={profileDatas[0].id} name={profileDatas[0].name} email={profileDatas[0].email}/>
      <Card id={profileDatas[1].id} name={profileDatas[1].name} email={profileDatas[1].email}/>
      <Card id={profileDatas[2].id} name={profileDatas[2].name} email={profileDatas[2].email}/>
    </div>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
