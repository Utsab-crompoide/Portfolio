import React from "react";
import "./Home.css";
import UK from "../../assets/UK copy.png";

function Home() {
  const medias = {
    social_media: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
        icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg",
        color: "#1877F2",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/",
        icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg",
        color: "#0A66C2",
      },
      {
        name: "GitHub",
        url: "https://github.com/",
        icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg",
        color: "#000000ff",
      },
      {
        name: "Twitter",
        url: "https://twitter.com/",
        icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg",
        color: "#1DA1F2",
      },
    ],
  };

  return (
    <div className="appHome">
      <div className="homeContent">
        <div className="spacer">
          <h1 className="intro">
            Hello, I’m <span className="bold">Utsab Khatiwada.</span>
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
      <div className="socialMedia">
        {medias?.social_media.map((media, index) => (
          <a key={index} href={media.url} target="_blank" rel="noopener noreferrer" style={{ color: media.color }}>
            <img src={media.icon} alt={media.name} className="socialIcon" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Home;
