import { Flex } from '@chakra-ui/react'
import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'

const HeaderSite: React.FC = () => {
  return (
    <Flex
      bg="white"
      height="56px"
      padding="6px 12px"
      mb="30px"
      justifyContent="space-between"
    >
      <Flex align="center" mr="2" cursor="pointer">
        <Logo />
      </Flex>
      <Flex align="center" mr={{ base: 0, md: 2 }} cursor="pointer">
        <Navbar />
      </Flex>
    </Flex>
  )
}

export default HeaderSite
