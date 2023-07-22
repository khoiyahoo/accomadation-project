import { Routes, Route } from 'react-router-dom'
import { path } from './ultils/constant'
import { Home, Login, Rental, SearchDetail } from './containers/Public'
import HomePage from './containers/Public/HomePage'
import { useDispatch, useSelector } from 'react-redux'
import * as action from './store/action'
import { useEffect } from 'react'
function App() {
  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector((state) => state.auth)
  useEffect(() => {
    setTimeout(() => {
      isLoggedIn && dispatch(action.getCurrent())
    }, 1000)
  }, [isLoggedIn])

  useEffect(() => {
    dispatch(action.getPrices())
    dispatch(action.getCategories())
    dispatch(action.getAreas())
    dispatch(action.getProvinces())
  }, [])
  return (
    <div className="bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path="*" element={<HomePage />}></Route>
          <Route path={path.HOME__PAGE} element={<HomePage />}></Route>
          <Route path={path.CHO_THUE_CAN_HO} element={<Rental />} />
          <Route path={path.CHO_THUE_MAT_BANG} element={<Rental />} />
          <Route path={path.CHO_THUE_PHONG_TRO} element={<Rental />} />
          <Route path={path.NHA_CHO_THUE} element={<Rental />} />
          <Route path={path.SEARCH} element={<SearchDetail />} />
          <Route path={path.LOGIN} element={<Login />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
