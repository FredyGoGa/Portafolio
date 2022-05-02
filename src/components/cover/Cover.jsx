import React from 'react';
import "./cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Fredy Gonzalez Garcia</h1>
      <p>React js Developer | ADSI technology | Content Creator | Entrepeneur </p>
    </div>
  )
}

export default Cover