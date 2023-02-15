import { Button, Divider, Card } from '@chakra-ui/react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeftIcon } from '@chakra-ui/icons'
import ErrorBoundary from '../../components/ErrorBoundary'

const SinglePostPage = () => {
  const { postId } = useParams()
  const goBack = () => navigate(-1)
  const navigate = useNavigate()
  // const {
  //   data: post,
  //   isFetching,
  //   isError,
  //   // isSuccess
  // } = postAPI.useGetSinglePostQuery(postId)
  return (
    <>
      <Button variant="outline" onClick={goBack} leftIcon={<ArrowLeftIcon />}>
        Go back
      </Button>
      <Divider />
      {/* {isFetching && <>Loading...</>} */}
      {/* {isError && <>Something goes Wrong</>} */}
      <ErrorBoundary>
        {/* {post && (
          <Card>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </Card>
        )} */}
      </ErrorBoundary>
      {/* <Link to={`/editPost/${post.id}`} className='button'>
        Edit Post
      </Link> */}
    </>
  )
}

export default SinglePostPage
