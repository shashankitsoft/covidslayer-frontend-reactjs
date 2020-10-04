import React, {useContext} from 'react'
import {MyContext} from '../contexts/MyContext'

function NewGameC(){

    const {rootState,logoutUser} = useContext(MyContext);
    const {theUser} = rootState;

    return(
        <div className="userInfo">                
            <div className="_img"><span role="img" aria-label="User Image">👦</span></div>
            <div className="username"><b>Player Name: </b>{theUser.fullname}</div>
            <div className="_email"><b>Email: </b>{theUser.email}</div>
            <h1>New Game Screen</h1>
            
            This is New Game
            Game History
            <button onClick={logoutUser}>Logout</button>
        </div>
    )
   
}

export default NewGameC;