import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel.js';
import MessageSender from './MessageSender.js'
import Post from './Post.js';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            <Post 
                profilePic="https://website.storage/Data/DUNO/RTE/Afbeeldingen/NieuwsItem/12683/ws3.jpg"
                message='Gang in this bitch'
                timestamp='This is a timestamp'
                username='Gabriel'
                image="https://townsquare.media/site/812/files/2016/06/biggie-tupac-shakur-redman.jpg?w=980&q=75"
            />
            <Post 
                profilePic="https://website.storage/Data/DUNO/RTE/Afbeeldingen/NieuwsItem/12683/ws3.jpg"
                message='Ganging!'
                timestamp='This is a timestamp'
                username='Gabriel'
            />
            <Post />
        </div>
    )
}

export default Feed
