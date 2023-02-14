import { Button, ButtonGroup, Stack } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Stack direction="row" align="center">
      <ButtonGroup gap="1">
        <Button variant="ghost">
          <NavLink to="/">Home</NavLink>
        </Button>
        <Button variant="ghost">
          <NavLink to="/articles">Articles</NavLink>
        </Button>
        <Button variant="ghost">
          <NavLink to="/about">About Us</NavLink>
        </Button>
        <Button variant="ghost">
          <NavLink to="/contact-us">Contact Us</NavLink>
        </Button>
      </ButtonGroup>
    </Stack>
  )
}

export default Navbar
