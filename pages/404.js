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
    },5000)
},[])

    const { colorMode } = useColorMode();
    const colorPrimary = {
      light: "linear(to-br, #3399ff,#ff3399)",
      dark: "linear(to-br, #33ccff,#ff55cc)",
    };
    const colorSecondary = {
      light: "gray.600",
      dark: "gray.400",
    };
  return (
    <>
    <Head>
        <title>oof!</title>
    </Head>
      <Center h="500px">
        <Flex
        flexDirection='column'
        align='center'
        >
          <Heading bgGradient={colorPrimary[colorMode]} bgClip="text" as="h1" size="4xl" mb={5}>☹☹f!</Heading>
          <Text fontSize="3xl" mb={5} color={colorSecondary[colorMode]}>This page doesn't exist</Text>
          <Text px={10} justifySelf="center" color={colorSecondary[colorMode]}>You will be automatically</Text>
          <Text px={10} justifySelf="center" color={colorSecondary[colorMode]}>redirected to the Homepage</Text>
          <Text color={colorSecondary[colorMode]}>or <Link bgGradient={colorPrimary[colorMode]} bgClip="text" fontWeight="bold" fontSize="xl" href="/">click here</Link></Text>
        </Flex>
      </Center>
    </>
  );
};

export default NotFound;
