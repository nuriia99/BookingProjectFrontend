import { React, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const HeaderListItem = ({ title = 'a', icon = 'fa-solid fa-car', active = false }) => {
  const [useActive, setActive] = useState(active)
  let change = true
  useEffect(() => {
    if (active) change = false
  }, [])

  const handleMouseOver = () => {
    if (change) setActive(true)
  }

  const handleMouseOut = () => {
    if (change) setActive(false)
  }
  // console.log(change)
  return (
    <div className={useActive ? 'header_list_item active' : 'header_list_item'} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <i className={icon}></i>
      <span>{title}</span>
    </div>
  )
}

HeaderListItem.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  active: PropTypes.bool
}

export default HeaderListItem
