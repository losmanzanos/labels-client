import React from "react";
import Magic from "../images/magic.gif";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import "./Info.css";

const Info = () => {
  return (
    <div class="explanation">
      <h2 className="about">How does Harold work?!</h2>
      <img src={Magic} id="Magic" alt="Magic" />
      <br />
      <p>
        Actually, Harold relies mainly on Google to help him with his vision...
      </p>
      <p>
        Once you register and login, all of the images that you upload are
        stored in <a href="https://cloud.google.com/storage">Google Cloud</a>.
        Google Cloud creates a unique URL for every object, which is then used
        to query the{" "}
        <a href="https://cloud.google.com/vision">Cloud Vision API</a>. Harold
        then takes the array of possible image features and returns the first in
        the index (this has the highest probability of actually matching your
        image, however machine learning can be a fickle beast, so I aplogize if
        you don't get the result you intended... 🤦).
      </p>
      <br />
      <h3>Potential Use Cases</h3>
      <br />
      <li>
        Traveling abroad (snap a photo of that meal before you commit to eating
        it...)
      </li>
      <li>
        Read the Kanji symbol on your friend's back, and let them know if it
        says "Power" or "Pizza"
      </li>
      <p>The possibilities are endless...</p>
      <p id="gh">
        If you want to learn more about Harold, check out my GitHub!
      </p>

      <div>
        <a
          href="https://github.com/losmanzanos"
          target="_blank"
          rel="noreferrer"
        >
          <img id="icon" src={github} alt="github" />
        </a>
      </div>

      {/* <a
          href="https://www.linkedin.com/in/chad-moravec/"
          target="_blank"
          rel="noreferrer"
        >
          <img id="icon" src={linkedin} alt="linkedin" />
        </a> */}
    </div>
  );
};

export default Info;
