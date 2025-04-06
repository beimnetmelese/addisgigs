import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        bg: "#000000", // Pure black background
        color: "#f0f0f0", // Soft white text
      },
    },
  },
  colors: {
    brand: {
      500: "#1DA1F2", // Accent color (you can change it)
    },
    gray: {
      50: "#f9f9f9",
      100: "#e1e1e1",
      200: "#cfcfcf",
      300: "#b1b1b1",
      400: "#9e9e9e",
      500: "#7e7e7e",
      600: "#626262",
      700: "#515151",
      800: "#333333",
      900: "#1a1a1a",
    },
  },
  components: {
    Button: {
      variants: {
        solid: {
          bg: "brand.500",
          color: "white",
          _hover: {
            bg: "#1780c7",
          },
        },
      },
    },
    Heading: {
      baseStyle: {
        color: "white",
      },
    },
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
  global: {
    "@keyframes floatIcon": {
      "0%": {
        transform: "translateY(0px) rotate(0deg)",
      },
      "50%": {
        transform: "translateY(-20px) rotate(5deg)",
      },
      "100%": {
        transform: "translateY(0px) rotate(0deg)",
      },
    },
  },
});

export default theme;
