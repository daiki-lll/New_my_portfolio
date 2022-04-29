import "./reset.css";
import './App.css';
import NavBottun from "./components/NavBottun";
import Header from "./components/Header";
import Myname from "./components/Myname";
import Scloll from "./components/Scloll";
import Subtitle from "./components/Subtitle";
import About from "./components/About";
import Skill from "./components/Skill";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='App'>
      <nav>
        <NavBottun 
          name={"study"}
        />
        <NavBottun 
          name={"contact"}
        />
      </nav>
      <div className="squea"></div>
      <Header 
        title={"PORTFOLIO"}
        subtitle={"SITE"}
      />
      <Myname
        Myname={"Daiki Oikawa"}
        index={"Commercial high school student"}
      />
      <Scloll
        text={"scroll"}
      />
      <Subtitle
        subtitle={"About me"}
      />
      <About
        aboutText={"及川大暉（おいかわだいき） 岩手県在住 商業高校生       飽き性で新しい物好き"}
      />
      <Subtitle
        subtitle={"Skill"}
      />
      <Skill
        skill={"HTML/CSS/JavaScript/React/簿記"}
      />
      <Footer
        foot1={"GITHUB"}
        foot2={"INSTAGRAM"}
        foot3={"SPOTIFY"}
      />
    </div>
  );
}

export default App;