import React from "react";
import {
  useColorMode,
  Flex,
  Stack,
  Heading,
  Text,
  Spacer,
  Link,
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
        description="A personal portfolio and resume website for Kshitij Chitnis, a developer, creator and student."
        canonical="https://morphtail.vercel.app/gear"
        openGraph={{
          url: "https://morphtail.vercel.app",
          title: "Gear - MorphTail",
          description:
            "A personal portfolio and resume website for Kshitij Chitnis, a developer, creator and student.",
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
              day to day basis. If you purchase any items through the links below I may earn a small commission.
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
              <Link href="https://archlinux.org/" isExternal="true">
                <Text color={colorSecondary[colorMode]}>Arch Linux</Text>
              </Link>
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
              <Link href="https://amzn.to/3yg1lIx" isExternal="true">
                <Text color={colorSecondary[colorMode]}>MS-7A38 8.0</Text>
              </Link>
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
              <Link href="https://amzn.to/33RrTBV" isExternal="true">
                <Text color={colorSecondary[colorMode]}>AMD Ryzen 5 3600</Text>
              </Link>
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
              <Link href="https://amzn.to/3ftLNrQ" isExternal="true">
                <Text color={colorSecondary[colorMode]}>
                  16GB Corsair 3000MHz
                </Text>
              </Link>
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
              <Link href="https://amzn.to/2Rkc1oV" isExternal="true">
                <Text color={colorSecondary[colorMode]}>
                  Nvidia GTX 1650 Super
                </Text>
              </Link>
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
              <Link href="https://amzn.to/3hAITEA" isExternal="true">
                <Text color={colorSecondary[colorMode]}>Dell D2015H</Text>
              </Link>
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
              <Link href="https://amzn.to/3byNu6a" isExternal="true">
                <Text color={colorSecondary[colorMode]}>Logitech K380</Text>
              </Link>
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
              <Link href="https://amzn.to/3fptxQt" isExternal="true">
                <Text color={colorSecondary[colorMode]}>
                  Logitech Pebble M350
                </Text>
              </Link>
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
              <Link href="https://code.visualstudio.com/" isExternal="true">
                <Text color={colorSecondary[colorMode]}>VS Code</Text>
              </Link>
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
              <Link href="https://www.postman.com/" isExternal="true">
                <Text color={colorSecondary[colorMode]}>Postman</Text>
              </Link>
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
              <Link href="https://kali.org/" isExternal="true">
                <Text color={colorSecondary[colorMode]}>Kali Linux</Text>
              </Link>
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
              <Link href="https://www.google.com/chrome/index.html" isExternal="true">
                <Text color={colorSecondary[colorMode]}>Google Chrome</Text>
              </Link>
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
              <Link href="https://obsproject.com/" isExternal="true">
                <Text color={colorSecondary[colorMode]}>OBS </Text>
              </Link>
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
              <Link href="https://kdenlive.org/en/" isExternal="true">
                <Text color={colorSecondary[colorMode]}>Kdenlive</Text>
              </Link>
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
              <Link href="https://github.com/alacritty/alacritty" isExternal="true">
                <Text color={colorSecondary[colorMode]}>Alacritty</Text>
              </Link>
            </Stack>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Gear;
