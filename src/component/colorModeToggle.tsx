// component/colorModeToggle.tsx
import {
  IconButton,
  useColorMode,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue(
    "rgba(255,255,255,0.1)",
    "rgba(255,255,255,0.05)",
  );
  const hoverBg = useColorModeValue(
    "rgba(0,0,0,0.05)",
    "rgba(255,255,255,0.1)",
  );
  const iconColor = useColorModeValue("#1a202c", "#60a5fa");

  return (
    <Tooltip
      label={`Switch to ${colorMode === "light" ? "dark" : "light"} mode`}
    >
      <IconButton
        aria-label="Toggle color mode"
        icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
        onClick={toggleColorMode}
        variant="ghost"
        size="md"
        borderRadius="full"
        bg={bg}
        color={iconColor}
        _hover={{
          bg: hoverBg,
          transform: "scale(1.1)",
        }}
        transition="all 0.3s"
      />
    </Tooltip>
  );
}

export default ColorModeToggle;
