import UserContext from './UserContext'

import React, { useEffect, useState } from 'react'

const UserState = (props) => {

    const [items, setItem] = useState([])


    useEffect(() => {
      console.log("items are : ", items)
    }, [items])
  return (
    <UserContext.Provider value={{items, setItem}}>
        {props.children}
    </UserContext.Provider>
  )
}

export default UserState