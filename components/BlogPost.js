import React from "react";
import NextLink from "next/link";
import { useColorMode, Heading, Text, Flex, Box, Link } from "@chakra-ui/react";
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

  return (
    <NextLink href={`blog/${slug}`} passHref>
      <Link w="100%" _hover={{ textDecoration: "none" }}>
        <Box mb={10} display="block" width="100%" >
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
                _hover={{ bgGradient: primaryHover[colorMode], bgClip:"text"}}
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
