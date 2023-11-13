import React from "react";
import HomeCSS from './home.module.css'


export default function Home() {
    return (
      <div className={HomeCSS.container}>
        <header className={HomeCSS.header}>Will Speakman</header>
        <p className={HomeCSS.body}>
         Full Stack Web Developer
        </p>
      </div>
    );
  }