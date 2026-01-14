import Svg from "./svg";
import { useFadeinSection } from "../hooks/useFadeinSection";

function TrustBar() {
  const { ref, visible } = useFadeinSection();
  return (
    <section
      ref={ref}
      className={`
        transition-all duration-700 ease-out "bg-purple-50 relative min-h-[50vh] flex flex-col items-center justify-center
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <Svg />
      <div className=" z-10   px-7 lg:px-16 pt-20 lg:pt-20 text-center">
        <h2 className="text-4xl lg:text-6xl  font-bold text-purple-900">
          One Skill <br />
          Endless Opportunities
        </h2>
        <p className="mt-4 lg:mt-8 text-gray-700 lg:text-2xl">
          Work remotely, earn in multiple ways.
          <br />
          This is for you if you're ready to{" "}
          <a
            href="#"
            className="text-yellow-500 font-semibold transition hover:underline hover:text-yellow-700"
          >
            start
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export default TrustBar;
