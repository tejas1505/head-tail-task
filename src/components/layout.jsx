import { Box, Flex, Text } from '@chakra-ui/react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <Box h='100vh'>
        <Flex alignItems={'center'} fontSize='24px' px={5} boxShadow={'md'} h='70px'  >
            <Link to={'/'}><Text cursor='pointer'>Head & Tail App</Text></Link>
        </Flex>
        <Box h='calc(100vh - 70px)'>
            <Outlet />
        </Box>
    </Box>
  )
}

export default Layout