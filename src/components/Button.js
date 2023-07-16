import React, { memo } from 'react'

function Button({ text, textColor, bgColor, IcAfter, onClick, fullWidth }) {
  return (
    <button
      className={`p-2 ${textColor} ${bgColor} ${
        fullWidth && 'w-full'
      } outlined-none rounded-md hover:underline flex items-center justify-center gap-1`}
      onClick={onClick}
    >
      {text}{' '}
      {IcAfter && (
        <span>
          <IcAfter />
        </span>
      )}
    </button>
  )
}

export default memo(Button)
