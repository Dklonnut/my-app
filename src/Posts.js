import React, { useEffect, useRef, useState } from 'react'
import Post from './Post'
import "./Post.css"

export default function Posts(props) {

  const [counter, setCounter] = useState(props.posts.length)

  let postData = props.posts

  let [posts_data, setPosts] = useState(postData);

  const [text, setText] = useState(' ');

  const [postTitle, setTitle] = useState(' ');

  const addNewPost = () => {
    const newPost = {
      id: Date.now(),
      text,
      postTitle
    }
    setPosts([...posts_data, newPost]);

    setTitle('');
    setText('')
    setCounter(posts_data.length + 1)
  }

  let posts = posts_data.map(p => {
    return <Post postTitle={p.postTitle} text={p.text} id={p.id} deletePost={deletePost} />
  })

  function deletePost(post_id) {
    setPosts(posts_data.filter(p => p.id != post_id))
    setCounter(posts_data.length - 1)
  }

  return (
    <div>
      <form className='form' action="">

        <div className="form-post">
          <div className="form-input">
            <input type="text" value={postTitle} onChange={e => setTitle(e.target.value)} placeholder="Название поста" />
          </div>
          <div className="form-input">
            <textarea type="text" value={text} onChange={e => setText(e.target.value)} placeholder='Текст поста'></textarea>
          </div>
          <button className='button' type="button" onClick={addNewPost}>Добавить</button>
        </div>

      </form>
      <h3 className='h3'>Количество постов:{counter}</h3>
      {posts}
    </div>

  )
}
