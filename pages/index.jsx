import PageHead from '../components/PageHead';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Introduce from '../components/Introduce';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export default function Index() {
  return (
    <>
      <PageHead />
      <Header />
      <Hero />
      <Projects />
      <Introduce />
      <Footer />
    </>
  );
}
