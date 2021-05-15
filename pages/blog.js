import React, { useState } from "react";
import {
  Heading,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  useColorMode,
} from "@chakra-ui/react";
import Container from "../components/Container";
import { getAllFilesFrontMatter } from "../lib/mdx";
import BlogPost from "../components/BlogPost";
import { SearchIcon } from "@chakra-ui/icons";
import { NextSeo } from "next-seo";

export default function Blog({ posts }) {
  const { colorMode } = useColorMode();
  const [searchValue, setSearchValue] = useState("");

  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  const colorPrimary = {
    light: "linear(to-br, #3399ff,#ff3399)",
    dark: "linear(to-br, #33ccff,#ff55cc)",
  };

  return (
    <>
      <NextSeo
        title="Blog - MorphTail"
        description="A personal website and resume website for Kshitij Chitnis, a developer, creator and student."
        canonical="https://morphtail.vercel.app"
        openGraph={{
          url: "https://morphtail.vercel.app",
          title: "Blog - MorphTail",
          description:
            "A personal website and resume website for Kshitij Chitnis, a developer, creator and student.",
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
              bgGradient={colorPrimary[colorMode]}
              bgClip="text"
              padding="5px"
            >
              Blog
            </Heading>
            <InputGroup mb={4} mr={4} w="100%">
              <Input
                aria-label="Search by title"
                placeholder="Search by title"
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <InputRightElement>
                <SearchIcon color="gray.300" />
              </InputRightElement>
            </InputGroup>
            {!filteredBlogPosts.length && "No posts found :("}
            {filteredBlogPosts.map((frontMatter) => (
              <BlogPost key={frontMatter.title} {...frontMatter} />
            ))}
          </Flex>
        </Stack>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}
