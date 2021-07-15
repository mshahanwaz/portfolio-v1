import React, { useEffect, useState } from "react";
import {
  home,
  name,
  description,
  annot,
  resume,
  options,
  option,
  link,
  version,
} from "../../styles/home.module.css";
import { NavLink } from "react-router-dom";
import Editor from "./components/Editor";
import ProjectShow from "./components/ProjectShow";
import Skills from "./components/Skills";
import Loading from "../Loading";

function Home() {
  const [bio, setBio] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch("/biodata.json")
        .then((response) => response.json())
        .then((data) => {
          setBio(data);
        });
    };
    fetchData();
  }, []);

  const text = `
  +88                            
  +880                           
  ++88                           
  ++88                           
  +880                         ++
  +888                       +88
  ++880                      +88
  ++888      +++88         +++8
  ++8888  +++8880++88    +++88
  +++8888+++8880++8888__++888
   ++888++8888+++888888++888
   ++88++8888++8888888++888
   ++++++888888888888888888
    ++++++88888888888888888
    ++++++++000888888888888
     +++++++000088888888888
      +++++++00088888888888
       +++++++088888888888
       +++++++088888888888
        +++++++8888888888
        +++++++0088888888
        ++++++0088888888
        +++++0008888888
        #############

        `;

  if (bio) {
    return (
      <div className={home}>
        <div className={name}>
          <h1>{bio?.name}</h1>
          <div className={description}>
            <p className={annot}>{bio?.bio.first}</p>
            <p>{bio?.bio.second}</p>
            <p>I am a {bio?.bio.third}.</p>
          </div>
        </div>
        <div className={resume}>
          <h2>Resume</h2>
          <div className={options}>
            <a
              href="https://drive.google.com/file/d/1KLA8k1fpqC_Gee03SJy2zAJrescoE83W/view?usp=sharing"
              download
              target="_blank"
              rel="noreferrer"
              className={option}
            >
              <button>
                <i className="bi bi-brightness-high-fill"></i> Light
              </button>
            </a>
            <a
              href="https://drive.google.com/file/d/1cEHqhB6fA-XiYX8r_d4c_GXl4t7Hiy3w/view?usp=sharing"
              download
              target="_blank"
              rel="noreferrer"
              className={option}
            >
              <button>
                <i className="bi bi-moon-fill"></i> Dark
              </button>
            </a>
          </div>
          <div className={version}>
            <p>
              Current version <span>v{bio?.resume.version}</span>
            </p>
            <p>Available to get hired! Want to connect?</p>
            <p>
              Go to{" "}
              <NavLink className={link} to="/connect">
                Connect
              </NavLink>{" "}
              page.
            </p>
          </div>
        </div>
        <Editor text={text} username={bio?.nickname} />
        <ProjectShow projectsList={bio?.allprojects} />
        <Skills skillsList={bio?.skills} tools={bio?.tools} />
      </div>
    );
  } else return <Loading />;
}

export default Home;
