import React from "react";
import { useColorMode, Button, Flex, Stack } from "@chakra-ui/react";
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

  const bgColor = {
    light: "#fff",
    dark: "#15161a",
  };

  const navHoverBg = {
    light: "gray.100",
    dark: "gray.700",
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
      <Stack direction="row" spacing={1}>
        <NextLink href="/" passHref>
          <Button
            as="a"
            variant="ghost"
            p={[1, 2, 4]}
            _hover={{ backgroundColor: navHoverBg[colorMode] }}
          >
            Home
          </Button>
        </NextLink>
        <NextLink href="/blog" passHref>
          <Button
            as="a"
            variant="ghost"
            p={[1, 2, 4]}
            _hover={{ backgroundColor: navHoverBg[colorMode] }}
          >
            Blog
          </Button>
        </NextLink>
        <NextLink href="/things-i-do" passHref>
          <Button
            as="a"
            variant="ghost"
            p={[1, 2, 4]}
            _hover={{ backgroundColor: navHoverBg[colorMode] }}
          >
            Things I do
          </Button>
        </NextLink>
        <NextLink href="/resume" passHref>
          <Button
            as="a"
            variant="ghost"
            p={[1, 2, 4]}
            _hover={{ backgroundColor: navHoverBg[colorMode] }}
          >
            Resume
          </Button>
        </NextLink>
        <NextLink href="/X" passHref>
          <Button
            as="a"
            variant="ghost"
            p={[1, 2, 4]}
            _hover={{ backgroundColor: navHoverBg[colorMode] }}
          >
            X
          </Button>
        </NextLink>
      </Stack>
      <DarkModeSwitch />
    </StickyNav>
  );
};

export default Navigation;
