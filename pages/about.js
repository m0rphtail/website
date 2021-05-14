import Head from "next/head";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Tag,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";

import Container from "../components/Container";

export default function Index() {
  const { colorMode } = useColorMode();
  const colorPrimary = {
    light: "linear(to-br, #3399ff,#ff3399)",
    dark: "linear(to-br, #33ccff,#ff55cc)",
  };
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };
  const colorHeader = {
    light: "blackAlpha.800",
    dark: "whiteAlpha.800",
  };
  return (
    <Container>
      <Head>
        <title>About</title>
      </Head>
      <Stack as="main" spacing={8} m="0 auto 4rem auto" maxWidth="700px">
        <Flex flexDirection="column" maxWidth="700px" px={4}>
          <Image
            alignSelf="center"
            borderRadius="full"
            boxSize="200px"
            src="/images/kc.webp"
            alt="Kshitij Chitnis"
            mb={10}
          />
          <Heading
            mb={2}
            pb={3}
            size="2xl"
            bgGradient={colorPrimary[colorMode]}
            bgClip="text"
          >
            Hi, I'm Kshitij Chitnis
            <Tag m="3" colorScheme="blue" fontSize="sm">
              (He/Him)
            </Tag>
          </Heading>
          <Text color={colorSecondary[colorMode]}>
            A developer, creator and student, currently in 3rd year studying
            Computer Science and freelancing as a CyberSecurity Auditor and
            Pentester. I'm a pantomath on the learning curve trying my best to
            get to modern polymathy. I'm a huge GNU/linux fanatic and FOSS
            evangelist. I'm also sometimes referred to as MorphTail, my alter
            ego.
          </Text>
          <Text color={colorSecondary[colorMode]}>I use Arch, btw.</Text>
          <Heading mt={6} mb={3} size="lg" color={colorHeader[colorMode]}>
            My Interests :
          </Heading>
          <SimpleGrid minChildWidth={120} spacing={2}>
            <Tag p={2} justifyContent="center" colorScheme="green">
              CyberSecurity
            </Tag>
            <Tag p={2} justifyContent="center" colorScheme="gray">
              Linux
            </Tag>
            <Tag p={2} justifyContent="center" colorScheme="orange">
              BlockChain
            </Tag>
            <Tag p={2} justifyContent="center" colorScheme="pink">
              Graphics
            </Tag>
            <Tag p={2} justifyContent="center" colorScheme="blue">
              Golang
            </Tag>
            <Tag p={2} justifyContent="center" colorScheme="red">
              Rust
            </Tag>
            <Tag p={2} justifyContent="center" colorScheme="green">
              Music
            </Tag>
            <Tag p={2} justifyContent="center" colorScheme="purple">
              Astronomy
            </Tag>
            <Tag p={2} justifyContent="center" colorScheme="green">
              Chemistry
            </Tag>
            <Tag p={2} justifyContent="center" colorScheme="teal">
              Computers
            </Tag>
            <Tag p={2} justifyContent="center" colorScheme="blue">
              Cars
            </Tag>
            <Tag p={2} justifyContent="center" colorScheme="pink">
              Generative Art
            </Tag>
            <Tag p={2} justifyContent="center" colorScheme="yellow">
              Cryptography
            </Tag>{" "}
            <Tag p={2} justifyContent="center" colorScheme="red">
              Hacking
            </Tag>
            <Tag p={2} justifyContent="center" colorScheme="orange">
              Blender
            </Tag>
          </SimpleGrid>
        </Flex>
      </Stack>
    </Container>
  );
}
