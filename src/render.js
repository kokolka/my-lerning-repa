import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, updateNewPostText, addMessage, updateNewMessage } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addPost={addPost}
          addMessage={addMessage}
          updateNewPostText={updateNewPostText}
          updateNewMessage={updateNewMessage}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}


