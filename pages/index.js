import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, Heading, Text, Stack } from "@chakra-ui/layout";
import Head from "next/head";
import Container from "../components/Container";
import { Canvas } from "@react-three/fiber";
import Sphere from "../components/Sphere";
import { Stars, OrbitControls } from "@react-three/drei";

export default function Index() {
  const { colorMode } = useColorMode();
  const colorPrimary = {
    light: "linear(to-br, #3399ff,#ff3399)",
    dark: "linear(to-br, #33ccff,#ff55cc)",
  };
  const colorSecondary = {
    light: "gray.600",
    dark: "gray.400",
  };
  return (
    <>
      <div className="desktopContainer">
        <h1 className="desktopName">MØR₽H₸AIL</h1>
      </div>
      <div className="mobileContainer">
        <h1 className="mobileName">MØR₽H₸AIL</h1>
      </div>
      <Container>
        <Head>
          <title>MorphTail | Home</title>
        </Head>

        <Canvas className="theCanvas">
          <Sphere />
          {/* <Stars factor={8} fade /> */}
          {/* <OrbitControls enableZoom={false} enablePan={false} enableRotate={true}/> */}
        </Canvas>
      </Container>
    </>
  );
}
