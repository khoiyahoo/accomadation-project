import React, { useEffect } from 'react'
import { List, Search } from './index'
import { text, location } from '../../ultils/constant'
import { ProvinceBtn, RelatedPost } from '../../components'
import Pagination from './Pagination'
import ItemSidebar from '../../components/ItemSidebar'
import { useDispatch, useSelector } from 'react-redux'
import * as action from '../../store/action'
function HomePage() {
  const { categories, prices, areas } = useSelector((state) => state.app)

  return (
    <div className="w-full flex flex-col gap-3">
      <div>
        <h1 className="text-[28px] font-bold">{text.HOME_TITLE}</h1>
        <p className="text-base text-gray-700">{text.HOME_DESCRIPTION}</p>
      </div>
      <div className="flex items-center gap-5 justify-center py-5 shadow-md">
        {location?.map((item) => (
          <ProvinceBtn image={item?.image} name={item?.name} />
        ))}
      </div>
      <div className="w-full flex gap-4">
        <div className="w-[70%]">
          <List />
          <Pagination />
        </div>
        <div className="w-[30%]">
          <ItemSidebar content={categories} title="Danh sách cho thuê" />
          <ItemSidebar
            isDouble={true}
            type="priceCode"
            content={prices}
            title="Xem theo giá"
          />
          <ItemSidebar
            isDouble={true}
            type="areaCode"
            content={areas}
            title="Xem theo diện tích"
          />
          <RelatedPost />
        </div>
      </div>
    </div>
  )
}

export default HomePage
