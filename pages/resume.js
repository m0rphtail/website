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
import { NextSeo } from "next-seo";

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
      <NextSeo
        title="Resume - MorphTail"
        description="A personal website and resume website for Kshitij Chitnis, a developer, creator and student."
        canonical="https://morphtail.vercel.app"
        openGraph={{
          url: "https://morphtail.vercel.app",
          title: "Resume - MorphTail",
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
