import { extendTheme } from "@chakra-ui/react";
const config = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#f9f9f9",
      100: "#ededed",
      200: "#afafafff",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "#585858",
      600: "#5e5d5dff",
      700: "#202020",
      800: "#121212",
      900: "#111",
    },
  },
});

export default theme;
