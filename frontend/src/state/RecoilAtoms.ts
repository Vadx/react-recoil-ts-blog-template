import { atom } from 'recoil'
import { IPost } from '../models/IPost'
import { fetchPostData } from './RecoilSelectors'

const postListState = atom<IPost[]>({
  key: 'postListState',
  default: fetchPostData,
})

export { postListState }
