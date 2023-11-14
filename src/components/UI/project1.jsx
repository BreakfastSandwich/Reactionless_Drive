import React from "react";
import ProjectCSS from './project.module.css'

export default function Project1() {
    return (
        <div className={ProjectCSS.card}>
        <div className={ProjectCSS.header}>Mern Stack</div>
        <div className={ProjectCSS.images}><img src="" alt="" /></div>
        <div className={ProjectCSS.about}></div>
        <a href="" className={ProjectCSS.gitHubBtn}>Check out the Code</a>
        <a href="" className={ProjectCSS.deployedBtn}>Check out the Deployed Site</a>
      </div>
    );
  }