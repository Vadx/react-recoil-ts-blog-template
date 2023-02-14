import FooterSite from '../../UI/FooterSite'
import HeaderSite from '../../UI/HeaderSite'

import { Container } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

export default function BlogLayout() {
  return (
    <>
      <HeaderSite />
      <Container maxW="container.lg">
        <Outlet />
      </Container>
      <FooterSite />
    </>
  )
}
