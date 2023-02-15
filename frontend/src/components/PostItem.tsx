import { IPost } from '../models/IPost'
import { Link } from 'react-router-dom'

import {
  Box,
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  Image,
} from '@chakra-ui/react'

export interface PostItemProps {
  post: IPost
  remove: (post: IPost) => void
}

const PostItem = ({ post, remove }: PostItemProps) => {
  return (
    <>
      <Card>
        <CardBody>
          <Link to={`/articles/${post.id}`}>
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Img"
              borderRadius="lg"
            />
          </Link>
          <Stack mt="6" spacing="3">
            <Heading size="md">{post.title}</Heading>
            <Text fontSize="small">{post.body.substring(0, 100)}</Text>
          </Stack>
        </CardBody>
        <Box
          textAlign="right"
          p={3}
          color="blue.600"
          fontWeight={500}
          fontSize="15"
        >
          <Link to={`/articles/${post.id}`}>Read more...</Link>
        </Box>
      </Card>
    </>
  )
}

export default PostItem
