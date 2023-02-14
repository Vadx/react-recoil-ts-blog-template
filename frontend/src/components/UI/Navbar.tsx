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
      <Box display={{ base: 'flex', md: 'none' }}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon boxSize={5} />}
            variant="outline"
          />
          <MenuList>
            <MenuItem>
              <NavLink to="/">Home</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="/articles">Articles</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="/about">About Us</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="/contact-us">Contact Us</NavLink>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Stack>
  )
}

export default Navbar
