import React from "react";
import App from "next/app";
import {
  ThemeProvider,
  CSSReset,
  DarkMode,
  ITheme,
  ColorModeProvider,
} from "@chakra-ui/core";
import { Global, css } from "@emotion/core";

import theme from "../theme";

const config = (theme: ITheme) => ({
  light: {
    color: theme.colors.gray[800],
    bg: "#E2E8F0",
    borderColor: "#E2E8F0",
    placeholderColor: theme.colors.gray[500],
  },
  dark: {
    color: theme.colors.whiteAlpha[900],
    bg: theme.colors.gray[800],
    borderColor: theme.colors.whiteAlpha[300],
    placeholderColor: theme.colors.whiteAlpha[400],
  },
});

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <DarkMode>
            <Component {...pageProps} />
          </DarkMode>
        </ColorModeProvider>
      </ThemeProvider>
    );
  }
}

export default MyApp;
