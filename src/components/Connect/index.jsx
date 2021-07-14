import React, { useEffect, useState } from "react";
import {
  connect,
  social,
  media,
  message,
} from "../../styles/connect.module.css";

function Connect() {
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

  return (
    <div className={connect}>
      <h3>Connect</h3>
      <p>Follow me on different social media:</p>
      <div className={social}>
        <div className={media}>
          <a
            href={bio?.social?.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
        </div>
        <div className={media}>
          <a
            href={bio?.social?.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
        <div className={media}>
          <a
            href={bio?.social?.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram"></i>
          </a>
        </div>
        <div className={media}>
          <a
            href={bio?.social?.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-twitter"></i>
          </a>
        </div>
      </div>
      <span>OR</span>
      <p>For any query or suggestions, ping me directly here:</p>
      <div className={message}>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="for@example.com" />
          <textarea type="text" placeholder="Write here..."></textarea>
          <button type="submit">
            <i className="bi bi-chat-left-quote-fill"></i>
            <p>Send</p>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Connect;
