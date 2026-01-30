import { svg } from "./svgs";
import Svg from "./svg";
import { useFadeinSection } from "../hooks/useFadeinSection";
const details = [
  {
    title: "Character Creation & Animation",
    description:
      "I'll show you step by step on how to create characters, and make them move without needing advanced art skills.",
    svg: svg.svg1,
  },
  {
    title: "A Proven Workflow That Gets Results",
    description:
      "Discover my tested step-by-step animation strategy for creating animations that stand out and how to position your work to go viral.",
    svg: svg.svg2,
  },
  {
    title: "Monetization & Remote Career Blueprint",
    description:
      "Learn how to turn animation into a remote career, with multiple income streams earning $300 - $1,500 per month doing what you create.",
    svg: svg.svg3,
  },
];
function Benefits() {
  const { ref, visible } = useFadeinSection();
  return (
    <section
      ref={ref}
      id="benefits"
      className={`relative  px-8 py-20 lg:px-16  min-h-screen bg-purple-500  justify-center flex flex-col gap-10
        transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <div
        className="absolute w-80 h-80 opacity-15 blur-2xl"
        style={{
          background:
            "radial-gradient(ellipse, rgba(251, 191, 36, 0.4) 0%, transparent 70%)",
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
          bottom: "-8rem",
          left: "-6rem",
          zIndex: 0,
        }}
      />

      {/* Center Top Accent */}
      <div
        className="absolute w-72 h-72 rounded-full opacity-10 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(199, 210, 254, 0.5) 0%, transparent 70%)",
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 0,
        }}
      />

      {/* Geometric Pattern Overlay - Dots */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1.5px, transparent 1.5px)",
          backgroundSize: "40px 40px",
          zIndex: 0,
        }}
      />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-3"
        style={{
          backgroundSize: "50px 50px",
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          zIndex: 0,
        }}
      />

      {/* Diagonal Lines Bottom Right */}
      <div
        className="absolute w-96 h-96 opacity-5"
        style={{
          background: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255, 255, 255, 0.1) 10px,
            rgba(255, 255, 255, 0.1) 20px
          )`,
          bottom: "10%",
          right: "5%",
          zIndex: 0,
        }}
      />

      {/* Floating Circles */}
      <div
        className="absolute w-24 h-24 rounded-full border-2 border-white/10"
        style={{
          top: "20%",
          left: "10%",
          zIndex: 0,
        }}
      />

      <div
        className="absolute w-16 h-16 rounded-full border-2 border-yellow-300/10"
        style={{
          top: "60%",
          right: "15%",
          zIndex: 0,
        }}
      />

      <div
        className="absolute w-32 h-32 rounded-full border-2 border-indigo-300/10"
        style={{
          bottom: "25%",
          left: "8%",
          zIndex: 0,
        }}
      />

      <h2 className="text-4xl lg:text-6xl z-10 font-bold text-center text-yellow-300">
        What Will You Learn?
      </h2>

      <div className=" mt-10 z-10">
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {details.map((item, index) => (
            <li
              key={index}
              className="bg-purple-50 text-gray-700 flex flex-col gap-4  p-7 rounded-3xl shadow-lg hover:scale-105 transition-transform   lg:p-10 lg:w-full duration-300 "
            >
              {item.svg}
              <h3 className=" text-2xl  lg:text-3xl font-semibold ">
                {item.title}
              </h3>

              <p className="font-sans lg:text-lg ">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div></div>
      <Svg />
    </section>
  );
}

export default Benefits;
