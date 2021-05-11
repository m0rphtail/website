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
  box-shadow: 12px 0 0 0 rgba(0, 0, 0, 0.15);
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
    light: "green.400",
    dark: "green.500",
  };

  return (
    <StickyNav
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      maxWidth="800px"
      minWidth="lg"
      width="100%"
      bg={navBgColor[colorMode]}
      as="nav"
      p={4}
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
          _hover={{ backgroundColor: navActiveBg[colorMode] }}
          _focus="green.400"
        >
          Home
        </Button>
      </NextLink>
      <NextLink href="/blog" passHref>
        <Button
          color={colorPrimary[colorMode]}
          as="a"
          variant="ghost"
          p={[1, 2, 4]}
          _hover={{ backgroundColor: navActiveBg[colorMode] }}
          _focus="green.400"
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
          _hover={{ backgroundColor: navActiveBg[colorMode] }}
          _focus="green.400"
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
          _hover={{ backgroundColor: navActiveBg[colorMode] }}
          _focus="green.400"
        >
          Resume
        </Button>
      </NextLink>
      <NextLink href="/X" passHref>
        <Button
          color={colorPrimary[colorMode]}
          as="a"
          variant="ghost"
          p={[1, 2, 4]}
          _hover={{ backgroundColor: navActiveBg[colorMode] }}
          _focus="green.400"
        >
          X
        </Button>
      </NextLink>
    </StickyNav>
  );
};

export default MobileNavigation;
