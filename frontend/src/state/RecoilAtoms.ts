import { atom } from 'recoil'
import { IPost } from '../models/IPost'
import { currentPostQuery, fetchPostData } from './RecoilSelectors'

const postListState = atom<IPost[]>({
  key: 'postListState',
  default: fetchPostData,
})

const currentPostIDState = atom<IPost[]>({
  key: 'currentPostIDState',
  default: [],
})

export { postListState, currentPostIDState }
