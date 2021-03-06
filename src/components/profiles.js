import React from 'react'
import Friend1 from './friend1'
import Friend2 from './friend2'
import Friend3 from './friend3'
import { Route, Switch } from 'react-router-dom' 
import FriendNavBar from './friendnavbar'
import { useState } from 'react'


const Profiles = () => { 

    const [profileData, SetProfileData] = useState(
        {newsArticles:
        [ {articleTitle: 'Dog Loves Hanging with Best Turtle Friend' , articleSubTitle: 'This dog and this turtle are best buds! ', id: 1 } ,
         {articleTitle: 'Capybara Loves Hanging with Best Tortise Friend' , articleSubTitle: 'This Capybara and this tortoise are best buds! ',id: 1 },
         {articleTitle: 'Capybara Loves Hanging with Best Tortise Friend' , articleSubTitle: 'This Capybara and this tortoise are best buds! ', id: 1 }
       ],
        connectedFriends:[
           {firstName: "Bob",
           lastName: "Smith",
           birthday: "01/01/1718 00:00:00",
           profileImage: "https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc5MDgzNDc5NjcyNTQz/portrait-of-john-smith.jpg",
           id: 1}, 
       
           {firstName: "Gail",
           lastName: "Adams",
           birthday: "01/01/1981 00:00:00",
           profileImage: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgwMzQzNjA3NjU4NTU1MjQ0/abigail-adams---feature.jpg",
           id: 2},
       
           {firstName: "Bobby",
           lastName: "Joe",
           birthday: "01/03/1990 00:00:00",
           profileImage: 'https://assets-jpcust.jwpsrv.com/thumbnails/ri6swvhv-720.jpg',
           id: 3}
       ]
       })

    

    return ( 
        <div> 
            <h2> Your Friends! </h2>
            <h3>Here are Your Friends:</h3>
            <FriendNavBar friends =  {profileData.connectedFriends}/> 
                <Switch>
                    <Route  exact path="/profiles/:id" render= {() => <Friend1 props = {profileData.connectedFriends[0]} /> } />
                    <Route  exact path="/profiles/:id" render= {() => <Friend2 props = {profileData.connectedFriends[1]} /> } />
                    <Route  exact path="/profiles/:id" render= {() => <Friend3 props = {profileData.connectedFriends[2]} /> } />
                </Switch> 

        </div>  
    )

}

export default Profiles