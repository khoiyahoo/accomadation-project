import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiGetOnePost } from '../../services'
import Swal from 'sweetalert2'
import { Carousel } from '../../components'
import anonAvatar from '../../assets/anon-avatar.png'
import icons from '../../ultils/icons'
const {
  BsFillTelephoneFill,
  AiFillMail,
  RiHeartFill,
  RiHeartLine,
  BsFacebook,
  BsMessenger,
} = icons
const DetailPost = () => {
  const { postId } = useParams()

  const [post, setPost] = useState()
  const [images, setImages] = useState()
  const [isHoverHeart, setIsHoverHeart] = useState(false)

  useEffect(() => {
    apiGetOnePost(postId)
      .then((response) => {
        if (response) {
          setPost(response?.data?.response)
          setImages(JSON.parse(response?.data?.response?.images?.image))
        }
      })
      .catch((error) => {
        error && Swal.fire('Oops !', error, 'error')
      })
  }, [postId])

  return (
    <div className="w-full flex gap-4">
      <div className="w-[60%]">
        <div className="h-[460px]">
          <Carousel images={images}></Carousel>
        </div>
        <div>
          <h5 className="font-bold text-lg">{post?.title}</h5>
          <p>{post?.address}</p>
          <h5 className="text-blue-700 font-bold text-3xl py-[14px]">
            {post?.attributes?.price}
          </h5>
        </div>
        <div>
          <h5 className="font-bold text-lg">Thông tin</h5>
          <ul>
            {post?.description &&
              JSON.parse(post?.description).map((item, index) => {
                return <li key={index}>{item}</li>
              })}
          </ul>
        </div>
      </div>
      <div className="w-[40%]">
        <div className="flex-col shadow-md p-4 rounded-md">
          <div className="flex items-center gap-4 border-b-2 pb-2 ">
            <img
              src={anonAvatar}
              alt="avatar"
              className="w-12 h-12 object-cover rounded-full border-2 border-white"
            />
            <div className="flex flex-col justify-center">
              <span className="font-semibold text-2xl">{post?.user.name}</span>
              <small>{post?.user?.phone}</small>
            </div>
          </div>
          <div className="flex-col py-4">
            <div className="border rounded-md border-blue-900 flex items-center justify-between p-2 cursor-pointer\">
              <div className="flex items-center gap-2 ">
                <BsFillTelephoneFill fontSize={'20px'} color="blue" />
                <p className="text-blue text-sm font-bold">
                  {post?.user.phone}
                </p>
              </div>
              <span className="font-bold"> Thực hiện cuộc gọi</span>
            </div>
            <div className="border rounded-md border-gray-400 flex items-center justify-center p-2 mt-4">
              <div className="flex items-center gap-2 cursor-pointer">
                <AiFillMail fontSize={'20px'} color="blue" />
                <p className="text-blue text-sm font-bold">Gửi tin nhắn</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-4 justify-between items-center px-4">
          <div className="border border-gray-400 rounded-lg p-2 flex items-center gap-2">
            <span
              onMouseEnter={() => setIsHoverHeart(true)}
              onMouseLeave={() => setIsHoverHeart(false)}
            >
              {isHoverHeart ? (
                <RiHeartFill size={26} color="red" />
              ) : (
                <RiHeartLine size={26} color="red" />
              )}
            </span>
            <span className="font-semibold">Lưu tin</span>
          </div>
          <div className="flex gap-4">
            <BsFacebook color="#3b5998" fontSize={'32px'}></BsFacebook>
            <BsMessenger color="#1c8dfb" fontSize={'32px'}></BsMessenger>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailPost
