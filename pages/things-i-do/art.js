import React from "react";
import {
  useColorMode,
  Flex,
  Stack,
  Heading,
  Spacer,
  Image,
} from "@chakra-ui/react";
import Container from "../../components/Container";
import { NextSeo } from "next-seo";

const Gear = () => {
  const { colorMode } = useColorMode();
  const Bg = {
    light: "linear(to-br, #3399ff,#ff3399)",
    dark: "linear(to-br, #33ccff,#ff55cc)",
  };

  return (
    <>
      <NextSeo
        title="Art - MorphTail"
        description="A personal website and resume website for Kshitij Chitnis, a developer, creator and student."
        canonical="https://morphtail.vercel.app"
        openGraph={{
          url: "https://morphtail.vercel.app",
          title: "Art - MorphTail",
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
              Art
            </Heading>
            <Flex mt={5} w="100%">
              <Image w="100%" src="/images/man.webp" borderRadius="2xl" />
            </Flex>
            <Flex w="100%">
              <Image
                m={3}
                w="49%"
                src="/images/egyptian.webp"
                borderRadius="2xl"
              />
              <Flex alignItems="flex-end" direction="column" w="100%">
                <Image
                  m={3}
                  w="95%"
                  src="/images/mood.webp"
                  borderRadius="2xl"
                />
                <Spacer />
                <Image
                  m={3}
                  w="95%"
                  src="/images/windows.webp"
                  borderRadius="2xl"
                />
              </Flex>
            </Flex>
            <Flex mt={1} w="100%">
              <Image w="100%" src="/images/monster.webp" borderRadius="2xl" />
            </Flex>
            <Flex mt={5} w="100%">
              <Image w="100%" src="/images/tunnel.webp" borderRadius="2xl" />
            </Flex>
            <Flex mt={5} w="100%">
              <Flex alignItems="flex-end" direction="column" w="100%">
                <Image m={3} w="95%" src="/images/x.webp" borderRadius="2xl" />
                <Spacer />
                <Image
                  m={3}
                  w="95%"
                  src="/images/blobs.webp"
                  borderRadius="2xl"
                />
              </Flex>
              <Image w="75%" src="/images/desert1.webp" borderRadius="2xl" />
            </Flex>
            <Heading mt={5} mb={2} size="lg">
              Animations :
            </Heading>
            <Stack direction="column" w="100%" spacing={5}>
              <iframe
                src="/images/vids/falling.m4v#toolbar=0"
                width="100%"
                height="300px"
                align="stretch"
              />
              <iframe
                src="/images/vids/morphtail1.m4v#toolbar=0"
                width="100%"
                height="300px"
                align="stretch"
              />
              <iframe
                src="/images/vids/vaporwave.m4v#toolbar=0"
                width="100%"
                height="300px"
                align="stretch"
              />
              <iframe
                src="/images/vids/x.m4v#toolbar=0"
                width="100%"
                height="300px"
                align="stretch"
              />
              <iframe
                src="/images/vids/space_warp.m4v#toolbar=0"
                width="100%"
                height="300px"
                align="stretch"
              />
              <iframe
                src="/images/vids/glitch_man.m4v#toolbar=0"
                width="100%"
                height="500px"
                align="stretch"
              />
            </Stack>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Gear;
