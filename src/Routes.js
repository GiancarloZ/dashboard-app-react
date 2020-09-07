import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import Home from './Pages/Home'
import Help from './Pages/Help'
import Chat from './Pages/Chat'
import Settings from './Pages/Settings'
import Projects from './Pages/Projects'
import Account from './Pages/Account'
const Routes = () => {
    return (
        <>
        <Redirect exact from="/" to="/home"  />
        <Route exact path="/home" render={props => <Home {...props}/>}/> 
        <Route exact path="/chat" render={props => <Chat {...props}/>}/> 
        <Route exact path="/settings" render={props => <Settings {...props}/>}/> 
        <Route exact path="/projects" render={props => <Projects {...props}/>}/> 
        <Route exact path="/help" render={props => <Help {...props}/>}/> 
        <Route exact path="/account" render={props => <Account {...props}/>}/> 
        {/* <Route exact path="/spots/:spotId" render={props => <Spot {...props} />} />
        <Route exact path="/login" render={props => <Login {...props} />} />
        <Route exact path="/signup" render={props => <Signup {...props} />} />
        <Route exact path="/spots/:spotId/:new" render={props => <PostTrick {...props} />} /> */}
     
        </>
    )
}
export default Routes