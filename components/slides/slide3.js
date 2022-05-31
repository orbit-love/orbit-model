import Slide from "components/slides/slide";

export default function Slide3(props) {
  const image = "slides/slide3_deepen_love.svg";
  return (
    <Slide image={image} needsLargerImageSize={true} {...props}>
      <div className="py-12 md:py-0">
        <div className="pt-6 pb-12 md:py-0">
          <div className="mb-4 mx-auto px-0 w-[425px] md:hidden md:p-12 md:mt-0">
            <img src={image} />
          </div>
          <br></br>
          <div className="px-10 text-3xl font-extrabold md:px-0 md:w-4/5 md:text-5xl">
            Deepen the love
          </div>
          <br></br>
          <div className="px-10 w-full text-lg tracking-wide leading-relaxed md:px-0 md:w-4/5 md:text-xl">
            <div>
              To make room for growth, we must give members clear opportunities
              to deepen their involvement—we call it love—and move further
              towards the community&apos;s center.
            </div>
            <br></br>
            <div>
              The speed at which this happens makes up a community&apos;s
              gravity metric. This metric helps determine readiness for growth
              and find bottlenecks where members aren&apos;t moving in.
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
