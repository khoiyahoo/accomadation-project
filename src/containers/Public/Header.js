import React, { useCallback, useEffect } from 'react'
import logo from '../../assets/logowithoutbg.png'
import Button from '../../components/Button'
import icons from '../../ultils/icons'
import { useNavigate, Link } from 'react-router-dom'
import { path } from '../../ultils/constant'
import { useSelector, useDispatch } from 'react-redux'
import * as action from '../../store/action'
import menuManage from '../../ultils/menuMange'
import { useState } from 'react'
const { AiOutlinePlusCircle, AiOutlineLogout, BsChevronDown } = icons
function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const goLogin = useCallback((flag) => {
    navigate(path.LOGIN, { state: { flag } })
  }, [])
  const { isLoggedIn } = useSelector((state) => state.auth)
  const { currentData } = useSelector((state) => state.user)

  const [isShowMenu, setIsShowMenu] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      isLoggedIn && dispatch(action.getCurrent())
    }, 1000)
  }, [isLoggedIn])

  return (
    <div className="w-3/5">
      <div className="w-full flex items-center justify-between">
        <Link to="/">
          <img
            src={logo}
            alt="logo trang web"
            className="w-[240px] h-[70px] object-contain"
          />
        </Link>
        <div className="flex items-center gap-1">
          {!isLoggedIn && (
            <div className="flex items-center gap-1">
              <small>Phongtro123.com xin chào !</small>
              <Button
                text={'Đăng nhập'}
                textColor="text-white"
                bgColor="bg-[#3961fb]"
                onClick={() => goLogin(false)}
              />
              <Button
                text={'Đăng ký'}
                textColor="text-white"
                bgColor="bg-[#3961fb]"
                onClick={() => goLogin(true)}
              />
            </div>
          )}
          {isLoggedIn && (
            <div className="flex items-center gap-3 relative">
              {currentData.name}
              <Button
                text="Quản lý tài khoản"
                textColor={'text-white'}
                bgColor="bg-secondary1"
                onClick={() => {
                  setIsShowMenu(!isShowMenu)
                }}
                IcAfter={BsChevronDown}
              ></Button>
              {isShowMenu && (
                <div className="absolute min-w-200 top-full bg-white shadow-md rounded-md p-4 right-0 flex flex-col">
                  {menuManage?.map((item, index) => (
                    <Link
                      className="hover:text-orange-500 flex items-center gap-2 text-blue-600 border-b border-gray-200 py-2"
                      key={item.id}
                      to={item?.path}
                    >
                      {item?.icon}
                      {item.text}
                    </Link>
                  ))}
                  <span
                    className="cursor-pointer hover:text-orange-500 text-blue-500 py-2 flex items-center gap-2"
                    onClick={() => {
                      setIsShowMenu(false)
                      dispatch(action.logout())
                    }}
                  >
                    <AiOutlineLogout />
                    Đăng xuất
                  </span>
                </div>
              )}
            </div>
          )}
          <Button
            text="Đăng tin mới"
            textColor={'text-white'}
            bgColor="bg-secondary2"
            IcAfter={AiOutlinePlusCircle}
          ></Button>
        </div>
      </div>
    </div>
  )
}

export default Header
