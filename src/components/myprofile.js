import React from 'react'
import PrimaryUserData from './primaryuserdata'
import NewsArticles from './newsarticles'
import { useState } from 'react'


const MyProfile = () => { 

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
            <h2> MY PROFILE! </h2>
            <h3>News Articles You Would Like:</h3>
            <NewsArticles props = {profileData.newsArticles}/> 

        </div>  
    )

}

export default MyProfile