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
          <title>MorphTail | X</title>
        </Head>
        <VStack>
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
          >
          
          </Flex>
        </VStack>
      </Container>
    </>
  );
}
