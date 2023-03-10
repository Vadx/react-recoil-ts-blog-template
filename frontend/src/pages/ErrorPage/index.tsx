import { Button, Flex, Heading, Image } from '@chakra-ui/react'
import {
  isRouteErrorResponse,
  useRouteError,
  useNavigate,
} from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  const navigate = useNavigate()
  const goHome = () => navigate('/', { replace: true })

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>{error.status}</h1>
        <h2>{error.data.message || 'Something goes wrong!'}</h2>
        <h3>{error.data.reason}</h3>
      </div>
    )
  }

  return (
    <Flex>
      <Heading size="xs" textTransform="uppercase">
        Something goes wrong!
      </Heading>
      <Image src="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg" />
      <Button variant="solid" size="lg" onClick={goHome}>
        Back to Home Page
      </Button>
    </Flex>
  )
}

export default ErrorPage
