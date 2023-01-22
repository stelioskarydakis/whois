import Navbar from "./components/navbar/Navbar";
import Accordion from "./sections/accordion/Accordion";
import Footer from "./sections/footer/Footer";
import Hero from "./sections/hero/Hero";
import Reviews from "./sections/reviews/Reviews";
import Tabs from "./sections/tabs/Tabs";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Tabs />
      <Reviews />
      <Accordion />
      <Footer />
    </>
  );
}

export default App;
