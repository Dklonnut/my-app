import React ,{useState}from 'react'
import "./Post.css"
export default function Post(props) {

  let mouse = React.createRef()

  function mouse2() {
    mouse.current.style.color = "blue"
  }
  function mouse3() {
    mouse.current.style.color = "black"
  }

  const [likes, setlikes] = useState(0)
  const [dislikes, setdislikes] = useState(0)

  function start() {
    setlikes(likes + 1)
  }

  function finish() {
    setdislikes(dislikes + 1)
  }

  return (
    <div className='tesla'>
      <h1>{props.postTitle}</h1>
      <p>{props.text}</p>
      <p>Likes {likes}</p>
      <p>Dislikes {dislikes}</p>
      <div className='buttons'>
      <button className='like'  onClick={start}> Лайкнуть пост </button>
      <button className='dislike ' onClick={finish}> Дизлайкнуть пост </button>
      <button className='delete ' onClick={() => props.deletePost(props.id)}>Delete post</button>
      </div>
    </div>
  )
}