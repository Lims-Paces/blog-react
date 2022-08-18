import React from 'react'
import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img
          src='https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300'
          alt=''
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia eaque,
          beatae in praesentium eos quo aut assumenda et dignissimos officia.
        </p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>Relationship</li>
          <li className='sidebarListItem'>Events</li>
          <li className='sidebarListItem'>Engagement</li>
          <li className='sidebarListItem'>Wedding</li>
          <li className='sidebarListItem'>Music</li>
          <li className='sidebarListItem'>Life</li>
        </ul>
        <div className='sidebarItem'>
          <span className='sidebarTitle'>FOLLOW US</span>
          <div className='sidebarSocial'>
            <i className='sidebarIcon fa-brands fa-facebook-square'></i>
            <i className='sidebarIcon fa-brands fa-twitter-square'></i>
            <i className='sidebarIcon fa-brands fa-pinterest-square'></i>
            <i className='sidebarIcon fa-brands fa-instagram-square'></i>
          </div>
        </div>
      </div>
    </div>
  )
}
