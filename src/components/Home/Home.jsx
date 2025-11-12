import React from "react";
import "./Home.css";
import UK from "../../assets/UK copy.png";

function Home() {
  return (
    <div className="AppHome">
      <div className="spacer">
        <h1 className="intro">
          Hello I’m <span className="bold">Utsab Khatiwada.</span>
          <br />
          <span className="bold">Fullstack</span> <span className="outline">Developer</span>
          <br />
          Based in <span className="bold">Nepal.</span>
        </h1>
        <h3 className="description">
          Motivated and detail-oriented Software Developer with extensive experience in .NET, AWS, Java, and React Native, complemented by knowledge in Next.js. Proficient in designing and implementing robust, scalable web and mobile applications. Strong problem-solving skills with a passion for
          learning new technologies and optimizing code for performance. Adept at working collaboratively in agile environments to deliver high-quality software solutions.
        </h3>
      </div>
      <img src={UK} className="ownImage"></img>
    </div>
  );
}

export default Home;
