import React, { useState } from 'react'
import "./Profile.css"

export default function Profile(props) {

  let cat = React.createRef()

  function tac(){
    cat.current.style.display="block"
  }


  return (
    <div className='rim'>   
    <button className='mir' onClick={tac}>Показать пользователей</button>
    <div className='var' ref={cat}>
            <h1>{props.login}</h1>
            <p>{props.name}</p>
        </div>
    </div>
    
  )
}
