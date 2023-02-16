import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { HamburgerIcon } from '@chakra-ui/icons'

const Navbar = () => {
  return (
    <Stack direction="row" align="center">
      <ButtonGroup gap="1" display={{ base: 'none', md: 'flex' }}>
        <Button as={NavLink} variant="ghost" to="/">
          Home
        </Button>
        <Button as={NavLink} to="/articles" variant="ghost">
          <NavLink to="/articles">Articles</NavLink>
        </Button>
        <Button as={NavLink} to="/about" variant="ghost">
          About Us
        </Button>
        <Button as={NavLink} to="/contact-us" variant="ghost">
          Contact Us
        </Button>
      </ButtonGroup>
      <Box display={{ base: 'flex', md: 'none' }}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon boxSize={5} />}
            variant="outline"
          />
          <MenuList>
            <MenuItem as={NavLink} to="/">
              Home
            </MenuItem>
            <MenuItem as={NavLink} to="/articles">
              Articles
            </MenuItem>
            <MenuItem as={NavLink} to="/about">
              About Us
            </MenuItem>
            <MenuItem as={NavLink} to="/contact-us">
              Contact Us
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Stack>
  )
}

export default Navbar
