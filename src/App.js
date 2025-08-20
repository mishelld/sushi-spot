import HeroSection from "./components/HeroSection";
import StorySection from "./components/StorySection";
import MenuSection from "./components/MenuSection";
import GallerySection from "./components/GallerySection";
import VisitSection from "./components/VisitSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {" "}
      <Navbar />
      <HeroSection />
      <StorySection />
      <MenuSection />
      <GallerySection />
      <VisitSection />
      <Footer />{" "}
    </>
  );
}
export default App;
