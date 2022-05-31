import Link from "next/link";
import Slide from "components/slides/slide";
import BaseButton from "components/base_button";

export default function Slide7(props, onNext) {
  return (
    <Slide lastSlide={true} {...props}>
      <div className="text-4xl font-extrabold text-center md:text-5xl">
        Mission complete!
      </div>
      <div className="px-10 mx-auto w-full text-lg tracking-wide leading-relaxed text-center md:px-8 md:w-4/5">
        <p>
          Congratulations, you now have a 30,000km view of the Orbit Model.
          Balance gravity and growth, increase the love and reach of your
          members, and watch your community scale to the moon.
        </p>
        <br></br>
        <p>
          Ready to try it? The guides on this site will walk you through each
          concept in detail. Good luck!
        </p>
      </div>
      <div className="mx-auto w-3/5 text-center">
        <Link href="/introduction" passHref>
          <button className="p-4 font-semibold text-[#1E1449] bg-[#A691FF] rounded rounded-sm hover:opacity-60">
            Next: Read the guides
          </button>
        </Link>
      </div>
    </Slide>
  );
}
