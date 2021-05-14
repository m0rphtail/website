import React, { useState } from "react";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import {
  useColorMode,
  Text,
  Flex,
  Box,
  Link,
  Icon,
  InputGroup,
  Input,
  InputRightElement,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import { ExternalLinkIcon, StarIcon, SearchIcon } from "@chakra-ui/icons";

const ProjectItem = ({ name, desc, star_count, href, language }) => {
  const { colorMode } = useColorMode();
  const color = {
    light: "gray.700",
    dark: "gray.400",
  };
  const borderColor = {
    light: "#CBD5E0", // gray.300
    dark: "#4A5568", // gray.600
  };
  const [opacity, setOpacity] = useState(0);

  return (
    <Link
      href={href}
      isExternal
      _hover={{
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
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
        <Flex justify="space-between">
          <Flex align="center">
            <Text as="h2" fontSize="xl" fontWeight="medium">
              {name}
            </Text>
            <ExternalLinkIcon
              ml={2}
              opacity={opacity}
              display={["none", "flex", "flex"]}
            />
          </Flex>
          <Flex align="center">
            <Text>{star_count}</Text>
            <StarIcon ml={2} color="yellow.300" />
          </Flex>
        </Flex>
        <Flex justify="space-between">
          <Flex align="center">
            <Text color={color[colorMode]}>{desc}</Text>
          </Flex>
          <Flex align="flex-end">
            <Text color={color[colorMode]} ml={4}>
              {language}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Link>
  );
};

const ProjectListFull = () => {
  const [searchValue, setSearchValue] = useState("");
  const { data, error } = useSWR("/api/projects", fetcher);
  if (error)
    return (
      <div style={{ width: "100%" }}>
        Failed to load projects! Please check your internet connnection. If the
        error persists, contact me.
      </div>
    );
  if (!data)
    return (
      <div style={{ width: "100%" }}>
        <InputGroup mb={4} mr={4} w="100%">
          <Input
            aria-label="Search by name, description, and language"
            placeholder="Search by name, description, and language"
          />
          <InputRightElement children={<SearchIcon color="gray.500" />} />
        </InputGroup>
        <SimpleGrid columns={1} spacing="20px">
          <ProjectItem
            key="loading-1"
            name="---"
            star_count="---"
            desc="---"
            language="---"
          ></ProjectItem>
          <ProjectItem
            key="loading-2"
            name="---"
            star_count="---"
            desc="---"
            language="---"
          ></ProjectItem>
        </SimpleGrid>
      </div>
    );

  const filteredProjects = Object(data.repos)
    .filter(
      (project) =>
        project.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        project.description.toLowerCase().includes(searchValue.toLowerCase()) ||
        project.language?.toLowerCase().includes(searchValue.toLowerCase())
    )
    .sort((a, b) => Number(b.stars) - Number(a.stars));

  return (
    <>
      {/* <InputGroup mb={4} mr={4} w="100%">
        <Input
          aria-label="Search by name, description, and language"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search by name, description, and language"
        />
        <InputRightElement children={<SearchIcon color="gray.500" />} />
      </InputGroup> */}
      <SimpleGrid columns={1} spacing="20px">
        {!filteredProjects.length && "No projects found."}
        {filteredProjects.map((p) => (
          <ProjectItem
            key={p.name}
            name={p.name}
            star_count={p.stars}
            href={p.url}
            desc={p.description}
            language={p.language}
          ></ProjectItem>
        ))}
      </SimpleGrid>
    </>
  );
};

export default ProjectListFull;
