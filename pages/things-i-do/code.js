import React from "react";
import {
  useColorMode,
  Flex,
  Stack,
  Heading,
  Button,
  Divider,
  Text,
  Spacer,
  HStack,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";
import Container from "../../components/Container";
import ProjectListFull from "../../components/ProjectFullList";
import { ImGithub } from "react-icons/im";
import Link from 'next/link'

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
      <Container>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 0 auto"
          maxWidth="700px"
          px={4}
        >
          <Heading bgGradient={colorPrimary[colorMode]} bgClip="text">
            Code
          </Heading>
          <Link
            href="https://github.com/m0rphtail?tab=repositories&q=&type=&language=&sort=stargazers"
            title="GitHub"
            isExternal
          >
            <Button
              rightIcon={<ImGithub />}
              colorScheme="gray"
              variant="outline"
            >
              View on GitHub
            </Button>
          </Link>
          <ProjectListFull />
        </Stack>
      </Container>
    </>
  );
};

export default Gear;
