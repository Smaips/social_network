import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost, updateNewPostText, updateNewMessageText, sendMessage } from './redux/state';
import { HashRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = (state) => {
  
  root.render(
    <React.StrictMode>
      <HashRouter>
        <App state={state} 
             addPost={addPost} 
             updateNewPostText={updateNewPostText}
             sendMessage = {sendMessage}
             updateNewMessageText={updateNewMessageText} />
      </HashRouter>
    </React.StrictMode>
  );
}

subscribe(renderEntireTree);

renderEntireTree(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
