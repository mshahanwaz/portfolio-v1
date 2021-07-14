import React, { useEffect, useState } from "react";
import { footer, name, annot } from "../styles/footer.module.css";

function Footer() {
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

  return (
    <div className={footer}>
      <h3 className={name}>{bio?.name}</h3>
      <div className={annot}>
        <p>Made with </p>
        <span>♥</span>
      </div>
    </div>
  );
}

export default Footer;
