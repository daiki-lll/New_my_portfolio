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
import {Fade} from 'react-reveal';
import React, {useState, useEffect} from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  return (
    <div className='App'>
      {
        loading ?  
        <div className="load">
          <ScaleLoader color={"#ffffff"} loading={loading} height={30} width={1} radius={1} margin={4} />
        </div>
        :
      <><nav>
            <NavBottun
              name={"oikawa daiki"} />
            <OpenBt
              bottun={"menu"} />
          </nav><Menuwrapper /><Fade bottom>
              <img className="headimg" src={Headimg} alt={""} />
            </Fade><Fade left>
              <div className='wbox'></div>
              <Header
                title={"PORTFOLIO"} />
            </Fade><Scloll /><Fade left>
              <Subtitle
                subtitle={"Study"} />
            </Fade><Study
              stitle={"titletitletitletitle"}
              index={"texttexttexttexttexttextetxttext"} /><Study
              stitle={"titletitletitletitle"}
              index={"texttexttexttexttexttextetxttext"} /><Fade left>
              <Subtitle
                subtitle={"About me"} />
            </Fade><About /><Fade left>
              <Subtitle
                subtitle={"Skill"} />
            </Fade><Skill
              skill={"HTML/CSS/JavaScript/React/簿記"} /><Footer
              foot1={"GITHUB"}
              foot2={"INSTAGRAM"}
              foot3={"SPOTIFY"} /></>
      }
    </div>
  );
}

export default App;
