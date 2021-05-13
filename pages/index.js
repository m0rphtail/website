import Head from "next/head";
import Container from "../components/Container";
import { Canvas } from "@react-three/fiber";
import Sphere from "../components/Sphere";

export default function Index() {
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
        </Canvas>
      </Container>
    </>
  );
}
