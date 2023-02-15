import React from 'react'
import PostItem from './PostItem'
import { IPost } from '../models/IPost'
import { Divider, Grid, GridItem, Text } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'
import { postListState } from '../state/RecoilAtoms'

const PostList = () => {
  const postList = useRecoilValue(postListState)

  const handleRemove = (post: IPost) => {
    console.log('Delete!')
  }

  return (
    <>
      <Divider />
      <Text fontSize="2xl" mb={2}>
        Articles
      </Text>
      <Divider mb={5} />
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {postList?.map((post) => (
          <GridItem w="100%" key={post.id}>
            <PostItem remove={handleRemove} post={post} />
          </GridItem>
        ))}
      </Grid>
      <Divider />
    </>
  )
}

export default PostList
