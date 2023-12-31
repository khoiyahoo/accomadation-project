import axiosConfig from '../axiosConfig'

export const apiGetPosts = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: 'get',
        url: '/api/v1/post/all',
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })

export const apiGetPostsLimit = (query) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: 'get',
        url: `/api/v1/post/limit`,
        params: query,
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })

export const apiGetNewPosts = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: 'get',
        url: `/api/v1/post/new-post`,
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })

export const apiGetOnePost = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: 'get',
        url: `/api/v1/post/${id}`,
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })

export const apiUploadImages = (images) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: 'post',
        url: `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload/`,
        data: images,
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })

export const apiCreateNewPost = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: 'post',
        url: `/api/v1/post/create-new`,
        data: data,
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })
