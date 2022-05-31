import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "components/head";
import Header from "components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Animator,
  ScrollContainer,
  ScrollPage,
  MoveIn,
  MoveOut,
} from "react-scroll-motion";
import Slide1 from "components/slides/slide1";
import Slide2 from "components/slides/slide2";
import Slide3 from "components/slides/slide3";
import Slide4 from "components/slides/slide4";
import Slide5 from "components/slides/slide5";
import Slide6 from "components/slides/slide6";
import Slide7 from "components/slides/slide7";
import { useInView } from "react-intersection-observer";

export default function HeroLayout() {
  // This is so that the react-scroll-motion library
  // works correctly within Next.js
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(typeof window !== undefined ? true : false);
  }, []);

  const preventDragHandler = (e) => {
    e.preventDefault();
  };

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const Icon = ({ name, href, icon }) => (
    <Link href={href} passHref>
      <a className="flex flex-col justify-center items-center mx-2 my-2 space-y-2 w-24 h-24 text-lg text-indigo-400 rounded-full border border-indigo-300 hover:text-white hover:bg-indigo-900 md:mx-4 md:my-4 md:w-32 md:h-32">
        <p>{icon && <FontAwesomeIcon icon={icon} size="2x" />}</p>
        <p className="font-semibold">{name}</p>
      </a>
    </Link>
  );

  return (
    <>
      <Head />
      {isBrowser && (
        <ScrollContainer snap="none" inView={inView}>
          {!inView && <Header />}
          <ScrollPage page={0}>
            <div className="flex flex-col justify-evenly items-center h-screen text-white">
              <div className="hidden md:block md:py-10"></div>
              <Animator animation={MoveOut(-1000, 0)}>
                <img
                  src="/cover_logo_orbit_model.svg"
                  className="mx-auto w-3/4"
                  onDragStart={preventDragHandler}
                />
              </Animator>
              {/* This ref is needed so that the app knows when to display Header */}
              <div ref={ref} className="absolute top-36"></div>

              <div className="hidden md:block">
                <div className="font-semibold text-center">
                  <div>Learn how to build and measure a thriving community</div>
                  <div>with the Orbit Model.</div>
                </div>
                <br></br>
                <div className="text-center">
                  <p>Scroll down to start guide</p>
                  <img src="/arrow_down.svg" className="mt-4 mx-auto" />
                </div>
              </div>
            </div>
          </ScrollPage>

          <ScrollPage page={1}>
            <div className="flex justify-center items-center h-screen text-white bg-[#1E1449]">
              <Slide1 />
            </div>
          </ScrollPage>
          <ScrollPage page={2}>
            <div className="flex justify-center items-center h-screen text-white bg-[#0F0A25]">
              <Slide2 />
            </div>
          </ScrollPage>
          <ScrollPage page={3}>
            <div className="flex justify-center items-center h-screen text-white bg-[#1E1449]">
              <Slide3 />
            </div>
          </ScrollPage>
          <ScrollPage page={4}>
            <div className="flex justify-center items-center h-screen text-white bg-[#0F0A25]">
              <Slide4 />
            </div>
          </ScrollPage>
          <ScrollPage page={5}>
            <div className="flex justify-center items-center h-screen text-white bg-[#1E1449]">
              <Slide5 />
            </div>
          </ScrollPage>
          <ScrollPage page={6}>
            <div className="flex justify-center items-center h-screen text-white bg-[#0F0A25]">
              <Slide6 />
            </div>
          </ScrollPage>
          <ScrollPage page={7}>
            <div className="flex justify-center items-center h-screen text-white bg-[#1E1449]">
              <Slide7 />
            </div>
          </ScrollPage>
          <ScrollPage page={8}>
            <div className="md:my-32"></div>
            <div className="overflow-y-auto pb-12 my-24 text-center md:px-8">
              <h1 className="px-6 text-3xl font-extrabold md:text-4xl">
                Speak the cosmic language
              </h1>
              <p className="px-6 my-4 mx-auto w-full text-lg md:my-6 md:my-12 md:w-2/3 md:text-xl">
                The model is a family of concepts designed to work together,
                giving your team a vocabulary and framework for visualizing how
                your community works.
              </p>
              <div className="my-12 mx-auto w-3/4 text-lg md:w-3/4">
                <div className="flex flex-wrap justify-center">
                  <Icon name="Gravity" href="/love"></Icon>
                  <Icon name="Love" href="/love"></Icon>
                  <Icon
                    name={
                      <span>
                        Orbit <br />
                        Levels
                      </span>
                    }
                    icon=""
                    href="/love/orbit-levels"
                  ></Icon>
                  <Icon name="Roles" href="/love/roles"></Icon>
                  <Icon name="Reach" href="/reach"></Icon>
                  <Icon name="Impact" href="/impact"></Icon>
                  <Icon name="...more" href="/introduction"></Icon>
                </div>
              </div>
            </div>
          </ScrollPage>
        </ScrollContainer>
      )}
    </>
  );
}
