import { Box, Button, Card, Container, Divider } from '@chakra-ui/react'
import { useRouteError, useNavigate } from 'react-router-dom'
import { ArrowLeftIcon } from '@chakra-ui/icons'

const ErrorRouterElement = () => {
  const goBack = () => navigate(-1)
  const navigate = useNavigate()
  let error = useRouteError()
  console.error('🙉 ErrorRouterElement:', error)
  return (
    <Container>
      <Card p={5} mt={5}>
        <Button variant="outline" onClick={goBack} leftIcon={<ArrowLeftIcon />}>
          Go back
        </Button>
        <Divider mt={8} />
        <Box textAlign="center" pt={5} pb={6} fontSize={26}>
          Something goes Wrong...
        </Box>
      </Card>
    </Container>
  )
}

export default ErrorRouterElement
