import "../App.css";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaVolleyballBall } from "react-icons/fa";
import { FcSettings } from "react-icons/fc";
import Typewriter from "react-ts-typewriter";
import { useState ,useEffect} from "react";
function Top() {
  const [clicked, isClicked] = useState(false);
  const [set, isset] = useState(true);

  useEffect(() => {
    
  }, []);
  function setColor (newColor){
    document.documentElement.style.setProperty('--fc--green', newColor);
}
function finc (e){
  document.documentElement.style.setProperty('font-size', e);
}
function rtl1 (e){
  document.documentElement.style.setProperty('direction', e);
}
  return (
    <>
      <div className={set ? "bar" : "bar1"}>

        <img
          src="https://images.unsplash.com/photo-1592547097938-7942b22df3db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          alt="lady" className="luffy"
        />
        <div className="bar-title">Akash Gupta</div>
        <ul className="nav-items">
          <li>
            <a href="#top-section1">Home</a>
          </li>
          <li>
            <a href="#about-me1">About Me</a>
          </li>
          <li>
            <a href="#services1">What I Do</a>
          </li>
          <li>
            <a href="#resume1">Resume</a>
          </li>
          <li>
            <a href="#portfol1">Portfolio</a>
          </li>
          <li>
            <a href="#testimonial1">Testimonial</a>
          </li>
          <li>
            <a href="#contact1">Contact</a>
          </li>
        </ul>
        <div class="nav-icon">
          <FaFacebook className="icon" />
          <FaLinkedinIn className="icon" />
          <FaGithub className="icon" />
          <FaVolleyballBall className="icon" />
        </div>
      </div>
      
      <div className={clicked ? "star" : "star1"}>
        <button
          className="starstar"
          onClick={() => {
            isClicked(!clicked);
          }}
        >
          <FcSettings className="set1" />
        </button>
        <div className="star-item-icon">
          <ul className="side-list">
            <li onClick={()=>rtl1("rtl")}>Rtl</li>
            <li onClick={() => isset(!set)}>dark Mode</li>
            <li >seamless</li>
            <li onClick={()=>finc("20px")}>A+</li>
            <li onClick={()=>finc("10px")}>A-</li>
            <li>
              theme
              <ul className="theme_color">
                <div className="tc1">
                <div onClick={() => setColor('orange')} className="circle" style={{backgroundColor:"orange"}}></div>
                <div onClick={() => setColor('yellow')} className="circle" style={{backgroundColor:"yellow"}}></div>
                <div onClick={() => setColor('red')} className="circle" style={{backgroundColor:"red"}}></div>
                </div>
                <div className="tc1">
                <div onClick={() => setColor('green')} className="circle" style={{backgroundColor:"green"}}></div>
                <div onClick={() => setColor('pink')} className="circle" style={{backgroundColor:"pink"}}></div>
                <div onClick={() => setColor('aqua')} className="circle" style={{backgroundColor:"aqua"}}></div>
                </div>

              </ul>
            </li>
            <li onClick={()=>{finc("16px");setColor("green")} }>Reset</li>
          </ul>
        </div>
      </div>
      
      <div className="hireme">
      <button className="ham">🍔</button>

        <div className="hire-mid hire-one">Welcome</div>
        <div className="hire-mid hire-two">
          <Typewriter
            text={"I'm a Full-Stack Developer"}
            speed={100}
            loop={true}
          />
        </div>
        <div className="hire-mid hire-three">based in UK, INDIA.</div>
        <button className="hiremebtn">Hire Me</button>
      </div>
    </>
  );
}

export default Top;
