import Button from "./button";
import Imgcomp from "./imgcomp";
import Svg from "./svg";
import AvatarGroupExample from "./avatar";

function Hero() {
  return (
    <section
      id="learn"
      className="min-h-screen section  bg-linear-to-r from-purple-900 via-purple-800 to-indigo-900 "
    >
      <div className="relative flex flex-col mx-auto mt-6 gap-12 items-center justify-center w-full px-8 lg:px-16 max-w-7xl py-10">
        <div
          className="absolute w-96 h-96 pointer-events-none
 rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)",
            top: "-10rem",
            right: "-10rem",
            zIndex: 0,
          }}
        />
        <div
          className="absolute  pointer-events-none
w-80 h-80 opacity-15 blur-2xl"
          style={{
            background:
              "radial-gradient(ellipse, rgba(251, 191, 36, 0.4) 0%, transparent 70%)",
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
            bottom: "-8rem",
            left: "-6rem",
            zIndex: 0,
          }}
        />
        <div
          className="absolute pointer-events-none
 w-80 h-80 opacity-15 blur-2xl"
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
          className="absolute pointer-events-none
 w-72 h-72 rounded-full opacity-10 blur-3xl"
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
          className="absolute pointer-events-none
 inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1.5px, transparent 1.5px)",
            backgroundSize: "40px 40px",
            zIndex: 0,
          }}
        />

        {/* Grid Pattern Overlay */}
        <div
          className="absolute pointer-events-none
 inset-0 opacity-3"
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
          className="absolute pointer-events-none
 w-96 h-96 opacity-5"
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
          className="absolute pointer-events-none
 w-24 h-24 rounded-full border-2 border-white/10"
          style={{
            top: "20%",
            left: "10%",
            zIndex: 0,
          }}
        />

        <div
          className="absolute pointer-events-none
 w-16 h-16 rounded-full border-2 border-yellow-300/10"
          style={{
            top: "60%",
            right: "15%",
            zIndex: 0,
          }}
        />

        <div
          className="absolute  pointer-events-none
 w-32 h-32 rounded-full border-2 border-indigo-300/10"
          style={{
            bottom: "25%",
            left: "8%",
            zIndex: 0,
          }}
        />
        <div className="z-10">
          <h1 className="text-4xl lg:text-7xl md:mt-15 text-center font-bold text-white ">
            Can't Draw?
          </h1>
          <p className="text-center text-yellow-300 lg:text-2xl text-md mt-3">
            You Can Animate, Earn, and Land Brand Deals in 30 Days
          </p>
        </div>

        <Imgcomp className="relative z-10" />

        <Button className="relative z-20 md:mt-5 ">
          Click Here To Register
        </Button>
        <AvatarGroupExample />
        <div></div>
        <div className="hidden lg:block"></div>
      </div>
      <Svg />
    </section>
  );
}

export default Hero;
