import React, { useState } from 'react'
import "./SideBar.css";
// import axios from 'axios';

function SideBar() {

  return (

    <div className='sidebar'>

      <div className='calendar'>
        <a href='https://calendar.google.com/calendar/u/0/r?pli=1'><img src='/google-calendar.png' style={{width:"25px"}} ></img></a>
      </div>

      <div className='keep'>
        <a href='https://www.google.co.in/keep/'><img src='/google-keep.png' style={{width:"22px"}} ></img></a>
      </div>

      <div className='tasks'>
        <a href='https://tasksboard.com/'><img src='/google-tasks.png' style={{width:"28px"}} ></img></a>
      </div>

      <div className='contacts'>
        <a href='https://contacts.google.com/'><img src='/google-contacts.png' style={{width:"25px"}} ></img></a>
      </div>

      <div className='maps'>
        <a href='https://www.google.com/maps/@38.9411018,-80.18926,7z'><img src='/google-maps.png' style={{width:"22px"}} ></img></a>
      </div>

      <div className='add-on'>
        <a href='#'><img src='/add-on.png' style={{width:"17px"}} ></img></a>
      </div>

    </div>
  );
}

export default SideBar;
