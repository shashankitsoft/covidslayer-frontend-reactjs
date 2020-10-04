import React, {useContext} from 'react'
import {MyContext} from '../contexts/MyContext'

function Home(){

    const {rootState,logoutUser,playNewGame} = useContext(MyContext);
    const {theUser} = rootState;

    return(
        <div className="userInfo">
            <div className="_img"><span role="img" aria-label="User Image">👦</span></div>
            <h1>{theUser.fullname}</h1>
            <div className="_email"><span>{theUser.email}</span></div>
            <hr width="40px"/>
            <h2>Covid Slayer</h2>
            <button onClick={playNewGame}>Play New Game</button>&nbsp;
            <button>Game History</button>&nbsp;
            <button onClick={logoutUser}>Logout</button>
        </div>
    )
    
}

export default Home;