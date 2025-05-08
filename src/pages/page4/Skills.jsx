import { useEffect } from "react";
import "./skills.css";

import imageC from "./images/c++.png";
import imageCss from "./images/css.png";
import imageExpress from "./images/expressJs.png";
import imageFigma from "./images/figma.png";
import imageGit from "./images/git.png";
import imageGithub from "./images/github.png";
import imageHtml from "./images/html.png";
import imageIllustrator from "./images/illustrator.png";
import imageJava from "./images/java.png";
import imageJavascript from "./images/javascript.png";
import imageMongo from "./images/mongoDb.png";
import imageMysql from "./images/mysql.png";
import imageNode from "./images/node.png";
import imagePhotoshop from "./images/photoshop.png";
import imagePython from "./images/python.png";
import imageReact from "./images/react.png";

function Skills() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const iconItems = document.querySelectorAll(".icon-item");
    iconItems.forEach((item) => observer.observe(item));

    return () => {
      iconItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <div className="skills-container">
      <h1 className="skills-title">Tech Stack & Tools</h1>
      <div className="icons-container">
        <div className="learned">
          <div className="icon-item">
            <img src={imageHtml} alt="HTML" className="icons" />
            <p className="icon-name">HTML</p>
          </div>
          <div className="icon-item">
            <img src={imageCss} alt="CSS" className="icons" />
            <p className="icon-name">CSS</p>
          </div>
          <div className="icon-item">
            <img src={imageJavascript} alt="JavaScript" className="icons" />
            <p className="icon-name">JavaScript</p>
          </div>
          <div className="icon-item">
            <img src={imageReact} alt="React" className="icons" />
            <p className="icon-name">React</p>
          </div>
          <div className="icon-item">
            <img src={imageJava} alt="Java" className="icons" />
            <p className="icon-name">Java</p>
          </div>
          <div className="icon-item">
            <img src={imageC} alt="C++" className="icons" />
            <p className="icon-name">C++</p>
          </div>
        </div>

        <h2 className="titals">Currently Learning</h2>
        <div className="currently-learning">
          <div className="icon-item">
            <img src={imageMongo} alt="MongoDB" className="icons" />
            <p className="icon-name">MongoDB</p>
          </div>
          <div className="icon-item">
            <img src={imageExpress} alt="Express" className="icons" />
            <p className="icon-name">Express</p>
          </div>
          <div className="icon-item">
            <img src={imageNode} alt="Node.js" className="icons" />
            <p className="icon-name">Node.js</p>
          </div>
          <div className="icon-item">
            <img src={imagePython} alt="Python" className="icons" />
            <p className="icon-name">Python</p>
          </div>
          <div className="icon-item">
            <img src={imageMysql} alt="MySQL" className="icons" />
            <p className="icon-name">MySQL</p>
          </div>
        </div>

        <h2 className="titals">Skills</h2>
        <div className="skills">
          <div className="icon-item">
            <img src={imageGit} alt="Git" className="icons" />
            <p className="icon-name">Git</p>
          </div>
          <div className="icon-item">
            <img src={imageGithub} alt="GitHub" className="icons" />
            <p className="icon-name">GitHub</p>
          </div>
          <div className="icon-item">
            <img src={imageFigma} alt="Figma" className="icons" />
            <p className="icon-name">Figma</p>
          </div>
          <div className="icon-item">
            <img src={imagePhotoshop} alt="Photoshop" className="icons" />
            <p className="icon-name">Photoshop</p>
          </div>
          <div className="icon-item">
            <img src={imageIllustrator} alt="Illustrator" className="icons" />
            <p className="icon-name">Illustrator</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
