import React, { useState, useRef, useEffect } from 'react'
import HeaderListItem from './HeaderListItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendar, faMinus, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { getDate } from '../../utils/utils'

const Header = () => {
  const refDate = useRef(null)
  const refCounter = useRef(null)
  const [activeCounter, setActiveCounter] = useState(false)
  const [date, setDate] = useState(false)
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ])
  const [settings, setSettings] = useState({
    adult: 1,
    children: 0,
    room: 1
  })

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
  }, [])

  const handleClickCounter = (name, type) => {
    setSettings(prev => {
      const value = type === 0 ? prev[name] - 1 : prev[name] + 1
      return ({
        ...prev,
        [name]: value
      })
    })
  }

  const handleActiveCounter = () => {
    setActiveCounter(prev => !prev)
    setDate(false)
  }

  const handleActiveDate = (e) => {
    console.log(e)
    setDate(prev => !prev)
    setActiveCounter(false)
  }

  const handleClickOutside = (e) => {
    if (!refDate.current.contains(e.target)) setDate(false)
    if (!refCounter.current.contains(e.target)) setActiveCounter(false)
  }
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
        <button className="btn_header">Sign in / Register</button>
      </div>
      <div className="header_search">
        <div className="header_search_item header_search_place">
          <span>
            <FontAwesomeIcon className='icon' icon={faBed} />
            <input type="text" placeholder='Where are you going?'/>
          </span>
        </div>
        <div ref={refDate} className="header_search_item header_search_time">
          <span onClick={handleActiveDate}>
            <FontAwesomeIcon className='icon' icon={faCalendar} />
            <span>{getDate(state[0].startDate)} - {getDate(state[0].endDate)} </span>
          </span>
          {
              date && <DateRange
                    editableDateInputs={true}
                    onChange={item => setState([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                    className='date'
                  />
            }
        </div>
        <div ref={refCounter} className="header_search_item header_search_settings">
          <span onClick={handleActiveCounter}>
            <FontAwesomeIcon className='icon' icon={faUser} />
            <span>{settings.adult} adult · {settings.children} children · {settings.room} room</span>
          </span>
          {
            activeCounter && <div className="header_search_settings_container">
              <div className="header_search_settings_container_item">
                <span>Adult</span>
                <div className="header_search_settings_container_item_counter">
                  <button disabled={settings.adult <= 1} onClick={() => handleClickCounter('adult', 0)}><FontAwesomeIcon className='icon' icon={faMinus}/></button>
                  <span>{settings.adult}</span>
                  <button onClick={() => handleClickCounter('adult', 1)}><FontAwesomeIcon className='icon' icon={faPlus}/></button>
                </div>
              </div>
              <div className="header_search_settings_container_item">
                <span>Children</span>
                <div className="header_search_settings_container_item_counter">
                <button disabled={settings.children <= 0} onClick={() => handleClickCounter('children', 0)}><FontAwesomeIcon className='icon' icon={faMinus}/></button>
                  <span>{settings.children}</span>
                  <button onClick={() => handleClickCounter('children', 1)}><FontAwesomeIcon className='icon' icon={faPlus}/></button>
                </div>
              </div>
              <div className="header_search_settings_container_item">
                <span>Room</span>
                <div className="header_search_settings_container_item_counter">
                <button disabled={settings.room <= 1} onClick={() => handleClickCounter('room', 0)}><FontAwesomeIcon className='icon' icon={faMinus}/></button>
                  <span>{settings.room}</span>
                  <button onClick={() => handleClickCounter('room', 1)}><FontAwesomeIcon className='icon' icon={faPlus}/></button>
                </div>
              </div>
            </div>
          }
        </div>
        <div className="header_search_item header_search_button">
          <button className="btn_header">Search</button>
        </div>
      </div>
    </div>
  )
}

export default Header
