import React from 'react'
import './write.css'

export default function Write() {
  return (
    <div className='write'>
      <img
        className='writeImg'
        src='https://images.pexels.com/photos/3585812/pexels-photo-3585812.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        alt=''
      />
      <form className='writeForm'>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
            <i class='writeIcon fa-solid fa-plus'></i>
          </label>
          <input type='file' id='fileInput' style={{ display: 'none' }} />
          <input
            type='text'
            placeholder='title'
            className='writeInput'
            autoFocus={true}
          />
        </div>
        <div className='writeFormGroup'>
          <textarea
            placeholder='Tell your story...'
            type='text'
            className='writeInput writeText'
          ></textarea>
        </div>
        <button className='writeSubmit'>Publish</button>
      </form>
    </div>
  )
}
