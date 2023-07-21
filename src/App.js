import { Routes, Route } from 'react-router-dom'
import { path } from './ultils/constant'
import { Home, Login, Rental } from './containers/Public'
import HomePage from './containers/Public/HomePage'
function App() {
  return (
    <div className="bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path="*" element={<HomePage />}></Route>
          <Route path={path.HOME__PAGE} element={<HomePage />}></Route>
          <Route path={path.CHO_THUE_CAN_HO} element={<Rental />} />
          <Route path={path.LOGIN} element={<Login />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
