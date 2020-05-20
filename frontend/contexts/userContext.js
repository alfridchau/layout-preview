import React, { createContext, useState } from 'react';
export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [ user, setUser ] = useState({});
    const storeUser = user => {
      setUser({
        username: user.username,
      })
  }
  const logout = () => {
    setUser({});
  }
  return (
    <UserContext.Provider value={{ user,  storeUser }}>
      {props.children}
    </UserContext.Provider>
  )
}
export default UserContextProvider;