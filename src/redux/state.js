
import { renderEntireTree } from '../render';
  
  let state = {

    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: "It's my first post?", likesCount: 11},
          ],
    },

    dialogsPage: {

        dialogs: [
            {id: 1, name: 'Mykhail', img: 'https://klike.net/uploads/posts/2019-03/1551511825_12.jpg'},
            {id: 2, name: 'Andrey', img: 'https://i.lb.ua/050/11/6284f91272dbb.jpeg'},
            {id: 3, name: 'Sveta', img: 'https://www.vokrug.tv/pic/person/3/3/4/7/3347916b8fa1c17823438d3217a1ccdb.jpg'},
            {id: 4, name: 'Sasha', img: 'https://s2.cdn.eg.ru/wp-content/uploads/2021/03/sasha-grey101910-780x585.jpg   '},
            {id: 5, name: 'Viktor', img: 'https://cdn-st1.rtr-vesti.ru/vh/pictures/xw/225/986/5.jpg'},
            {id: 6, name: 'Valera', img: 'https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/591971/headshot/67/current'},
          ],

        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
          ],
    },
  }

  export let addPost = (postMessage) => {
    let newPost = {
      id: 3,
      message: postMessage,
      likesCount: 0,
    };
    
    state.profilePage.posts.push(newPost);
    renderEntireTree(state);
  }

  export default state