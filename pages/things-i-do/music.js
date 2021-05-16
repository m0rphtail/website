import React from "react";
import { useColorMode, Flex, Stack, Heading } from "@chakra-ui/react";
import Container from "../../components/Container";
import { NextSeo } from "next-seo";

const Gear = () => {
  const { colorMode } = useColorMode();
  const colorPrimary = {
    light: "linear(to-br, #3399ff,#ff3399)",
    dark: "linear(to-br, #33ccff,#ff55cc)",
  };

  return (
    <>
      <NextSeo
        title="Music - MorphTail"
        description="A personal website and resume website for Kshitij Chitnis, a developer, creator and student."
        canonical="https://morphtail.vercel.app/things-i-do/music"
        openGraph={{
          url: "https://morphtail.vercel.app",
          title: "Music - MorphTail",
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
          direction="column"
          spacing={10}
          w="100%"
          px={4}
          maxW="700px"
          alignSelf="center"
        >
          <Flex>
            <Heading bgGradient={colorPrimary[colorMode]} bgClip="text">
              Music
            </Heading>
          </Flex>
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/802861357&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/628337688&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/626351553&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </Stack>
      </Container>
    </>
  );
};

export default Gear;
