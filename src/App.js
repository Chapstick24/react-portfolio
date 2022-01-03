
import { Contact } from "./components/contact/Contact";
import { Header } from "./components/header/Header";
import { Intro } from "./components/intro/Intro";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Project } from "./components/project/Project";
import { Review } from "./components/review/Review";
import "./app.scss"
import { useState } from "react";
import { Menu } from "./components/menu/Menu";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className = "sections">
        <Intro />
        <Portfolio />
        <Project />
        < Review />
        <Contact />

      </div>


    </div>
  );
}

export default App;
