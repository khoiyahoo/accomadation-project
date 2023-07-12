import React from 'react'
import logo from '../../assets/logowithoutbg.png'
function Header() {
  return (
    <div className="w-1100 items-center justify-between">
      <img
        src={logo}
        alt="logo trang web"
        className="w-[240px] h-[70px] object-cover"
      />
    </div>
  )
}

export default Header
