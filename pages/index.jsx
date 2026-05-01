import PageHead from "../components/PageHead";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Introduce from "../components/Introduce";
import Stack from "../components/Stack";
import Work from "../components/Work";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <>
      <PageHead />
      <Header />
      <main>
        <Hero />
        <Introduce />
        <Stack />
        <Work />
      </main>
      <Footer />
    </>
  );
}
