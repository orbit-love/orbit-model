import Slide from "components/slides/slide";

export default function Slide4(props) {
  const image = "/slides/love_and_reach.svg";
  return (
    <Slide image={image} {...props}>
      <div className="py-12 md:py-0">
        <div className="xs:block flex hidden justify-center items-center px-12 mt-8 mx-auto w-96 md:hidden md:p-12 md:mt-0">
          <img src={image} />
        </div>
        <div className="xs:text-3xl px-10 text-xl font-extrabold md:px-0 md:w-4/5 md:text-5xl">
          Increase love and reach
        </div>
        <br></br>
        <div className="xs:text-lg pb-8 px-10 w-full md:px-0 md:w-4/5 md:text-xl md:tracking-wide md:leading-relaxed">
          <div>
            Love is a measure of a member&apos;s involvement, based on what
            activities they do and how often. Reach is a measure of the
            member&apos;s influence and degree of connectness with other
            members.
          </div>
          <br></br>
          <div>
            Community builders create programs that increase the love and reach
            of their members. This creates value for members and increases
            gravity.
          </div>
        </div>
      </div>
    </Slide>
  );
}
