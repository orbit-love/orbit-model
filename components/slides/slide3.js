import Slide from "components/slides/slide";
import Image from "next/image";
import slideThreeImage from "../../public/slides/slide3_deepen_love.svg";

export default function Slide3(props) {
  const altText = "Points entering gravitational orbit illustration";

  return (
    <Slide
      image={slideThreeImage}
      altText={altText}
      needsLargerImageSize={true}
      {...props}
    >
      <div className="mb-4 hidden xs:block mx-auto px-0 w-[425px] md:hidden md:p-12 md:mt-0">
        <Image src={slideThreeImage} alt={altText} />
      </div>
      <br></br>
      <div className="xs:text-3xl px-4 text-xl font-extrabold md:px-0 md:w-4/5 md:text-5xl">
        Deepen the love
      </div>
      <div className="xs:text-lg px-4 w-full tracking-wide leading-relaxed md:px-0 md:w-4/5 md:text-xl">
        <div>
          To make room for growth, we must give members clear opportunities to
          deepen their involvement—we call it love—and move further towards the
          community&apos;s center.
        </div>
        <br></br>
        <div>
          The speed at which this happens makes up a community&apos;s gravity
          metric. This metric helps determine readiness for growth and find
          bottlenecks where members aren&apos;t moving in.
        </div>
      </div>
    </Slide>
  );
}
