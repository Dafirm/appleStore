import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";
import  {ShoppingBagIcon, UserIcon} from "@heroicons/react/24/outline"; 


const Header = () => {
    const session = false;
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
      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
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
        </svg>
        <Link href="/checkout">
          <div className="relative cursor-pointer">
            <span
              className="absolute -right-1 -top-1 z-50 flex h-4 w-4 
            items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white"
            >
              5
            </span>
            <ShoppingBagIcon className="headerIcon" />
          </div>
        </Link>
        {session ? (
          <Image
            src={
              // session.user?.image ||
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            }
            alt=""
            className="cursor-pointer rounded-full"
            width={34}
            height={34}
            //onClick={() => signOut()}
          />
        ) : (
          <UserIcon
            className="headerIcon"
            // onClick={() => signIn()}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
