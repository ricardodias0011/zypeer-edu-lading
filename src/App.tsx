import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import "./App.css";
import "./index.css";
import PrivacyPolicy from "./components/privacity-policy";
import LiabilityPolicy from "./components/liability-policy";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={
          <>
            <Navbar />
            <Hero />
            <Features />
            <Services />
            <Cta />
            <Pricing />
            <FAQ />
            <Footer />
            <ScrollToTop />
          </>
        } />
        <Route path="/edu/privacy-policy" element={
          <>
            <Navbar />
            <PrivacyPolicy />
            <ScrollToTop />
          </>
        } />
        <Route path="/edu/liability-policy" element={
          <>
            <Navbar />
            <LiabilityPolicy />
            <ScrollToTop />
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
