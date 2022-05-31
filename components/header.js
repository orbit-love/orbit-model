import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition } from "react-transition-group";
import { purple } from "lib/gradients";

import Link from "next/link";
import MobileNav from "./mobile_nav";

export default function Header() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <nav className="header-background flex fixed top-0 z-10 z-20 items-center py-5 px-8 w-full whitespace-nowrap">
        <div>
          <button
            className="inline-flex justify-center p-3 mr-1 ml-auto w-10 text-white rounded outline-none hover:text-white hover:bg-slate-700 md:hidden"
            onClick={handleClick}
          >
            {active ? (
              <FontAwesomeIcon icon="times" size="1x" />
            ) : (
              <FontAwesomeIcon icon="bars" size="1x" />
            )}
          </button>
        </div>
        <Link href="/">
          <img src="/header_logo.svg" className="w-48 cursor-pointer" />
        </Link>

        <div className="flex-1" />

        <div className="hidden md:block">
          <div className="flex justify-end items-center">
            <Link href="/about">
              <a className="justify-center items-center py-2 px-3 w-full font-bold text-white rounded">
                About
              </a>
            </Link>
            <Link href="/introduction">
              <a className="justify-center items-center py-2 px-3 mr-4 w-full font-bold text-white rounded">
                Guides
              </a>
            </Link>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=orbit-love&repo=orbit-model&type=star&count=true"
              frameBorder="0"
              scrolling="0"
              width="100"
              height="20"
              title="GitHub"
              className="ml-3 mt-4 opacity-90 sm:mt-0 sm:ml-0"
            ></iframe>
          </div>
        </div>
      </nav>
      <div className={`${active ? "":"hidden"}`}>
        <CSSTransition in={active} timeout={400} classNames="mobile-nav">
          <MobileNav />
        </CSSTransition>
      </div>
    </div>
  );
}
