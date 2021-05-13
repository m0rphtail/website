import React, { useEffect, useState } from "react";
import { useColorMode, Flex, Heading, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import DarkModeSwitch from "../components/DarkModeSwitch";
import Hamburger from "./Hamburger";

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: height 0.5s, line-height 0.5s;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.15);
`;

const MobileNavigationTop = () => {
  const { colorMode } = useColorMode();
  const router = useRouter();
  const [visibility, setVisibility] = useState("hidden");

  const bgColor = {
    light: "#fff",
    dark: "#171717", // #1A202C
  };

  const navBgColor = {
    light: "gray.50",
    dark: "gray.900",
  };

  const color = {
    light: "linear(to-br, #3399ff,#ff3399)",
    dark: "linear(to-br, #33ccff,#ff55cc)",
  };

  const handleScroll = () => {
    var scrollTop = 0;
    scrollTop = scrollY;
    var x = 70;
    if (scrollTop > x) {
      setVisibility("visible");
    } else {
      setVisibility("hidden");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <StickyNav
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      maxWidth="800px"
      minWidth="356px"
      width="100%"
      bg={bgColor[colorMode]}
      as="div"
      p={2}
      px={4}
      mb={[null, 0, 8]}
      mx="auto"
      display={["flex", "none", "none"]}
      backgroundColor={navBgColor[colorMode]}
    >
      <Heading
        visibility={visibility}
        bgGradient={color[colorMode]}
        bgClip="text"
      >
        {router.pathname === "/"
          ? "Home"
          : router.pathname.slice(1, 2).toUpperCase()}
        {router.pathname.slice(2).split("/")[0]}
      </Heading>
      <Flex>
        <DarkModeSwitch />
        <Hamburger />
      </Flex>
    </StickyNav>
  );
};

export default MobileNavigationTop;
