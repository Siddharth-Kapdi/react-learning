import axios from 'axios'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
})

export default api

export const getData = () => {
  return api.get('/posts', {
    params: {
      _limit: 8,
    },
  })
}

export const addData = (data) => {
  return api.post('/posts', data)
}

export const deleteData = (id) => {
  return api.delete(`/posts/${id}`)
}

export const updateData = (id, updatedData) => {
  return api.put(`/posts/${id}`, updatedData)
}
