import React from "react";
import { useColorMode, Button, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import NextLink from "next/link";
import { useRouter } from "next/router";

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  bottom: 0;
  left: 0;
  box-shadow: 12px 12px 12px 12px rgba(0, 0, 0, 0.15);
`;

const MobileNavigation = () => {
  const { colorMode } = useColorMode();
  const router = useRouter();
  const colorPrimary = {
    light: "blackAlpha.800",
    dark: "whiteAlpha.900",
  };

  const navBgColor = {
    light: "gray.50",
    dark: "gray.900",
  };

  const navActiveBg = {
    light: "linear(to-br, #3399ff,#ff3399)",
    dark: "linear(to-br, #33ccff,#ff55cc)",
  };

  return (
    <StickyNav
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      maxWidth="800px"
      minWidth="320px"
      width="100%"
      bg={navBgColor[colorMode]}
      as="nav"
      p={2}
      mt={0}
      mx="auto"
      display={["flex", "none", "none"]}
    >
      <NextLink href="/" passHref>
        <Button
          color={colorPrimary[colorMode]}
          as="a"
          variant="ghost"
          p={[1, 2, 4]}
          _hover={{ bgGradient: navActiveBg[colorMode] }}
        >
          Home
        </Button>
      </NextLink>
      <NextLink href="/about" passHref>
        <Button
          color={colorPrimary[colorMode]}
          as="a"
          variant="ghost"
          p={[1, 2, 4]}
          _hover={{ bgGradient: navActiveBg[colorMode] }}
        >
          About
        </Button>
      </NextLink>
      <NextLink href="/blog" passHref>
        <Button
          color={colorPrimary[colorMode]}
          as="a"
          variant="ghost"
          p={[1, 2, 4]}
          _hover={{ bgGradient: navActiveBg[colorMode] }}
        >
          Blog
        </Button>
      </NextLink>
      <NextLink href="/things-i-do" passHref>
        <Button
          color={colorPrimary[colorMode]}
          as="a"
          variant="ghost"
          p={[1, 2, 4]}
          _hover={{ bgGradient: navActiveBg[colorMode] }}
        >
          Things I do
        </Button>
      </NextLink>
      <NextLink href="/resume" passHref>
        <Button
          color={colorPrimary[colorMode]}
          as="a"
          variant="ghost"
          p={[1, 2, 4]}
          _hover={{ bgGradient: navActiveBg[colorMode] }}
        >
          Resume
        </Button>
      </NextLink>
      <NextLink href="/gear" passHref>
        <Button
          color={colorPrimary[colorMode]}
          as="a"
          variant="ghost"
          p={[1, 2, 4]}
          _hover={{ bgGradient: navActiveBg[colorMode] }}
        >
          Gear
        </Button>
      </NextLink>
    </StickyNav>
  );
};

export default MobileNavigation;
