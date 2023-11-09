import React from 'react'
import Posts from './Posts'
export default function Main(props) {
  let cat=React.createRef()

  
  return (
    <div>
       <Posts posts={props.data.posts}/>
    </div>
  )
}
