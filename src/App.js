import "./App.css";

import Banner from "./components/Banner";
import Skills from "./components/Skills";
import NavBar from "./components/NavBar";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Newsletter
        status=""
        message=""
        onValidated={(data) => console.log(data)}
      />
      <Footer />
    </>
  );
}

export default App;