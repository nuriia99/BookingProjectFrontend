import React from 'react'

const Navbar = () => {
  return (
      <div className='navbar'>
        <div className="navbar_container">
          <span className="logo">
            NuriaBooking.com
          </span>
          <div className="navbar_items">
            <button className="navbar_button">Register</button>
            <button className="navbar_button">Login</button>
          </div>
        </div>
      </div>
  )
}

export default Navbar
