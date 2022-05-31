import Slide from "components/slides/slide";

export default function Slide6(props) {
  const image = "/slides/flywheel_growth.svg";
  return (
    <Slide image={image} {...props}>
      <div className="py-12 md:py-0">
        <div className="flex justify-center items-center px-16 mt-8 mx-auto w-96 text-center md:hidden md:p-12 md:mt-0">
          <img src={image} />
        </div>
        <br></br>
        <div className="px-10 text-3xl font-extrabold md:px-0 md:w-4/5 md:text-5xl">
          Grow your business
        </div>
        <br></br>
        <div className="px-10 w-full text-lg tracking-wide leading-relaxed md:px-0 md:w-4/5 md:text-xl">
          <div>
            A thriving community makes every part of a business better. Happier
            customers, tighter product-market fit, stronger partnerships, and
            more revenue.
          </div>
          <br></br>
          <div>
            Flywheels connect community activity to business outcomes like
            awareness, hiring, and sales. Learn how to set each one up and
            measure the impact.
          </div>
        </div>
      </div>
    </Slide>
  );
}
