import React from 'react'
import MyProfile from './components/myprofile'
import NavBar from './components/navbar'
import AboutUs from './components/aboutus'
import Profiles from './components/profiles'
import { Route, Switch } from 'react-router-dom'


const App = () => {
  
  
  return (
  
  <div>
   <h1> Generic Social Media Site </h1> 
   <NavBar /> 

    <Switch>
        <Route  path="/profiles" component={Profiles} />
        <Route  path="/aboutus" component={AboutUs} />
        <Route exact path="/">
          <MyProfile />
        </Route >
      </Switch>
    </div>
   
  )
}


export default App;