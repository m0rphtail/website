import React from "react";
import {
  useColorMode,
  Flex,
  Stack,
  Heading,
  Divider,
  Text,
  Button,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Container from "../components/Container";
import { NextSeo } from "next-seo";

const Gear = () => {
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
      <NextSeo
        title="Resume - MorphTail"
        description="A personal portfolio and resume website for Kshitij Chitnis, a developer, creator and student."
        canonical="https://morphtail.vercel.app/resume"
        openGraph={{
          url: "https://morphtail.vercel.app",
          title: "Resume - MorphTail",
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
              Resume
            </Heading>{" "}
            <Divider minW="100%" mb={5} />
            <Flex mt={5} w="100%" h="100px">
              <NextLink href="https://raw.githubusercontent.com/m0rphtail/website/main/public/Kshitij_Chitnis_resume.pdf">
                <Button
                  w="100%"
                  h="100%"
                  bgGradient={Bg[colorMode]}
                  _hover={{ bgGradient: hoverBg[colorMode] }}
                  animation=""
                >
                  <Heading color={colorPrimary[colorMode]}>Download</Heading>
                </Button>
              </NextLink>
            </Flex>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Gear;
