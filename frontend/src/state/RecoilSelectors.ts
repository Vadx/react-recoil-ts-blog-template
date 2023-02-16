import { IPost } from './../models/IPost'
import { selector, selectorFamily } from 'recoil'
import axios from 'axios'
// import { currentPostIDState } from './RecoilAtoms'
// import useFetch from '../hooks/useFetch's

const url = `https://jsonplaceholder.typicode.com`

const fetchPostData = selector<IPost[]>({
  key: 'postSelector',
  get: async ({ get }) => {
    try {
      const response = await axios.get<IPost[]>(`${url}/posts`)
      return response.data || []
    } catch (error) {
      throw error
    }
  },
})

const currentPostQuery = selectorFamily<
  IPost[],
  { postId: string | undefined }
>({
  key: 'currentPost',
  get: (postId) => async () => {
    try {
      const response = await axios.get(`${url}/posts/` + { postId })
      return response.data || []
    } catch (error) {
      throw error
    }
  },
})

export { fetchPostData, currentPostQuery }
