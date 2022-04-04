import React from "react";
import "./style.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatIcon from '@mui/icons-material/Chat';
export default function About() {
  return (
    <div>
      <h1 className="title">About</h1>
      <div className="row">
        <div className="col-sm-6">
          <img src="./img/about.png" />
        </div>
        <div className="col-sm-6 about-right">
          <h3>LOREM</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,
            nihil quas nesciunt obcaecati a facere.Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Animi, nihil quas nesciunt obcaecati a
            facere.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Animi, nihil quas nesciunt obcaecati a facere.
          </p>
          <div className="row pt-5">
            <div className="col-sm-6">
              <span className="about-comment">
                <ThumbUpIcon />
              </span>
              <h4 className="pt-5">Lorem</h4>
              <p className="pt-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,
              </p>
            </div>
            <div className="col-sm-6">
              <span className="about-comment">
                <ChatIcon />
              </span>
              <h4 className="pt-5">Lorem</h4>
              <p className="pt-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
