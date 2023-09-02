import React from 'react'
import CartWidget from './CartWidget'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex, Box, Spacer
} from "@chakra-ui/react"

const NavBar = () => {
  return (
    <>
      <Flex>

        <Box p='4' >
          ESTETICA
        </Box>
        <Spacer />
        <Box>
          <Menu>
            <MenuButton>
              Categorias
            </MenuButton>
            <MenuList>
              <MenuItem>Rostro</MenuItem>
              <MenuItem>Corporal</MenuItem>

            </MenuList>
          </Menu>
        </Box>
        <Spacer />
        <Box p='4'>
          <CartWidget />
        </Box>
      </Flex>


    </>

  )
}

export default NavBar