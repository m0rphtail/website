import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, Heading, Text, VStack } from "@chakra-ui/layout";
import Head from "next/head";
import Container from "../components/Container";

export default function Index() {
  const { colorMode } = useColorMode();
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
        <VStack>
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <Heading mb={5}>Hi, I'm Kshitij Chitnis</Heading>
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
        </VStack>
      </Container>
    </>
  );
}
