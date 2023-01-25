import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Routes, Route } from 'react-router-dom';
import store from './redux/state';



function App(props) {

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile/*'
                 element={<Profile
                   profilePage={props.state.profilePage}
                   addPost={props.store.addPost.bind(store)}
                   updateNewPostText={props.store.updateNewPostText.bind(store)} />} />
          <Route path='/dialogs/*'
                 element={<Dialogs dialogsPage={props.state.dialogsPage}
                   sendMessage={props.store.sendMessage.bind(store)}
                   updateNewMessageText={props.store.updateNewMessageText.bind(store)} />} />
        </Routes>
      </div>
    </div>
  );
}



export default App;
