import React, { useState } from "react";
import NextLink from "next/link";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Box,
  Link,
  Stack,
} from "@chakra-ui/react";
import { parseISO, format } from "date-fns";

const BlogPost = ({ title, publishedAt, summary, slug }) => {
  const { colorMode } = useColorMode();
  const primaryTextColor = {
    light: "blackAlpha.800",
    dark: "whiteAlpha.900",
  };
  const primaryHover = {
    light: "linear(to-br, #3399ff,#ff3399)",
    dark: "linear(to-br, #33ccff,#ff55cc)",
  };
  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };
  const borderColor = {
    light: "#CBD5E0", // gray.300
    dark: "#4A5568", // gray.600
  };
  const boxShadowColor = {
    light: '0px 8px 26px rgba(0, 0, 0, 0.1)',
    dark: '0px 8px 26px rgba(0, 0, 0, 0.9)'
}
  const [opacity, setOpacity] = useState(0);

  return (
      <NextLink href={`/blog/${slug}`} passHref>
        <Link
        m={2}
          w="100%"
          _hover={{ textDecoration: "none" }}
          _hover={{
            boxShadow: boxShadowColor[colorMode],
            textDecoration: "none",
          }}
          onMouseOver={() => setOpacity(1)}
          onMouseLeave={() => setOpacity(0)}
        >
          <Box
            w="100%"
            borderWidth="1px"
            border={`1px solid ${borderColor[colorMode]}`}
            rounded="md"
            p={2}
          >
            <Flex
              width="100%"
              align="flex-start"
              justifyContent="space-between"
              flexDirection={["column", "row"]}
            >
              <Flex
                flexDirection="column"
                align="flex-start"
                justifyContent="start"
                width="100%"
              >
                <Heading
                  size="md"
                  as="h3"
                  mb={1}
                  fontWeight="medium"
                  color={primaryTextColor[colorMode]}
                  _hover={{
                    bgGradient: primaryHover[colorMode],
                    bgClip: "text",
                  }}
                >
                  {title}
                </Heading>
              </Flex>

              <Text
                color="gray.500"
                minWidth="140px"
                textAlign={["left", "right"]}
                mb={[4, 0]}
              >
                {format(parseISO(publishedAt), "MMMM dd, yyyy")}
              </Text>
            </Flex>
            <Text color={secondaryTextColor[colorMode]}>{summary}</Text>
          </Box>
        </Link>
      </NextLink>
  );
};

export default BlogPost;
