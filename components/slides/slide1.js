import Slide from "components/slides/slide";

export default function Slide1(props) {
  const image = "/slides/atomic_heart.svg";
  return (
    <Slide image={image} {...props}>
      <div className="flex justify-center items-center px-12 mt-8 mx-auto w-96 text-center md:hidden md:p-12 md:mt-0">
        <img src={image} />
      </div>
      <div className="px-10 w-full text-3xl font-extrabold md:px-0 md:w-4/5 md:text-5xl">
        Grow the community,
        <br /> keep the soul.
      </div>
      <div className="px-10 w-full text-lg tracking-wide leading-relaxed md:px-0 md:w-4/5 md:text-xl">
        Legendary communities have one thing in common: they keep members happy
        and fulfilled, even at scale. Take a tour of the Orbit Model to see how
        it&apos;s possible.
      </div>
    </Slide>
  );
}
