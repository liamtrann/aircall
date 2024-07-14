import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCall } from "react-icons/io";

const Navbar = () => {
  const location = useLocation();
  const links = [
    { path: "/", label: "Inbox" },
    { path: "/all-calls", label: "All Calls" },
  ];
  return (
    <nav>
      <ul>
        <li>
          <Link className="activity" to={"/"}>
            <IoIosCall style={{ fontSize: "2em" }} />
            <div style={{ marginLeft: "2px", fontSize: "20px" }}>Activity</div>
          </Link>
        </li>
        {links.map((link, index) => (
          <li
            key={index}
            className={location.pathname === link.path ? "active" : ""}
          >
            <Link to={link.path}>
              {link.icon &&
                React.createElement(link.icon, { style: { fontSize: "2em" } })}
              {link.label && <span className="nav-text">{link.label}</span>}
            </Link>
          </li>
        ))}
        <li>
          <Link>
            <GiHamburgerMenu style={{ fontSize: "1em" }} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
