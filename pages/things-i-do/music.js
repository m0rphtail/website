import React from "react";
import {
  useColorMode,
  Flex,
  Stack,
  Heading,
  Divider,
  Text,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import Container from "../../components/Container";

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
          maxWidth="100%"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="100%"
            px={4}
          >
           
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Gear;
