import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let postsData = [
  { id: 1, message: 'Hi, how are you?', likeCounts: 10 },
  { id: 2, message: 'Are you busy?', likeCounts: 4 },
  { id: 2, message: 'I\'am not', likeCounts: 25 },
  { id: 2, message: 'Good', likeCounts: 1 }
];
let dialogsData = [
  { id: 1, name: 'Kirill' },
  { id: 2, name: 'Anna' },
  { id: 3, name: 'Dimon' },
  { id: 4, name: 'Serj' },
  { id: 5, name: 'Diana' }
];
let messagesData = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'Hi' },
  { id: 3, message: 'How are you?' }
];

ReactDOM.render(
  <React.StrictMode>
    <App pd={postsData} dd={dialogsData} md={messagesData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
