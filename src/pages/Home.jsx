import { Flex, HStack, Separator, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <Flex flexDir='column' alignItems='center' justifyContent='center' h='-webkit-fill-available'>

            <HStack gap="4">
                <Link to={'/about'}>
                    <Text p={2} rounded='lg' _hover={{ textDecor: 'underline', fontWeight: 500 }}>About Page</Text>
                </Link>
                <Separator orientation="vertical" height="4" />
                <Link to={'/head-tail'}>
                    <Text p={2} rounded='lg' _hover={{ textDecor: 'underline', fontWeight: 500 }}>Head & Tails</Text>
                </Link>
            </HStack>


        </Flex>
    )
}

export default Home