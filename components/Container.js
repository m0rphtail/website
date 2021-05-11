import React from "react";
import { useColorMode, Flex } from "@chakra-ui/react";

import { Footer } from "../components/Footer";
import Navigation from "../components/Navigation";
import MobileNavigation from "../components/MobileNavigation";
import MobileNavigationTop from "../components/MobileNavigationTop";

const Container = ({ children }) => {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "white",
    dark: "#15161a",
  };
  const color = {
    light: "black",
    dark: "white",
  };

  return (
    <>
      <Navigation />
      <MobileNavigationTop page="Home" />
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        px={[0, 4, 4]}
        mt={(0, 8, 8)}
        minWidth="lg"
        minWidth="lg"
      >
        {children}
        <Footer />
      </Flex>
      <MobileNavigation />
    </>
  );
};

export default Container;
