import React, {useContext} from 'react'
import {MyContext} from '../contexts/MyContext'

function NewGameC(){

    const {rootState,logoutUser,gotoHome} = useContext(MyContext);
    const {theUser} = rootState;

    return(
        <div className="userInfo">                
            <div className="_img"><span role="img" aria-label="User Image">👦</span></div>
            <div className="username"><b>Player Name: </b>{theUser.fullname}</div>
            <div className="_email"><b>Email: </b>{theUser.email}</div>
            <hr width="40px"/>
            <h1>Covid Slayer</h1>
            <h2>New Game Screen</h2>
            
            <div className="playBox"></div>
            <button onClick={gotoHome}>Home</button>&nbsp;
            <button onClick={logoutUser}>Logout</button>
        </div>
    )
   
}

export default NewGameC;