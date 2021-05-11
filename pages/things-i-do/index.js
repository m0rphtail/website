import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, Grid, GridItem, Heading, Text, VStack } from "@chakra-ui/layout";
import Head from "next/head";
import Container from "../../components/Container";

export default function Index() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.300",
    dark: "gray.600",
  };

  return (
    <>
      <Container>
        <Head>
          <title>MorphTail | X</title>
        </Head>
        <VStack>
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <Grid
              h="350px"
              templateRows="repeat(30, 1fr)"
              templateColumns="repeat(2, 1fr)"
              gap={4}
              mb={10}
            >
              <GridItem
              maxW="lg"
                as="button"
                borderRadius="lg"
                colSpan={30}
                rowSpan={10}
                bg={colorSecondary[colorMode]}
                children={<Heading>Code</Heading>}
              />
              <GridItem
                as="button"
                borderRadius="lg"
                colSpan={15}
                rowSpan={10}
                bg={colorSecondary[colorMode]}
                children={<Heading>Art</Heading>}
              />
              <GridItem
                as="button"
                borderRadius="lg"
                colSpan={15}
                rowSpan={10}
                bg={colorSecondary[colorMode]}
                children={<Heading>Music</Heading>}
              />
            </Grid>
          </Flex>
        </VStack>
      </Container>
    </>
  );
}
