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
          maxWidth="100%"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="100%"
            px={4}
          >
            <Heading
              mb={5}
              mt={5}
              as="h1"
              size="2xl"
              bgGradient={colorPrimary[colorMode]}
              bgClip="text"
              padding="5px"
            >
              Xtras
            </Heading>
            <Heading mt={5} mb={5}>
              Computer Specs:
            </Heading>
            <Stack minWidth="100%">
              <Flex>
                <Text fontSize="xl" fontWeight="bold">
                  Motherboard:
                </Text>
                <Spacer />
                <Text>MSI B450M PRO-VDH MAX</Text>
              </Flex>
              <Flex>
                <Text fontSize="xl" fontWeight="bold">
                  CPU:
                </Text>
                <Spacer />
                <Text>AMD Ryzen 5 3600</Text>
              </Flex>
              <Flex>
                <Text fontSize="xl" fontWeight="bold">
                  RAM:
                </Text>
                <Spacer />
                <Text>Corsair 3000MHz 16GB</Text>
              </Flex>
              <Flex>
                <Text fontSize="xl" fontWeight="bold">
                  GPU:
                </Text>
                <Spacer />
                <Text>Nvidia GTX 1650 Super</Text>
              </Flex>
              <Flex>
                <Text fontSize="xl" fontWeight="bold">
                  Power Supply:
                </Text>
                <Spacer />
                <Text>CoolerMaster MWE 450</Text>
              </Flex>
              <Flex>
                <Text fontSize="xl" fontWeight="bold">
                  CPU:
                </Text>
                <Spacer />
                <Text>AMD Ryzen 5 3600</Text>
              </Flex>
            </Stack>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Gear;
