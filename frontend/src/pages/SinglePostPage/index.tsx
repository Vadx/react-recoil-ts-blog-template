import { Button, Divider, Card } from '@chakra-ui/react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeftIcon } from '@chakra-ui/icons'
// import { useRecoilValue } from 'recoil'
// import { currentPostQuery } from '../../state/RecoilSelectors'
import React from 'react'
// import { currentPostIDState } from '../../state/RecoilAtoms'

const SinglePostPage = () => {
  const { postId } = useParams()
  const goBack = () => navigate(-1)
  const navigate = useNavigate()
  // const post = useRecoilValue(currentPostQuery({ postId }))
  return (
    <>
      <Button variant="outline" onClick={goBack} leftIcon={<ArrowLeftIcon />}>
        Go back
      </Button>
      <Divider />
      <React.Suspense fallback={<div>Loading...</div>}>
        {/* {post && (
          <Card>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            Hello!
          </Card>
        )} */}
      </React.Suspense>
      {/* <Link to={`/editPost/${post.id}`} className='button'>
        Edit Post
      </Link> */}
    </>
  )
}

export default SinglePostPage
