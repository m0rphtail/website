import { Center, Heading, Text, Flex,Link} from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/color-mode";
import Head from "next/head";
import {useEffect } from 'react'
import {useRouter} from 'next/router'

const NotFound = () => {

const router=useRouter()

useEffect(()=>{
    setTimeout(()=>{
        router.push('/')
    },3000)
},[])

    const { colorMode } = useColorMode();
    const colorSecondary = {
      light: "gray.600",
      dark: "gray.400",
    };
  return (
    <>
    <Head>
        <title>Oops!</title>
    </Head>
      <Center h="500px">
        <Flex
        flexDirection='column'
        alignItems='center'
        >
          <Heading as="h1" size="4xl" mb={5}>Oops!</Heading>
          <Text fontSize="3xl" mb={5} color={colorSecondary[colorMode]}>This page doesn't exist</Text>
          <Text mb={3} color={colorSecondary[colorMode]}>You will be automatically redirected to the Homepage</Text>
          <Text color={colorSecondary[colorMode]}>or click <Link href="/"><a>here</a></Link></Text>
        </Flex>
      </Center>
    </>
  );
};

export default NotFound;
