import React from 'react';
import { addPostActionCreator, upDateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => props.store.dispatch(addPostActionCreator());

  let onPostChange = (text) => {
    let action = upDateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (<MyPosts upDateNewPostText={onPostChange}
                   addPost={addPost}
                   posts={state.profileReducer.posts}
                   newPostText={state.profileReducer.newPostText} />)
}

export default MyPostsContainer;