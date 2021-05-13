import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  Box,
  Spacer,
} from "@chakra-ui/layout";
import Head from "next/head";
import NextLink from "next/link";
import Container from "../../components/Container";

export default function Index() {
  const { colorMode } = useColorMode();
  const colorPrimary = {
    dark: "blackAlpha.800",
    light: "whiteAlpha.900",
  };
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };
  const Bg = {
    light: "linear(to-br, #3399ff,#ff3399)",
    dark: "linear(to-br, #33ccff,#ff55cc)",
  };
  const hoverBg = {
    light: "linear(to-bl,#ff3399, #3399ff)",
    dark: "linear(to-bl,#ff55cc, #33ccff,)",
  };

  return (
    <>
      <Container>
        <Head>
          <title>MorphTail | X</title>
        </Head>

        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 0 auto"
          maxWidth="700px"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            px={4}
          >
            <Heading
              letterSpacing="tight"
              mb={4}
              as="h1"
              size="2xl"
              bgGradient={Bg[colorMode]}
              bgClip="text"
              padding="5px"
            >
              Things I do
            </Heading>
            <Text color={colorSecondary[colorMode]}>
              There are tonnes of things that I am curious about and keep
              trying them out and learning various new things, but these are the
              things I spend most of my time on.
            </Text>
            <Flex mt={5} w="100%" h="200px">
              <NextLink href="/things-i-do/code">
                <Button
                  w="100%"
                  h="100%"
                  bgGradient={Bg[colorMode]}
                  _hover={{ bgGradient: hoverBg[colorMode]}}
                  animation=""
                >
                  <Heading color={colorPrimary[colorMode]}>Code</Heading>
                </Button>
              </NextLink>
            </Flex>
            <Flex mt={3} w="100%" h="200px">
              <NextLink href="/things-i-do/art">
                <Button
                  w="49%"
                  h="100%"
                  bgGradient={Bg[colorMode]}
                  _hover={{ bgGradient: hoverBg[colorMode] }}
                >
                  <Heading color={colorPrimary[colorMode]}>Art</Heading>
                </Button>
              </NextLink>
              <Spacer />
              <NextLink href="/things-i-do/music">
                <Button
                  w="49%"
                  h="100%"
                  bgGradient={Bg[colorMode]}
                  _hover={{ bgGradient: hoverBg[colorMode] }}
                >
                  <Heading color={colorPrimary[colorMode]}>Music</Heading>
                </Button>
              </NextLink>
            </Flex>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}
