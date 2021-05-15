import Container from "../components/Container";
import { Canvas } from "@react-three/fiber";
import Sphere from "../components/Sphere";
import { NextSeo } from "next-seo";

export default function Index() {
  return (
    <>
      <NextSeo
        title="Home - MorphTail"
        description="A personal website and resume website for Kshitij Chitnis, a developer, creator and student."
        canonical="https://morphtail.vercel.app"
        openGraph={{
          url: "https://morphtail.vercel.app",
          title: "Home - MorphTail",
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
      <div className="desktopContainer">
        <h1 className="desktopName">MØR₽H₸AIL</h1>
      </div>
      <div className="mobileContainer">
        <h1 className="mobileName">MØR₽H₸AIL</h1>
      </div>
      <Container>
        <Canvas className="theCanvas">
          <Sphere />
        </Canvas>
      </Container>
    </>
  );
}
