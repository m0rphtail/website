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
          ::selection {
            background-color: #90CDF4;
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
            top:0;
            left:0;
            outline:none;   
            min-height:600px;
}
          .desktopContainer { 
            display:block;                                
            mix-blend-mode:exclusion;
            z-index:1;
            width:100%;         
            position:fixed;
            display:grid;
            height:100vh;
            place-items:center;
          }
          .desktopName {  
            display:block;        
            font-size:7rem;
            color:white;
            font-weight:bold;
          }
          .mobileContainer{
            display:none;
          }
          .mobileName {
            display:none;
          }

          @media screen and (max-width:768px){
            .desktopContainer{
              display:none;
            }
            .desktopName{
              display:none;
            }
            .mobileContainer { 
            display:block;                                
            mix-blend-mode:exclusion;
            z-index:1;
            width:100%;         
            position:fixed;
            display:grid;
            top:12rem;
            place-items:center;
          }
            .mobileName{
              display:block;
              font-size:6rem;
              color:white;
              font-weight:bold;
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
