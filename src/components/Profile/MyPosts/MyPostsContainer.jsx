import React from 'react';
import { addPostActionCreator, upDateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';


const MyPostsContainer = (props) => {



  return (
    <StoreContext.Consumer> 
      {(store) => {

        let state = store.getState();

        let addPost = () => store.dispatch(addPostActionCreator());

        let onPostChange = (text) => {
          let action = upDateNewPostTextActionCreator(text);
          store.dispatch(action);
        };

        return <MyPosts
          upDateNewPostText={onPostChange}
          addPost={addPost}
          posts={state.profileReducer.posts}
          newPostText={state.profileReducer.newPostText} />
      }
    }
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer;