import React from 'react'
import { SearchItem } from '../../components'
import icons from '../../ultils/icons'
const {
  BsChevronRight,
  HiOutlineLocationMarker,
  TbReportMoney,
  RiCrop2Line,
  MdOutlineHouseSiding,
  FiSearch,
} = icons

const Search = () => {
  return (
    <div className="p-[10px] w-3/5 my-3 bg-[#febb02] rounded-lg flex-col lg:flex-row flex items-center justify-around gap-2">
      <span className="cursor-pointer flex-1">
        <SearchItem
          IconBefore={<MdOutlineHouseSiding />}
          fontWeight
          IconAfter={<BsChevronRight color="rgb(156, 163, 175)" />}
          text={'category'}
          defaultText={'Tìm tất cả'}
        />
      </span>
      <span className="cursor-pointer flex-1">
        <SearchItem
          IconBefore={<HiOutlineLocationMarker />}
          IconAfter={<BsChevronRight color="rgb(156, 163, 175)" />}
          text={'queries.province'}
          defaultText={'Toàn quốc'}
        />
      </span>
      <span className="cursor-pointer flex-1">
        <SearchItem
          IconBefore={<TbReportMoney />}
          IconAfter={<BsChevronRight color="rgb(156, 163, 175)" />}
          text={'queries.price'}
          defaultText={'Chọn giá'}
        />
      </span>
      <span className="cursor-pointer flex-1">
        <SearchItem
          IconBefore={<RiCrop2Line />}
          IconAfter={<BsChevronRight color="rgb(156, 163, 175)" />}
          text={'queries.area'}
          defaultText={'Chọn diện tích'}
        />
      </span>
      <button
        type="button"
        className="outline-none py-2 px-4 flex-1 bg-secondary1 text-[13.3px] flex items-center justify-center gap-2 text-white font-medium"
      >
        <FiSearch />
        Tìm kiếm
      </button>
    </div>
  )
}

export default Search
