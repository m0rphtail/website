import { useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = {
    light: "blackAlpha.800",
    dark: "whiteAlpha.900",
  };
  const hoverIconColor = {
    light: "whiteAlpha.900",
    dark: "blackAlpha.800",
  };
  const hoverBg = {
    light: "linear(to-br, #3399ff,#ff3399)",
    dark: "linear(to-br, #33ccff,#ff55cc)",
  };
  return (
    <IconButton
      aria-label="Toggle dark mode"
      icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
      color={iconColor[colorMode]}
      _hover={{
        bgGradient: hoverBg[colorMode],
        color: hoverIconColor[colorMode],
      }}
      variant="ghost"
    />
  );
};

export default DarkModeSwitch;
