import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";
import {SearchIcon, ShoppingBagIcon, UserIcon} from "@heroicons/react/24/outline"; 
const Header = () => {
  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative mt-0.5 h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100">
            <Image src={logo} alt="logo" />
          </div>
        </Link>
      </div>
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <a className="headerLink">Product</a>
        <a className="headerLink">Explore</a>
        <a className="headerLink">Support</a>
        <a className="headerLink">Business</a>
      </div>
      <div className="">

        <svg
          className="headerIcon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
          <div className="relative cursor-pointer">
            <span className="absolute -right-1 -top-1">5</span>
          </div>
        </svg>
      </div>
    </header>
  );
};

export default Header;
