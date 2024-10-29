import React from 'react';
import './node.scss'; 
import portrait from '../../assets/photos/portrait.jpg';
import logoHTML from '../../assets/logo/logoHTML.png';
import logoCSS from '../../assets/logo/logoCSS.png';
import logoJS from '../../assets/logo/logoJS.png';
import logoGithub from '../../assets/logo/github-mark.png';
import logoFigma from '../../assets/logo/logoFigma.png';
import logoNode from '../../assets/logo/logoNode.png';
import logoSass from '../../assets/logo/logoSass.png';
import logoReact from '../../assets/logo/logoReact.png';
import logoMDB from '../../assets/logo/logoMDB.png';

const logos = {
    portrait,
    logoHTML,
    logoCSS,
    logoJS,
    logoGithub,
    logoFigma,
    logoNode,
    logoSass,
    logoReact,
    logoMDB,
  };

  const NodeComponent = ({ data }) => {
    return (
        <div className={`node ${data.logo === 'portrait' ? 'portrait-node' : ''}`}>
          <img 
            src={logos[data.logo]}
            alt={data.label}
            className="node-logo"
          />
          <div className="node-label">{data.label}</div>
        </div>
      );
  };
  
  export default NodeComponent;