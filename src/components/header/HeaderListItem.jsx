import { React, useState } from 'react'
import PropTypes from 'prop-types'

const HeaderListItem = ({ title = 'a', icon = 'fa-solid fa-car', active = false }) => {
  const [useActive] = useState(active)

  return (
    <div className={useActive ? 'header_list_item active' : 'header_list_item'}>
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
