import Slide from "components/slides/slide";
import Image from "next/image";
import slideTwoImage from "../../public/slides/slide2_gravity.svg";

export default function Slide2(props) {
  const altText = "Lines gravitating around globe illustraion";

  return (
    <Slide image={slideTwoImage} altText={altText} {...props}>
      <div className="xs:block flex hidden justify-center items-center mx-auto w-96 text-center md:hidden md:p-12 md:mt-0">
        <Image src={slideTwoImage} alt={altText} />
      </div>
      <br></br>
      <div className="xs:text-3xl px-4 text-xl font-extrabold md:px-0 md:w-4/5 md:text-5xl">
        The secret: gravity
      </div>
      <div className="xs:text-lg pb-0 px-4 w-full tracking-wide leading-relaxed md:px-0 md:w-4/5 md:text-xl">
        <div>
          <span className="font-bold">Gravity</span> is the force of attraction
          that holds the community together, drawing members into orbit and
          pulling them toward the community&apos;s center.
        </div>
        <br></br>
        <div>
          Gravity weakens when the community grows too fast. New members who
          can&apos;t be integrated will leave quickly or stay and drive away
          valuable long-time members. How do we avoid this and keep gravity
          high?
        </div>
      </div>
    </Slide>
  );
}
