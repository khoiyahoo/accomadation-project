import { useState, useEffect } from 'react'
import icons from '../ultils/icons'

const { BsChevronRight, BsChevronLeft } = icons

export default function Carousel({
  images,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? images?.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === images?.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])
  return (
    <div className="overflow-hidden relative w-full h-full">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {images?.length &&
          images?.map((item, index) => (
            <img
              src={item}
              key={index}
              alt="anh nha tro"
              className="object-cover rounded-md"
            ></img>
          ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <BsChevronLeft />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <BsChevronRight />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {images?.length &&
            images.map((_, i) => (
              <div
                className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? 'p-2' : 'bg-opacity-50'}
            `}
              />
            ))}
        </div>
      </div>
    </div>
  )
}
