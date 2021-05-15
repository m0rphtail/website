import React from "react";
import { useColorMode, ColorModeProvider } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import { Global, css } from "@emotion/react";
import { prismLightTheme, prismDarkTheme } from "../styles/prism";
import MDXComponents from "../components/MDXComponents";
import { Chakra } from "../src/Chakra";
import { DefaultSeo } from "next-seo";

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Global
        styles={css`
          ${colorMode === "light" ? prismLightTheme : prismDarkTheme};
          ::selection {
            background-color: #90cdf4;
            color: #fefefe;
          }
          ::-moz-selection {
            background: #ffb7b7;
            color: #fefefe;
          }
          html {
            min-width: 356px;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === "light" ? "white" : "#15161a"};
          }
          .theCanvas {
            top: 0;
            left: 0;
            outline: none;
            min-height: 600px;
          }
          .desktopContainer {
            mix-blend-mode: exclusion;
            z-index: 1;
            width: 100%;
            position: fixed;
            display: grid;
            top: 20em;
            place-items: center;
          }
          .desktopName {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            display: block;
            font-size: 7rem;
            color: white;
            font-weight: bold;
          }
          .mobileContainer {
            display: none;
          }
          .mobileName {
            display: none;
          }

          @media screen and (max-width: 768px) {
            .desktopContainer {
              display: none;
            }
            .desktopName {
              display: none;
            }
            .mobileContainer {
              display: block;
              mix-blend-mode: exclusion;
              z-index: 1;
              width: 100%;
              position: fixed;
              display: grid;
              top: 20em;
              place-items: center;
            }
            .mobileName {
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
              display: block;
              font-size: 3.5rem;
              color: white;
              font-weight: bold;
            }
          }
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        canonical="https://morphtail.vercel.app"
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://morphtail.vercel.app",
          title: "MorphTail",
          description:
            "A personal website and resume website for Kshitij Chitnis, a developer, creator and student.",
          site_name: "MorphTail",
        }}
        twitter={{
          handle: "@kshitijchitnis",
          site: "@kshitijchitnis",
          cardType: "summary_large_image",
        }}
      />
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
    </>
  );
}

export default MyApp;
