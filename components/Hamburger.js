import {
  useColorMode,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  Button,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRef } from "react";
import NextLink from "next/link";

const Hamburger = () => {
  const { colorMode } = useColorMode();
  const iconColor = {
    light: "blackAlpha.800",
    dark: "whiteAlpha.900",
  };
  const hoverIconColor = {
    light: "whiteAlpha.900",
    dark: "blackAlpha.800",
  };
  const hoverBg = {
    light: "linear(to-br, #3399ff,#ff3399)",
    dark: "linear(to-br, #33ccff,#ff55cc)",
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <IconButton
        ref={btnRef}
        aria-label="Toggle dark mode"
        icon={<HamburgerIcon />}
        onClick={onOpen}
        color={iconColor[colorMode]}
        _hover={{
          bgGradient: hoverBg[colorMode],
          color: hoverIconColor[colorMode],
        }}
        variant="ghost"
      ></IconButton>
      <Drawer
        colorScheme={hoverIconColor[colorMode]} //todo
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        color={iconColor[colorMode]}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color={iconColor[colorMode]} />
          <DrawerHeader color={iconColor[colorMode]}>Menu</DrawerHeader>
          <Stack direction="column" spacing={2}>
            <NextLink href="/" passHref>
              <Button as="a" py={5} variant="link" fontSize="3xl">
                Home
              </Button>
            </NextLink>
            <NextLink href="/about" passHref>
              <Button as="a" py={5} variant="link" fontSize="3xl">
                About
              </Button>
            </NextLink>
            <NextLink href="/blog" passHref>
              <Button as="a" py={5} variant="link" fontSize="3xl">
                Blog
              </Button>
            </NextLink>
            <NextLink href="/things-i-do" passHref>
              <Button as="a" py={5} variant="link" fontSize="3xl">
                Things I do
              </Button>
            </NextLink>
            <NextLink href="/resume" passHref>
              <Button as="a" py={5} variant="link" fontSize="3xl">
                Resume
              </Button>
            </NextLink>
            <NextLink href="/gear" passHref>
              <Button as="a" py={5} variant="link" fontSize="3xl">
                Gear
              </Button>
            </NextLink>
          </Stack>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Hamburger;
