import { React, useState } from 'react'

const HeaderListItem = ({ title, icon, active }) => {
  const [useActive] = useState(active || false)

  return (
    <div className={useActive ? 'header_list_item active' : 'header_list_item'}>
      <i className={icon}></i>
      <span>{title}</span>
    </div>
  )
}

export default HeaderListItem
