// src/components/Social.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Social = ({ containerStyles, iconStyles }) => {
  const socials = [
    { icon: <FaGithub />, link: 'https://github.com/joy-Bsc' },
    { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/joy-dhar/' },
    { icon: <FaTwitter />, link: 'https://twitter.com/' },
    { icon: <FaFacebook />, link: 'https://facebook.com/Iamjoydhar' }
  ];

  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <a key={index} href={item.link} className={iconStyles} target="_blank" rel="noopener noreferrer">
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Social;