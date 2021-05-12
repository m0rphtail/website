import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, Grid, GridItem, Heading, Stack } from "@chakra-ui/layout";
import Head from "next/head";
import NextLink from "next/link";
import Container from "../../components/Container";

export default function Index() {
  const { colorMode } = useColorMode();
  const colorPrimary = {
    light: "whiteAlpha.900",
    dark: "blackAlpha.800",
  };
  const Bg = {
    light: "linear(to-br, #3399ff,#ff3399)",
    dark: "linear(to-br, #33ccff,#ff55cc)",
  };

  return (
    <>
      <Container>
        <Head>
          <title>MorphTail | X</title>
        </Head>

        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 0 auto"
          maxWidth="700px"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            px={4}
            minH="100vh"
          >
            <Heading
              letterSpacing="tight"
              mb={4}
              as="h1"
              size="2xl"
              bgGradient={Bg[colorMode]}
              bgClip="text"
              padding="5px"
            >
              Things I do
            </Heading>
            <Grid
              h="lg"
              w="md"
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(8, 1fr)"
              gap={4}
              mt={5}
            >
              <NextLink href="things-i-do/code">
                <GridItem
                  maxW="lg"
                  as="button"
                  borderRadius="lg"
                  colSpan={8}
                  rowSpan={1}
                  color={colorPrimary[colorMode]}
                  bgGradient={Bg[colorMode]}
                  children={<Heading>Code</Heading>}
                />
              </NextLink>
              <GridItem
                as="button"
                borderRadius="lg"
                colSpan={4}
                rowSpan={1}
                color={colorPrimary[colorMode]}
                bgGradient={Bg[colorMode]}
                children={<Heading>Art</Heading>}
              />
              <GridItem
                as="button"
                borderRadius="lg"
                colSpan={4}
                rowSpan={1}
                color={colorPrimary[colorMode]}
                bgGradient={Bg[colorMode]}
                children={<Heading>Music</Heading>}
              />
            </Grid>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}
