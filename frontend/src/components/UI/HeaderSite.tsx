import { Flex } from '@chakra-ui/react'
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo'

// const items: MenuProps['items'] = [
//   { label: <NavLink to="/">Home</NavLink>, key: '/' },
//   { label: <NavLink to="/articles">Articles</NavLink>, key: '/articles' },
//   { label: <NavLink to="/about">About Us</NavLink>, key: '/about' },
//   { label: <NavLink to="/contact-us">Contact Us</NavLink>, key: '/contact-us' },
// ]

const HeaderSite: React.FC = () => {
  const location = useLocation()
  return (
    <Flex
      bg="white"
      height="44px"
      padding="6px 12px"
      justifyContent={{ md: 'space-between' }}
    >
      <Flex
        align="center"
        width={{ base: '40px', md: 'auto' }}
        mr={{ base: 0, md: 2 }}
        cursor="pointer"
      >
        <Logo />
      </Flex>
    </Flex>
  )
}

export default HeaderSite
