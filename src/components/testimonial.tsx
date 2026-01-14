import { useFadeinSection } from "../hooks/useFadeinSection";

function Testimonial() {
  const { ref, visible } = useFadeinSection();
  return (
    <section
      ref={ref}
      id="proof"
      className={`z-10 lg:px-16  px-8 py-20 text-center  justify-center flex flex-col items-center bg-purple-50 gap-8
        transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <div className="text-center  justify-center flex flex-col items-center gap-3">
        <h2 className="text-3xl lg:text-6xl font-bold text-purple-900 leading-tight">
          My Multi-Platform Audience, <br /> Built Organically
        </h2>
        <p className="mt-4 lg:text-2xl lg:w-5/12 text-center text-gray-700">
          These pages show real growth from consistently applying the same
          animation strategies you’ll learn inside the course.
        </p>
      </div>
      <div className="mt-10 flex flex-col items-center gap-8 ">
        <div className="relative">
          <span className="absolute top-4 left-4 bg-purple-900 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-md">
            Facebook
          </span>
          <img
            className="  rounded-3xl shadow-lg"
            src="/fb.jpg"
            alt="Testimonial Graph"
          />
        </div>
        <div className="relative">
          <span className="absolute top-4 left-4 bg-white text-red-600 text-sm font-semibold px-4 py-1 rounded-full shadow-md">
            YouTube
          </span>
          <img
            className="  rounded-3xl shadow-lg"
            src="/yt.jpg"
            alt="Testimonial Graph"
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
