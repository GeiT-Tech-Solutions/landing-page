import "./assets/styles/App.scss";

// custom css for the carousel
import "./assets/styles/custom.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CarouselHeader from "./components/CarouselHeader";
import SectionService from "./components/SectionService";
import SectionWhy from "./components/SectionWhy";
import SectionEnd from "./components/SectionEnd";
import Preloader from "./components/Preloader";
import { useEffect, useState } from "react";
import Fadein from "./components/FadeIn";

function App() {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setData({ message: 'Success' })
      setLoading(false)
    }, 500)
  }, [])

  return (
    <div className="App">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Fadein>
            <Header />
          </Fadein>
          <Fadein>
            <CarouselHeader />
          </Fadein>
          <Fadein>
            <SectionService />
          </Fadein>
          <Fadein>
            <SectionWhy />
          </Fadein>
          <Fadein>
            <SectionEnd />
          </Fadein>
          <Fadein>
            <Footer />
          </Fadein>

        </>
      )}
    </div>
  );
}

export default App;
