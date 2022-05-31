import Slide from "components/slides/slide";

export default function Slide5(props) {
  const image = "/slides/organize_orbit_levels.svg";
  return (
    <Slide image={image} {...props}>
      <div className="py-12 md:py-0">
        <div className="flex justify-center items-center px-16 mx-auto w-96 md:hidden md:p-12 md:mt-0">
          <img src={image} />
        </div>
        <br></br>
        <div className="px-10 text-3xl font-extrabold tracking-wide md:px-0 md:w-5/6 md:text-5xl">
          Organize with orbit levels
        </div>
        <br></br>
        <div className="px-10 w-full text-lg tracking-wide leading-relaxed md:px-0 md:w-4/5 md:text-xl">
          <div>
            Every community member deserves the right experience. Design
            programs that engage members appropriately according to their orbit
            level, based on their love.
          </div>
          <br></br>
          <div>
            Use orbit levels to power rewards, recognition, and incentives. Each
            orbit level is a milestone that members reach along their community
            journey.
          </div>
        </div>
      </div>
    </Slide>
  );
}
