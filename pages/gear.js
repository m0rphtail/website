import React from "react";
import {
  useColorMode,
  Flex,
  Stack,
  Heading,
  Text,
  Spacer,
} from "@chakra-ui/react";
import Container from "../components/Container";
import { NextSeo } from "next-seo";

const Gear = () => {
  const { colorMode } = useColorMode();
  const colorPrimary = {
    light: "linear(to-br, #3399ff,#ff3399)",
    dark: "linear(to-br, #33ccff,#ff55cc)",
  };
  const colorHeading = {
    light: "blackAlpha.800",
    dark: "whiteAlpha.900",
  };
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };

  return (
    <>
      <NextSeo
        title="Gear - MorphTail"
        description="A personal website and resume website for Kshitij Chitnis, a developer, creator and student."
        canonical="https://morphtail.vercel.app"
        openGraph={{
          url: "https://morphtail.vercel.app",
          title: "Gear - MorphTail",
          description:
            "A personal website and resume website for Kshitij Chitnis, a developer, creator and student.",
          site_name: "MorphTail",
        }}
        twitter={{
          handle: "@kshitijchitnis",
          site: "@kshitijchitnis",
          cardType: "summary_large_image",
        }}
      />
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
              Gear
            </Heading>
            <Text color={colorSecondary[colorMode]}>
              Productivity is directly associated with selecting the right
              software and hardware. Here is a list of all the gear I use on a
              day to day basis.
            </Text>
            <Heading mt={5} mb={2} color={colorHeading[colorMode]} size="lg">
              Computer Specs:
            </Heading>
            <Stack
              flexDirection="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              minWidth="100%"
              maxWidth="700px"
            >
              <Text color={colorSecondary[colorMode]} fontSize="xl">
                OS :
              </Text>
              <Spacer />
              <Text color={colorSecondary[colorMode]}>Arch Linux</Text>
            </Stack>
            <Stack
              flexDirection="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              minWidth="100%"
              maxWidth="700px"
            >
              <Text color={colorSecondary[colorMode]} fontSize="xl">
                MotherBoard :
              </Text>
              <Spacer />
              <Text color={colorSecondary[colorMode]}>MS-7A38 8.0</Text>
            </Stack>
            <Stack
              flexDirection="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              minWidth="100%"
              maxWidth="700px"
            >
              <Text color={colorSecondary[colorMode]} fontSize="xl">
                CPU :
              </Text>
              <Spacer />
              <Text color={colorSecondary[colorMode]}>AMD Ryzen 5 3600</Text>
            </Stack>
            <Stack
              flexDirection="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              minWidth="100%"
              maxWidth="700px"
            >
              <Text color={colorSecondary[colorMode]} fontSize="xl">
                RAM :
              </Text>
              <Spacer />
              <Text color={colorSecondary[colorMode]}>
                16GB Corsair 3000MHz
              </Text>
            </Stack>
            <Stack
              flexDirection="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              minWidth="100%"
              maxWidth="700px"
            >
              <Text color={colorSecondary[colorMode]} fontSize="xl">
                GPU :
              </Text>
              <Spacer />
              <Text color={colorSecondary[colorMode]}>
                Nvidia GTX 1650 Super
              </Text>
            </Stack>
            <Stack
              flexDirection="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              minWidth="100%"
              maxWidth="700px"
            >
              <Text color={colorSecondary[colorMode]} fontSize="xl">
                Monitors :
              </Text>
              <Spacer />
              <Text color={colorSecondary[colorMode]}>Dell D2015H</Text>
            </Stack>
            <Stack
              flexDirection="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              minWidth="100%"
              maxWidth="700px"
            >
              <Text color={colorSecondary[colorMode]} fontSize="xl">
                KeyBoard :
              </Text>
              <Spacer />
              <Text color={colorSecondary[colorMode]}>Logitech K380</Text>
            </Stack>
            <Stack
              flexDirection="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              minWidth="100%"
              maxWidth="700px"
            >
              <Text color={colorSecondary[colorMode]} fontSize="xl">
                Mouse :
              </Text>
              <Spacer />
              <Text color={colorSecondary[colorMode]}>
                Logitech Pebble M350
              </Text>
            </Stack>
            <Heading mt={5} mb={2} color={colorHeading[colorMode]} size="lg">
              Software :
            </Heading>
            <Stack
              flexDirection="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              minWidth="100%"
              maxWidth="700px"
            >
              <Text color={colorSecondary[colorMode]} fontSize="xl">
                Code Editor :
              </Text>
              <Spacer />
              <Text color={colorSecondary[colorMode]}>VS Code</Text>
            </Stack>
            <Stack
              flexDirection="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              minWidth="100%"
              maxWidth="700px"
            >
              <Text color={colorSecondary[colorMode]} fontSize="xl">
                API Testing :
              </Text>
              <Spacer />
              <Text color={colorSecondary[colorMode]}>Postman</Text>
            </Stack>
            <Stack
              flexDirection="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              minWidth="100%"
              maxWidth="700px"
            >
              <Text color={colorSecondary[colorMode]} fontSize="xl">
                Pentesting :
              </Text>
              <Spacer />
              <Text color={colorSecondary[colorMode]}>Kali Linux</Text>
            </Stack>
            <Stack
              flexDirection="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              minWidth="100%"
              maxWidth="700px"
            >
              <Text color={colorSecondary[colorMode]} fontSize="xl">
                Browser :
              </Text>
              <Spacer />
              <Text color={colorSecondary[colorMode]}>Google Chrome</Text>
            </Stack>
            <Stack
              flexDirection="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              minWidth="100%"
              maxWidth="700px"
            >
              <Text color={colorSecondary[colorMode]} fontSize="xl">
                Screen Recorder :
              </Text>
              <Spacer />
              <Text color={colorSecondary[colorMode]}>OBS </Text>
            </Stack>
            <Stack
              flexDirection="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              minWidth="100%"
              maxWidth="700px"
            >
              <Text color={colorSecondary[colorMode]} fontSize="xl">
                Video Editor :
              </Text>
              <Spacer />
              <Text color={colorSecondary[colorMode]}>
                Kdenlive | DaVinci Resolve
              </Text>
            </Stack>
            <Stack
              flexDirection="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              minWidth="100%"
              maxWidth="700px"
            >
              <Text color={colorSecondary[colorMode]} fontSize="xl">
                Terminal :
              </Text>
              <Spacer />
              <Text color={colorSecondary[colorMode]}>Alacritty</Text>
            </Stack>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Gear;
