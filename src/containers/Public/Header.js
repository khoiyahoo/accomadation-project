import React, { useCallback } from 'react'
import logo from '../../assets/logowithoutbg.png'
import Button from '../../components/Button'
import icons from '../../ultils/icons'
import { useNavigate, Link } from 'react-router-dom'
import { path } from '../../ultils/constant'
import { useSelector, useDispatch } from 'react-redux'
import * as action from '../../store/action'
const { AiOutlinePlusCircle } = icons
function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const goLogin = useCallback((flag) => {
    navigate(path.LOGIN, { state: { flag } })
  }, [])
  const { isLoggedIn } = useSelector((state) => state.auth)
  const { currentData } = useSelector((state) => state.user)

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
                text="Đăng xuất"
                textColor={'text-white'}
                bgColor="bg-secondary2"
                IcAfter={AiOutlinePlusCircle}
                onClick={() => {
                  dispatch(action.logout())
                }}
              ></Button>
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
