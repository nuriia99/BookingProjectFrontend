import React from 'react'
import HeaderListItem from './HeaderListItem'

const Header = () => {
  return (
    <div className='header'>
      <div className="header_container">
        <div className='header_list'>
          <HeaderListItem title='Stays' icon='fa-solid fa-bed' active={true}/>
          <HeaderListItem title='Flights' icon='fa-solid fa-plane-departure' active={false}/>
          <HeaderListItem title='Car rentals' icon='fa-solid fa-car' active={false}/>
          <HeaderListItem title='Attractions' icon='fa-solid fa-child-reaching' active={false}/>
          <HeaderListItem title='Airport taxis' icon='fa-solid fa-taxi' active={false}/>
        </div>
        <h1 className="header_title">Find your next stay</h1>
        <p className="header_description">Search low prices on hotels, homes and much more...</p>
      </div>
    </div>
  )
}

export default Header
