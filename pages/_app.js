import React from "react";
import { useColorMode, ColorModeProvider } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import { Global, css } from "@emotion/react";
import { prismLightTheme, prismDarkTheme } from "../styles/prism";
import MDXComponents from "../components/MDXComponents";
import { Chakra } from "../src/Chakra";

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Global
        styles={css`
          ${colorMode === "light" ? prismLightTheme : prismDarkTheme};
          html {
            min-width: 32em;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 120vh;
            background: ${colorMode === "light" ? "white" : "#15161a"};
          }
          canvas {
            width: 100%;
          }
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <ColorModeProvider
        options={{
          useSystemColorMode: false,
        }}
      >
        <MDXProvider components={MDXComponents}>
          <GlobalStyle>
            <Component {...pageProps} />
          </GlobalStyle>
        </MDXProvider>
      </ColorModeProvider>
    </Chakra>
  );
}

export default MyApp;
