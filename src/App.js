import "./assets/styles/App.scss";

// custom css for the carousel
import "./assets/styles/custom.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CarouselHeader from "./components/CarouselHeader";
import SectionService from "./components/SectionService";
import SectionWhy from "./components/SectionWhy";
import SectionEnd from "./components/SectionEnd";

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselHeader />
      <SectionService />
      <SectionWhy />
      <SectionEnd />
      <Footer />
    </div>
  );
}

export default App;
