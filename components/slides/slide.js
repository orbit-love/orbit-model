import Image from "next/image";

export default function Slide({
  children,
  image,
  altText,
  needsLargerImageSize,
  lastSlide,
}) {
  const preventDragHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="py-12 w-full md:px-20">
      <div
        className={`${
          lastSlide ? "justify-center" : "justify-start"
        } flex flex-col md:flex-row items-center pt-16 md:px-0 md:pb-16 pb-8 max-w-[1200px] mx-auto`}
      >
        <div className="flex flex-col mb-4 space-y-9 w-full md:w-3/5">
          {children}
        </div>

        {image && (
          <div
            className={`hidden absolute ${
              needsLargerImageSize ? "right-6 w-1/2" : "right-24 w-2/5"
            } text-center md:block md:mt-0`}
          >
            <Image src={image} alt={altText} onDragStart={preventDragHandler} />
          </div>
        )}
      </div>
    </div>
  );
}
