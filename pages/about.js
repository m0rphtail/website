import Head from 'next/head'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack
} from '@chakra-ui/react'

import Container from '../components/Container'

export default function Index() {
  const { colorMode } = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          px={4}
        >
          <Heading mb={2}>Hi, I'm Kshitij Chitnis</Heading>
          <Text color={colorSecondary[colorMode]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ante nunc, finibus sit amet purus quis, congue vulputate ipsum. Phasellus lobortis bibendum orci, quis imperdiet lectus imperdiet porttitor.</Text>
        </Flex>
      </Stack>
    </Container>
  )
}