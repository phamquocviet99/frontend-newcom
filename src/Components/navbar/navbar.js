import { React, useRef } from "react";
import "./navbar.css";
import {
  FaBars,
  FaArrowAltCircleUp,
  FaArrowAltCircleLeft,
} from "react-icons/fa";
import { withTranslate } from 'react-redux-multilingual'
function Navbar(props) {
  const { translate } = props;
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const listItem = [
    {
      id: 1,
      name: translate('homepage'),
      link: "/trang-chu",
    },
    {
      id: 2,
      name:  translate('about'),
      link: "/gioi-thieu",
    },
    {
      id: 3,
      name:  translate('collections'),
      link: "/phong-cach",
    },
    {
      id: 4,
      name: translate('product'),
      link: "/san-pham",
    },

    {
      id: 7,
      name: translate('recruitment'),
      link: "/tuyen-dung",
    },
    {
      id: 8,
      name:  translate('contact'),
      link: "/lien-he",
    },
  ];
  return (
    <header>
      <a href="/">
        <img
          className="img-logo-navbar"
          src={require("../../Images/logo/LOGO.png")}
          alt="logo"
        />
      </a>

      <nav ref={navRef}>
        {listItem.map((item, index) => (
          <a
            href={item.link}
            key={item.id}
            className={
              "/" + window.location.pathname.split("/").slice(1)[0] ===
              item.link
                ? "text-active"
                : "text"
            }
            style={{ textDecoration: "none" }}
          >
            {item.name}
          </a>
        ))}

        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaArrowAltCircleLeft />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
}

export default withTranslate(Navbar);
