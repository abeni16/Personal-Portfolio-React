import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/css.png";
import Fiverr from "../../img/react.png";
import Amazon from "../../img/reactnative.png";
import Shopify from "../../img/nextjs.png";
import Facebook from "../../img/nodejs.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>About Myself</span>
          <span>Education & Expriance</span>
          <spane>
            I'm Abenezer, a dedicated software engineer who graduated in 2022{" "}
            <br />
            with a degree in software engineering. I began my journey as an{" "}
            <br />
            intern at Topfony, where I gained valuable insights into the world{" "}
            <br />
            of web development. Following my internship, I transitioned into the{" "}
            <br />
            role of a full-stack developer at Kentechno Tech Solutions, where I{" "}
            <br />
            honed my skills in various technologies, including React, Next.js,{" "}
            <br />
            React Native, Node.js, and more. My passion for creating innovative{" "}
            <br />
            solutions and my diverse experience make me a versatile and <br />
            enthusiastic contributor to any software development team. <br />
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img className="lg-img" src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img className="lg-img" src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img className="lg-img" src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img className="lg-img" src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img className="lg-img" src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
