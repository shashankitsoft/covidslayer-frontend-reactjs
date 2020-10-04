import React, {useContext} from 'react'
import {MyContext} from '../contexts/MyContext'

function NewGameC(){

    const {rootState,logoutUser,gotoHome} = useContext(MyContext);
    const {theUser} = rootState;

    return(
        <div className="userInfo gamePlay">                
            <div className="_img"><span role="img" aria-label="User Image">👦</span></div>
            <div className="username"><b>Player Name: </b>{theUser.fullname}</div>
            <div className="_email"><b>Email: </b>{theUser.email}</div>
            <hr width="40px"/>
            <h1>Covid Slayer</h1>
            <h2>New Game Screen</h2>
            
            <div className="playBox">
                <div className="row">
                    <div className="col-5">{theUser.fullname}<br/><br/>
                        <div className="progressBar">100%</div>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-5">Dragon<br/><br/>
                        <div className="progressBar">100%</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 text-center">
                        <button>START</button>    
                    </div>
                    <div className="col-6 text-center">
                        Game Time: <input className="gameTimeBox" name="gameTime" type="number" required value="60" /> secs
                    </div>                    
                </div>
                <div className="row">
                    <div className="col-6 text-center"> 
                        <b>Action Buttons</b>
                    </div>                    
                </div>
                <div className="row">
                    <div className="col-6 text-left action-buttons">                        
                        <button>ATTACK</button>&nbsp;
                        <button>BLAST</button>&nbsp;
                        <button>HEAL</button>&nbsp;
                        <button>GIVEUP</button>&nbsp;                                       
                    </div>
                    <div className="col-2">
                    </div>  
                    <div className="col-4 text-center action-buttons">
                    <div className="commentaryBox">
                        -- Start Commentary --
                    </div>
                    </div>                  
                </div>

            </div>
            <hr/>
            <button onClick={gotoHome}>Home</button>&nbsp;
            <button onClick={logoutUser}>Logout</button>
        </div>
    )
   
}

export default NewGameC;