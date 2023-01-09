import s from'./MyPosts.module.css'
import Post from './Post/Post';



const MyPosts = (props) => {
  
  let postsElements = props.posts
    .map( p => <Post message={p.message} likesCount={p.likesCount } />)

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div >
        <div >
          <textarea></textarea>
        </div>
        <div >
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>

        { postsElements }

        {/* <Post message={posts[0].message} likesCount={posts[0].likesCount } />
            <Post message={posts[1].message} likesCount={posts[1].likesCount } /> */}
      </div>
    </div>
  )
}

export default MyPosts;