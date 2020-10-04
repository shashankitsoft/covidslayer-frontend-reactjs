import React, {useContext} from 'react'
import {MyContext} from '../contexts/MyContext'
import { BrowserRouter as Router, Route,Switch, Redirect, Link} from 'react-router-dom'

// Importing the Login & Register Componet
import Login from './Login'
import Register from './Register'
import Home from './Home'
import NewGameC from './NewGameC'

function UserPanel(){

    const {rootState,logoutUser} = useContext(MyContext);
    const {isAuth,theUser,showLogin,page} = rootState;

    // If user Logged in
    if(isAuth)
    {   if(page==='home'){
            return( 
                <Home/>
            )
        }
        if(page==='newGame'){
            return(
                <NewGameC/>
            )
        }
    }

    // Showing Login Or Register Page According to the condition
    else if(showLogin){
        return <Login/>;
    }
    else{
        return <Register/>;
    }
}

export default UserPanel;