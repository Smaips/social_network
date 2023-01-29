import profileReducer from './profile-reducer';
import dialogReducer from './dialogs-reducer';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {

  _state : {

    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: "It's my first post?", likesCount: 11 },
      ],
      newPostText: '',
    },

    dialogsPage: {

      dialogs: [
        { id: 1, name: 'Mykhail', img: 'https://klike.net/uploads/posts/2019-03/1551511825_12.jpg' },
        { id: 2, name: 'Andrey', img: 'https://i.lb.ua/050/11/6284f91272dbb.jpeg' },
        { id: 3, name: 'Sveta', img: 'https://www.vokrug.tv/pic/person/3/3/4/7/3347916b8fa1c17823438d3217a1ccdb.jpg' },
        { id: 4, name: 'Sasha', img: 'https://s2.cdn.eg.ru/wp-content/uploads/2021/03/sasha-grey101910-780x585.jpg   ' },
        { id: 5, name: 'Viktor', img: 'https://cdn-st1.rtr-vesti.ru/vh/pictures/xw/225/986/5.jpg' },
        { id: 6, name: 'Valera', img: 'https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/591971/headshot/67/current' },
      ],

      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' },
      ],

      newMessageText: '',
    },
  },
  _callSubscriber() {
    console.log('State changed')
  },

  getState() {
    return this._state;
  },
  subscribe (observer) {
    this._callSubscriber = observer;
  },

  // _addPost() {
  //   let newPost = {
  //     id: 3,
  //     message: this._state.profilePage.newPostText,
  //     likesCount: 0,
  //   };

  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText = '';
  //   this._callSubscriber(this._state);
  // },

  // _updateNewPostText(newText) {
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this._state);
  // },

  // _sendMessage() {
  //   let newMessage = {
  //     id: 5,
  //     message: this._state.dialogsPage.newMessageText,
  //   };

  //   this._state.dialogsPage.messages.push(newMessage);
  //   this._state.dialogsPage.newMessageText = '';
  //   this._callSubscriber(this._state);
  // },

  // _updateNewMessageText(newText) {
  //   this._state.dialogsPage.newMessageText = newText;
  //   this._callSubscriber(this._state);
  // },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  //   this._callSubscriber(this._state);
  //   else if (action.type === 'SEND-MESSAGE'){
  //     this._sendMessage();
  //   }
  //   else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
  //     this._updateNewMessageText(action.newText)
  //   }
  },
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const upDateNewPostTextActionCreator = (text) => 
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const sendMessageActionCreator = () => ({type: 'SEND-MESSAGE'});
export const upDateNewMessageTextActionCreator = (text) => 
    ({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text})


export default store

window.state = store;