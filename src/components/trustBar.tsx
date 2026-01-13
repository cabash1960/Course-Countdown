import Svg from "./svg";

function TrustBar() {
  return (
    <section className="bg-purple-50 relative min-h-[50vh] flex flex-col items-center justify-center ">
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
