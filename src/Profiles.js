import React from 'react'
import Profile from './Profile'

export default function Profiles(props) {
    let users=props.data.users.map(u =>{
        return <Profile login={u.login} name={u.name}/>
      })
  return (
    <div className="my-post">
        {users}
    </div>
  )
}
