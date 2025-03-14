import React from "react";
import { TfiTwitter } from "react-icons/tfi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const footerItems = [
    {
      title: "Privacy Notice",
      link: "/privacy-notice",
    },
    {
      title: "Terms of Service",
      link: "/terms-of-service",
    },
    {
      title: "Cookie Policy",
      link: "/cookie-policy",
    },
    {
      title: "Company Information",
      link: "/company-information",
    },
    {
      title: "Cookie Preferences",
      link: "/cookie-preferences",
    },
  ];

  const socialMedia = [
    {
      icon: <TfiTwitter size={22} />,
      link: "https://twitter.com",
    },
    {
      icon: <FiFacebook size={22} />,
      link: "https://facebook.com",
    },
    {
      icon: <FaInstagram size={22} />,
      link: "https://instagram.com",
    },
  ];

  return (
    <div className="w-full bg-[var(--secondary-background)] py-8">
      <div className="flex items-center justify-center gap-7 text-white">
        {footerItems.map((item, index) => (
          <button
            key={index}
            className="text-lg font-medium hover:text-[var(--primary-hover-foreground)] transition-all duration-400 cursor-pointer"
          >
            {item.title}
          </button>
        ))}
      </div>
      <hr className="text-[var(--secondary-border-color)] my-5" />
      <div className="flex flex-col items-center text-lg font-light">
        <p>Copyright © GameQuest, Inc. All rights reserved</p>
        <div className="flex items-center gap-3 mt-5 text-white">
          {socialMedia.map((item, index) => (
            <button
              key={index}
              className="p-2 border rounded-md border-[var(--secondary-border-color)] hover:text-[var(--primary-hover-foreground)] transition-all duration-400 cursor-pointer hover:border-[var(--primary-hover-foreground)]"
            >
              {item.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
