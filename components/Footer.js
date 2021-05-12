import React from "react";
import { Flex,Stack, Link, IconButton, useColorMode } from "@chakra-ui/react";
import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiYoutube,
  FiMail,
  FiInstagram,
} from "react-icons/fi";
import { FaBehance } from "react-icons/fa";
import { ImSoundcloud } from "react-icons/im";

export const Footer = () => {
  const { colorMode } = useColorMode();
  const borderIcon = {
    light: "gray.400",
    dark: "gray.500",
  };
  const footerHoverBg = {
    light: "linear(to-br, #3399ffaa,#ff3399aa)",
    dark: "linear(to-br, #33ccff99,#ff55cc99)",
  };
  return (
    <>
        <Stack mt={20} mb={5} spacing={1} direction="row" alignSelf="center">
        <div>
          <Link
            href="https://twitter.com/kshitijchitnis"
            title="Twitter"
            isExternal
          >
            <IconButton
              aria-label="Twitter"
              icon={<FiTwitter />}
              size="lg"
              color={borderIcon[colorMode]}
              variant="ghost"
              _hover={{
                bgGradient: footerHoverBg[colorMode],
                color: "blackAlpha.700",
              }}
            />
          </Link>
          <Link href="https://github.com/m0rphtail" title="GitHub" isExternal>
            <IconButton
              aria-label="GitHub"
              icon={<FiGithub />}
              size="lg"
              color={borderIcon[colorMode]}
              variant="ghost"
              _hover={{
                bgGradient: footerHoverBg[colorMode],
                color: "blackAlpha.700",
              }}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/kshitijchitnis"
            title="LinkedIn"
            isExternal
          >
            <IconButton
              aria-label="LinkedIn"
              icon={<FiLinkedin />}
              size="lg"
              color={borderIcon[colorMode]}
              variant="ghost"
              _hover={{
                bgGradient: footerHoverBg[colorMode],
                color: "blackAlpha.700",
              }}
            />
          </Link>
          <Link
            href="https://www.youtube.com/kshitijchitnis"
            title="YouTube"
            isExternal
          >
            <IconButton
              aria-label="YouTube"
              icon={<FiYoutube />}
              size="lg"
              color={borderIcon[colorMode]}
              variant="ghost"
              _hover={{
                bgGradient: footerHoverBg[colorMode],
                color: "blackAlpha.700",
              }}
            />
          </Link>
          <br/>
          <Link
            href="https://www.instagram.com/jitihsk.sintihc"
            title="Instagram"
            isExternal
          >
            <IconButton
              aria-label="Instagram"
              icon={<FiInstagram />}
              size="lg"
              color={borderIcon[colorMode]}
              variant="ghost"
              _hover={{
                bgGradient: footerHoverBg[colorMode],
                color: "blackAlpha.700",
              }}
            />
          </Link>
          <Link
            href="https://www.behance.net/kshitijchitnis"
            title="Behance"
            isExternal
          >
            <IconButton
              aria-label="Behance"
              icon={<FaBehance />}
              size="lg"
              color={borderIcon[colorMode]}
              variant="ghost"
              _hover={{
                bgGradient: footerHoverBg[colorMode],
                color: "blackAlpha.700",
              }}
            />
          </Link>
          <Link
            href="https://soundcloud.com/user-34602005-337460945"
            title="SoundCloud"
            isExternal
          >
            <IconButton
              aria-label="SoundCloud"
              icon={<ImSoundcloud />}
              size="lg"
              color={borderIcon[colorMode]}
              variant="ghost"
              _hover={{
                bgGradient: footerHoverBg[colorMode],
                color: "blackAlpha.700",
              }}
            />
          </Link>
          <Link href="mailto:chitniskshitij@gmail.com" title="Email" isExternal>
            <IconButton
              aria-label="Email"
              icon={<FiMail />}
              size="lg"
              color={borderIcon[colorMode]}
              variant="ghost"
              _hover={{
                bgGradient: footerHoverBg[colorMode],
                color: "blackAlpha.700",
              }}
            />
          </Link>
        </div>
      </Stack>
    </>
  );
};
