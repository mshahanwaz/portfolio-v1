import React, { useEffect, useState } from "react";
import {
  connect,
  social,
  media,
  message,
} from "../../styles/connect.module.css";
import { db } from "../../firebase";
import firebase from "firebase";

function Connect() {
  const [bio, setBio] = useState(null);
  const [by, setBy] = useState("");
  const [email, setEmail] = useState("");
  const [messageNew, setMessageNew] = useState("");

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

  const returnDate = () => {
    var dt = new Date();
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var options = {
      hour: "2-digit",
      minute: "2-digit",
    };
    var d = dt.toLocaleTimeString("en-US", options).toString() + " on ";
    d += dt.getDate() + " " + months[dt.getMonth()] + ", " + dt.getFullYear();
    return d;
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (email && by && message) {
      db.collection("messages").add({
        message: messageNew,
        by,
        email,
        on: returnDate(),
        site: "https://imshahanwaz.web.app",
        checked: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      alert("Sent successfully!");
      setBy("");
      setEmail("");
      setMessageNew("");
    } else alert("Fill empty spaces first to send the message.");
  };

  return (
    <div className={connect}>
      <h2>Connect</h2>
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
      <span>- OR -</span>
      <p>For any query or suggestions, direct message me here:</p>
      <div className={message}>
        <form onSubmit={sendMessage}>
          <input
            type="text"
            placeholder="Name"
            value={by}
            onChange={(e) => setBy(e.target.value)}
          />
          <input
            type="email"
            placeholder="for@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            type="text"
            placeholder="Write here..."
            value={messageNew}
            onChange={(e) => setMessageNew(e.target.value)}
          ></textarea>
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
