import React from "react";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import "./Navigattion.css";

export const Navigattion = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <div className="nav-wrapper w-fit overflow-hidden">
      {/*off-screen menu */}
      <div
        className={`${
          activeMenu ? "right-0" : "-right-[400px]"
        } h-screen w-full  max-w-[400px] bg-zinc-800 absolute top-0 duration-500`}
      >
        <ul className="text-white p-5 text-2xl font-bold mt-20">
          <li className="mb-5">
            <Link to="/"> Home </Link>
          </li>
          <li className="mb-5">
            <Link to="/profile"> Profile</Link>
          </li>
          <li className="mb-5">
            <Link to="/settings"> Settings</Link>
          </li>
          <li className="mb-5">
            <Link to="/report"> Result & Report</Link>
          </li>
          <li className="mb-5">
            <Link to="/leaderboard"> Leaderboard</Link>
          </li>
        </ul>
      </div>

      {/*Hamburger Icon */}
      <nav className="flex justify-between">
        <div
          onClick={() => {
            setActiveMenu(!activeMenu);
          }}
          className={`${activeMenu && "active"} ham-menu`}
        >
          <span className=""></span>
          <span className=""></span>
          <span className=""></span>
        </div>
      </nav>
    </div>
  );
};

// return (
//     <>
//       <div>Navigattion</div>
//       <ul>
//         <li>Profile</li>
//         <li>Settings</li>
//         <li>Result and Report</li>
//         <li>Leaderboard</li>
//       </ul>

//     </>
//   )
