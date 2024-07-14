import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./BottomTabNav.css";
import { GoPerson } from "react-icons/go";
import { IoIosCall } from "react-icons/io";
import { FaCog } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FcPlus } from "react-icons/fc";
import { useCalls } from "../../context/CallsContext";
const BottomTabNav = () => {
  const location = useLocation();
  const { unArchivedCalls, archivedCalls } = useCalls();
  const totalMissedCall =
    location.pathname === "/" && unArchivedCalls.length
      ? unArchivedCalls.length
      : location.pathname === "/all-calls" && archivedCalls.length
      ? archivedCalls.length
      : 0;
  return (
    <div className="bottom-bar">
      <ul>
        <li>
          <Link
            to="/"
            className={
              location.pathname === "/" || location.pathname === "/all-calls"
                ? "active"
                : ""
            }
          >
            <div className="io-call">
              <IoIosCall className="icon" />
              {totalMissedCall > 0 && (
                <div className="number-calls">{totalMissedCall}</div>
              )}
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/contacts"
            className={location.pathname === "/contacts" ? "active" : ""}
          >
            <GoPerson className="icon" />
          </Link>
        </li>
        <li className="big-icon">
          <FcPlus style={{ fontSize: "5em" }} />
        </li>
        <li>
          <Link
            to="/settings"
            className={location.pathname === "/settings" ? "active" : ""}
          >
            <FaCog className="icon" />
          </Link>
        </li>
        <li>
          <Link
            to="/dot-fill"
            className={location.pathname === "/dot-fill" ? "active" : ""}
          >
            <GoDotFill className="icon" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BottomTabNav;
