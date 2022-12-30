import s from'./Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img alt='' src='https://klike.net/uploads/posts/2019-03/1551511825_12.jpg'></img>
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>     
  )
}

export default Post;