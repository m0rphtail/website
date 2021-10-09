import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import {
  Flex,
  Heading,
  Stack,
  Text,
  UnorderedList,
  ListItem,
  Link,
} from "@chakra-ui/layout";
import { NextSeo } from "next-seo";
import Container from "../../components/Container";

export default function Index() {
  const { colorMode } = useColorMode();
  const colorPrimary = {
    dark: "blackAlpha.800",
    light: "whiteAlpha.900",
  };
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };
  const Bg = {
    light: "linear(to-br, #3399ff,#ff3399)",
    dark: "linear(to-br, #33ccff,#ff55cc)",
  };

  return (
    <>
      <NextSeo
        title="Hack - MorphTail"
        description="A personal portfolio and resume website for Kshitij Chitnis, a developer, creator and student."
        canonical="https://morphtail.vercel.app/things-i-do"
        openGraph={{
          url: "https://morphtail.vercel.app",
          title: "Hack - MorphTail",
          description:
            "A personal portfolio and resume website for Kshitij Chitnis, a developer, creator and student.",
          site_name: "MorphTail",
        }}
        twitter={{
          handle: "@kshitijchitnis",
          site: "@kshitijchitnis",
          cardType: "summary_large_image",
        }}
      />
      <Container>
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
              Hack
            </Heading>
            <Text mb="5" color={colorSecondary[colorMode]}>
              I have been doing many CTFs and challenges on these platforms.
              These are my profiles on the following platforms.
            </Text>
            <UnorderedList>
              <ListItem color={colorSecondary[colorMode]}>
                <Link href="https://ctftime.org/user/114315" isExternal="true">
                  <Heading mb={2} size="md">
                    CTFtime
                  </Heading>
                </Link>
              </ListItem>
              <ListItem color={colorSecondary[colorMode]}>
                <Link
                  href="https://app.hackthebox.eu/profile/283323"
                  isExternal="true"
                >
                  <Heading mb={2} size="md">
                    HackTheBox
                  </Heading>
                </Link>
              </ListItem>
              <ListItem color={colorSecondary[colorMode]}>
                <Link
                  href="https://tryhackme.com/p/Morphtail"
                  isExternal="true"
                >
                  <Heading mb={2} size="md">
                    TryHackMe
                  </Heading>
                </Link>
              </ListItem>
            </UnorderedList>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}
