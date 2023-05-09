// import React from 'react'
/*
  Function components are JS functions that return React elements
  Function components have become 
*/

function Button(props) {
  return (
    <button className={props.isLoggedIn ? "green" : "red"}>
      {props.isLoggedIn? "Logout" : "Login"}
    </button>
  )
}

export default Button;