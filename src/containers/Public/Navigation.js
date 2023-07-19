import React, { useEffect, useState } from 'react'

import { apiGetCategories } from '../../services/category'
import { NavLink } from 'react-router-dom'
import Swal from 'sweetalert2'
import { formatVietnameseToString } from '../../ultils/common/formatVietNameseToString'
const notActive =
  'hover:bg-secondary2 px-4 h-full flex items-center bg-secondary1'
const active =
  'hover:bg-secondary2 px-4 h-full flex items-center  bg-secondary2'
const Navigation = () => {
  const [categories, setCategories] = useState([])

  const fetchCategory = async () => {
    apiGetCategories()
      .then((response) => {
        setCategories(response?.data?.response)
      })
      .catch((err) => {
        Swal.fire('Oops !', err, 'error')
      })
  }

  useEffect(() => {
    fetchCategory()
  }, [])

  return (
    <div
      className={`w-screen flex justify-center items-center h-[40px] bg-secondary1 text-white`}
    >
      <div className="w-3/5 flex h-full items-center text-sm font-medium justify-start">
        <NavLink
          to={`/`}
          className={({ isActive }) => (isActive ? active : notActive)}
        >
          Trang chủ
        </NavLink>
        {categories?.length > 0 &&
          categories.map((item) => {
            return (
              <div
                key={item.code}
                className="h-full flex justify-center items-center"
              >
                <NavLink
                  to={`/${formatVietnameseToString(item.value)}`}
                  className={({ isActive }) => (isActive ? active : notActive)}
                >
                  {item.value}
                </NavLink>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Navigation
