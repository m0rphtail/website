import React from "react";
import { useColorMode, Button, Flex, Stack, ButtonGroup } from "@chakra-ui/react";
import styled from "@emotion/styled";
import NextLink from "next/link";
import { useRouter } from "next/router";

import DarkModeSwitch from "../components/DarkModeSwitch";

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: height 0.5s, line-height 0.5s;
`;

const Navigation = () => {
  const { colorMode } = useColorMode();
  const router = useRouter();
  const colorPrimary = {
    light: "blackAlpha.800",
    dark: "whiteAlpha.900",
  };
  const bgColor = {
    light: "#fff",
    dark: "#15161a",
  };

  const navHoverBg = {
    light: "linear(to-br, #3399ff,#ff3399)",
    dark: "linear(to-br, #33ccff,#ff55cc)",
  };
  const hoverText = {
    light: "whiteAlpha.900",
    dark: "blackAlpha.800",
  };

  return (
    <StickyNav
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      maxWidth="800px"
      minWidth="356px"
      width="100%"
      bg={bgColor[colorMode]}
      as="nav"
      px={6}
      py={2}
      mt={8}
      mb={[null, 0, 8]}
      mx="auto"
      display={["none", "flex", "flex"]}
    >
      <ButtonGroup variant="ghost">
        <NextLink href="/" passHref>
          <Button
            color={colorPrimary[colorMode]}
            as="a"
            p={[1, 2, 4]}
            _hover={{
              bgGradient: navHoverBg[colorMode],
              color: hoverText[colorMode],
            }}
          >
            Home
          </Button>
        </NextLink>
        <NextLink href="/blog" passHref>
          <Button
            color={colorPrimary[colorMode]}
            as="a"
            p={[1, 2, 4]}
            _hover={{
              bgGradient: navHoverBg[colorMode],
              color: hoverText[colorMode],
            }}
            _
          >
            Blog
          </Button>
        </NextLink>
        <NextLink href="/things-i-do" passHref>
          <Button
            color={colorPrimary[colorMode]}
            as="a"
            p={[1, 2, 4]}
            _hover={{
              bgGradient: navHoverBg[colorMode],
              color: hoverText[colorMode],
            }}
          >
            Things I do
          </Button>
        </NextLink>
        <NextLink href="/resume" passHref>
          <Button
            color={colorPrimary[colorMode]}
            as="a"
            p={[1, 2, 4]}
            _hover={{
              bgGradient: navHoverBg[colorMode],
              color: hoverText[colorMode],
            }}
          >
            Resume
          </Button>
        </NextLink>
        <NextLink href="/X" passHref>
          <Button
            color={colorPrimary[colorMode]}
            as="a"
            p={[1, 2, 4]}
            _hover={{
              bgGradient: navHoverBg[colorMode],
              color: hoverText[colorMode],
            }}
          >
            X
          </Button>
        </NextLink>
      </ButtonGroup>
      <DarkModeSwitch />
    </StickyNav>
  );
};

export default Navigation;
