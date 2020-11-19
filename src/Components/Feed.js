import React from 'react';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';


const Feed = () => {
  return (
    <div className='feed'>
        <StoryReel />
        <MessageSender />
        
        <Post 
          profilePic='https://seeklogo.net/wp-content/uploads/2012/11/liverbir-vector-logo-400x400.png'
          message='yoo this a message'
          timestamp='time'
          imgName='imgName'
          username='Fabba1892'
        />

        {/*
            postsData.map(entry => (
                <Post
                    profilePic={entry.avatar}
                    message={entry.text}
                    timestamp={entry.timestamp}
                    imgName={entry.imgName}
                    username={entry.user}
                />
            ))
            */}

    </div>
  );
}

export default Feed;
 