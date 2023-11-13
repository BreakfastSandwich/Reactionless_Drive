import React from "react";
import PortfolioCSS from './portfolio.module.css'


export default function Portfolio() {
    return (
      <div className={PortfolioCSS.container}>
        <h1 className={PortfolioCSS.container}>Portfolio</h1>
        <p className={PortfolioCSS.container}>
          Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
          Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
          mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
          lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
          imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
          in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
        </p>
      </div>
    );
  }
  