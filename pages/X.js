import React from "react";
import { useColorMode, Flex, Stack } from "@chakra-ui/react";
import Container from "../components/Container";

const Gear = () => {
  const { colorMode } = useColorMode();
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
          ></Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Gear;
