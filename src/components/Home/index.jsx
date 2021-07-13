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
import dark from "../../assets/resume/v4-dark.pdf";
import light from "../../assets/resume/v4-light.pdf";
import { NavLink } from "react-router-dom";
import Editor from "./components/Editor";
import ProjectShow from "./components/ProjectShow";
import Skills from "./components/Skills";

function Home() {
  const [bio, setBio] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch("/biodata.json")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setBio(data);
        });
    };
    fetchData();
  }, []);

  const text = `<p><code>/* A program to print interests and
hobbies of Mr. Shahanwaz */</code></p><br>

<p><code>/* Assume that all header files are included */</code></p>
<br>
<pre>
var static <span>main</span>():
    vector<hobby> bigList;
    for(auto i=0; infinite; i++):
        bigList.push_back(<span>thinkAdd</span>());
        <span>alongWithSomeCoolStuffs</span>();
    for(auto _hobby in bigList):
        printf("%ho\\n", _hobby);
    <span>thanksForReadingThis</span>();
end main;
export default <span>main</span>;
<pre>

// O/P - 
  ${bio?.terminal?.hobbies[0]}
  ${bio?.terminal?.hobbies[1]}
  ${bio?.terminal?.hobbies[2]}
  ${bio?.terminal?.hobbies[3]}
  ${bio?.terminal?.hobbies[4]}
`;

  return (
    <div className={home}>
      <div className={name}>
        <h1>{bio?.name}</h1>
        <div className={description}>
          <p className={annot}>{bio?.bio.first}</p>
          <p>{bio?.bio.second}</p>
          <p>{bio?.bio.third}</p>
        </div>
      </div>
      <div className={resume}>
        <h2>Resume</h2>
        <div className={options}>
          <a
            href={light}
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
            href={dark}
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
}

export default Home;
