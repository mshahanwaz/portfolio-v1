import React from "react";
import { NavLink } from "react-router-dom";
import {
  activeLink,
  link,
  flex,
  header,
  pic,
  picWrapper,
  space,
} from "../styles/header.module.css";
import profile_pic from "../assets/profile_pic.png";

function Header() {
  return (
    <div className={header}>
      <div className={picWrapper}>
        <img src={profile_pic} className={pic} alt="Mohammad Shahanwaz" />
      </div>
      <div>
        <ul className={flex}>
          <li className={space}>
            <NavLink exact to="/" className={link} activeClassName={activeLink}>
              Home
            </NavLink>
          </li>
          <li className={space}>
            <NavLink to="/blogs" className={link} activeClassName={activeLink}>
              Blogs
            </NavLink>
          </li>
          <li className={space}>
            <NavLink
              to="/projects"
              className={link}
              activeClassName={activeLink}
            >
              Projects
            </NavLink>
          </li>
          <li className={space}>
            <NavLink
              to="/connect"
              className={link}
              activeClassName={activeLink}
            >
              Connect
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
