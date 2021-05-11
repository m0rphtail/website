import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, Heading, Text, Stack } from "@chakra-ui/layout";
import Head from "next/head";
import Container from "../components/Container";

export default function Index() {
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
      <Container>
        <Head>
          <title>MorphTail | Home</title>
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
            <Heading
              mb={5}
              as="h1"
              size="2xl"
              bgGradient={colorPrimary[colorMode]}
              bgClip="text"
              padding="5px"
            >
              Hi, I'm Kshitij Chitnis
            </Heading>
            <Text mb={10} color={colorSecondary[colorMode]}>
              dfdfddfdfdfdfdf dfdfdfdfd fdfdfdfdfd fdfdfdfd
              fdfdfddfdfdfddfdfddfdfdfdfdf dfdfdfdfd fdfdfdfddfdfdfdfdf
              dfdfdfdfd fdfdfdfdfddfdfdfdfdf dfdfdfdfd fdfdfdfdfddfdfdfdfdf
              dfdfdfdfd fdfdfdfdfddfdfdfdfdf dfdfdfdfd fdfdfdfdfddfdfdfdfdf
              dfddfdfddfdfdfdfdf dfdfdfdfddfdfdfdfdf dfdfdfdfd fdfdfdfdfd
              fdfdfdfd fdfdfddfdfdfddfdfd fdfdfdfdfd fdfdfdfd
              fdfdfddfdfdfdfdfdfd fdfdfdfdfd fdfdfdfd fdfdfddfdfdfddfdfd
              fdfdfdfd fdfdfddfdfdfddfdfd fdfdfdfd fdfdfddfdfdfddfdfd fdfdfdfd
              fdfdfddfdfdfddfdfd fdfdfdfd fdfdfddfdfdfddfdfdfd fdfdfdfd
              fdfdfddfdfdfd
            </Text>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}
