import { IPost } from './../models/IPost'
import { selector } from 'recoil'
import axios from 'axios'

const url = `https://jsonplaceholder.typicode.com/posts`

const fetchPostData = selector<IPost[]>({
  key: 'postSelector',
  get: async ({ get }) => {
    try {
      const response = await axios.get<IPost[]>(url)
      return response.data || []
    } catch (error) {
      throw error
    }
  },
})

export { fetchPostData }
