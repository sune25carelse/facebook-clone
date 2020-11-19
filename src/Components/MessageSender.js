import { Avatar, Input } from '@material-ui/core'
import React, { useState } from 'react';
import './MessageSender.css';
import Videocam from '@material-ui/icons/Videocam'
import PhotoLibrary from '@material-ui/icons/PhotoLibrary'
import InsertEmoticon from '@material-ui/icons/InsertEmoticon'

const MessageSender = () => {
  const [input, setInput] = useState('')
  const [image, setImage] = useState(null)

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  const handleSubmit = () => {
    console.log('Submitting')
  }

  return (
    <div className='messageSender' >
        <div className="messageSender__top">
            <Avatar src='https://seeklogo.net/wp-content/uploads/2012/11/liverbir-vector-logo-400x400.png' />
            <form>
              <input 
                type="text"
                className='messageSender__input'
                placeholder="Whats on your mind?"
                value={input}
                onChange={(e) => setInput(e.target.value)} />
              <Input 
                type="file"
                className='messageSender__fileSelector'
                onChange={handleChange} />
              <button 
                onClick={handleSubmit} 
                type='submit' >Hidden Submit</button>
            </form>
        </div>

        <div className="messageSender__bottom">
          <div className="messageSender__option">
              <Videocam style={{ color: 'red' }} />
              <h3>Live Video</h3>
          </div>
          <div className="messageSender__option">
              <PhotoLibrary style={{ color: 'green' }} />
              <h3>Photo/Video</h3>
          </div>
          <div className="messageSender__option">
              <InsertEmoticon style={{ color: 'orange' }} />
              <h3>Feeling/Activity</h3>
          </div>
        </div>
    </div>
  );
}

export default MessageSender;
