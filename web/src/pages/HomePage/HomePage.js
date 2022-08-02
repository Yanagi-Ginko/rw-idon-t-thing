import {
  LinkBox,
  LinkOverlay,
  Heading,
  Box,
  Text,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  useDisclosure,
} from '@chakra-ui/react'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import SignoutBtn from 'src/components/SignoutBtn/SignoutBtn'
const HomePage = () => {
  const { isAuthenticated } = useAuth()
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Button colorScheme="blue" onClick={onOpen}>
        Open
      </Button>
      <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
        <Box as="time" dateTime="2021-01-15 15:30:00 +0000 UTC">
          13 days ago
        </Box>
        <Heading size="md" my="2">
          <LinkOverlay href="#">
            New Year, New Beginnings: Smashing Workshops & Audits
          </LinkOverlay>
        </Heading>
        <Text mb="3">
          Catch up on what’s been cookin’ at Smashing and explore some of the
          most popular community resources.
        </Text>
        <Box as="a" color="teal.400" href="/" fontWeight="bold">
          Some inner link
        </Box>
      </LinkBox>
      {isAuthenticated ? (
        <SignoutBtn />
      ) : (
        <>
          <Link to={routes.signup()}>Sign Up</Link>
          <Link to={routes.signin()}>Sign In</Link>
        </>
      )}
    </>
  )
}

export default HomePage
