import React from "react";
import {
  useColorMode,
  Flex,
  Stack,
  Heading,
  Divider,
  Text,
} from "@chakra-ui/react";
import Container from "../components/Container";

const Gear = () => {
  const { colorMode } = useColorMode();
  const colorPrimary = {
    light: "linear(to-br, #3399ff,#ff3399)",
    dark: "linear(to-br, #33ccff,#ff55cc)",
  };
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };

  return (
    <>
      <Container>
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
              mb={2}
              as="h1"
              size="2xl"
              bgGradient={colorPrimary[colorMode]}
              bgClip="text"
              padding="5px"
            >
              Resume
            </Heading>
            <Divider maxW="100%" mb={10} />
            <Text color={colorSecondary[colorMode]}>
              Haven't made it yet, Check back later 🙂
            </Text>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Gear;
