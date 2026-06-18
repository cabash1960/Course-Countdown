import Button from "./button";
import { useFadeinSection } from "../hooks/useFadeinSection";

function About() {
  const { ref, visible } = useFadeinSection();
  return (
    <div
      ref={ref}
      className={` bg-purple-100  min-h-3/4 p-8 lg:px-16 lg:py-20  py-10 ${visible ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}
    >
      <div className="max-w-7xl grid lg:grid-cols-2 gap-4 mx-auto">
        <div className="sm:p-4 lg:self-e">
          <img
            // src="https://res.cloudinary.com/dfsk9idjx/image/upload/c_crop,g_north_west,h_1253,w_1880/Gemini_Generated_Image_76wvm76wvm76wvm7_t0ijp5"
            src="https://res.cloudinary.com/dfsk9idjx/image/upload/c_crop,g_north_west,h_1253,w_1800,y_110/ar_1:1,c_auto/hi_dammy_logo_copy.jpg_fcicn4.jpg"
            alt="Ceo-image"
            className="rounded-3xl md:shadow-[-10px_10px_0_rgba(139,92,246,0.5)]"
          />
        </div>
        <div className="flex flex-col text-center gap-6 p-2 justify-center items-center">
          <h2 className="text-3xl lg:text-5xl text-purple-900 font-medium  ">
            About Damilola Ajani
          </h2>
          <p className="text-left lg:text-2xl text-gray-700 ">
            Damilola Ajani is a Creative Director, animator, and founder of
            Ghenghen Jokes on YouTube. He is known for creating engaging
            animated content that combines humor, storytelling, and creativity.
            With extensive experience in animation and digital media, he
            specializes in creative direction, character development, and
            content production that connects with diverse audiences.
          </p>
          <Button className="mt-4">Enroll Now </Button>
        </div>
      </div>
    </div>
  );
}

export default About;
