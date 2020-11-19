import React from 'react';
import Story from './Story';
import './StoryReel.css';


const StoryReel = () => {
  return (
    <div className='storyReel'>
        <Story
            image='https://seeklogo.net/wp-content/uploads/2011/08/liverpool-logo-vector-400x400.png'
            profileSrc='https://seeklogo.net/wp-content/uploads/2012/11/liverbir-vector-logo-400x400.png'
            title='Fabba1892'
        />
        <Story
            image='http://www.geocities.ws/m_shuttleworth_jp/NZ.jpg'
            profileSrc='https://media.e-subsidesports.com/sites/us/media/catalog/product/cache/2/image/650x/040ec09b1e35df139433887a97daa66f/1/0/1000_6_liverpoolhss2021_new_a.jpg'
            title='Luca1892'
        />
        <Story
            image='https://seeklogo.net/wp-content/uploads/2011/08/english-premier-league-logo-vector-400x400.png'
            profileSrc='https://seeklogo.net/wp-content/uploads/2011/08/chelsea-logo-vector-400x400.png'
            title='MissCFC'
        />
    </div>
  );
}

export default StoryReel;
