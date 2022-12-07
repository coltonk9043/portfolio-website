import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner_body">
        <div className="left_anchor">
            <h1 >Hi, I'm Colton</h1>
            <h3>3D printing enthusiast, video game lover, computer programmer, and developer from Sarnia, Ontario. </h3>
        </div>
        <div className="right_anchor">
            <img src="portait.png" className="banner_img"></img>
        </div>
        <div className="social_media">
            <a href="https://github.com/coltonk9043" target="_blank" rel="noopener noreferrer" className="socialLink"><img src="github.png" className="social_media_img"></img></a>
            <a href="https://www.linkedin.com/in/colton-kennedy-219b921b7/" target="_blank" rel="noopener noreferrer" className="socialLink"><img src="linkedin.png" className="social_media_img"></img></a>
        </div>
    </div>
  );
};

export default Banner;