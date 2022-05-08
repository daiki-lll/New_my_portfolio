import "./reset.css";
import './App.css';
import NavBottun from "./components/NavBottun";
import Header from "./components/Header";
import Study from "./components/Study";
import Scloll from "./components/Scloll";
import Subtitle from "./components/Subtitle";
import About from "./components/About";
import Skill from "./components/Skill";
import Footer from "./components/Footer";
import Headimg from "./components/mick-50XwniKxiXI-unsplash.jpg"
import Menuwrapper from "./components/Menuwrapper";
import OpenBt from "./components/OpenBt";

function App() {
  return (
    <div className='App'>
      <nav>
        <NavBottun 
          name={"oikawa daiki"}
        />
        <OpenBt 
          bottun={"menu"}
        />
      </nav>
      <Menuwrapper />
      <img className="headimg" src={Headimg} alt={""} /> 
      
      <div className='wbox'></div>

      <Header 
        title={"PORTFOLIO"}
      />
      <Scloll
      />
      <Subtitle
        subtitle={"Study"}
      />
      <Study
        stitle={"titletitletitletitle"}
        index={"texttexttexttexttexttextetxttext"}
      />
            <Study
        stitle={"titletitletitletitle"}
        index={"texttexttexttexttexttextetxttext"}
      />
      <Subtitle
        subtitle={"About me"}
      />
      <About />
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
