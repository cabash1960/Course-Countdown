import Button from "./button";
import { useFadeinSection } from "../hooks/useFadeinSection";
import AvatarGroupExample from "./avatarGroupExample";

function Footer() {
  const { ref, visible } = useFadeinSection();
  const year = new Date().getFullYear();

  return (
    <footer
      ref={ref}
      id="register"
      className={`
        px-8 lg:px-16
        bg-purple-500
        pt-20
        min-h-[70vh]
        flex items-center justify-center
        transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <div className="w-full max-w-6xl flex flex-col items-center gap-10 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-white text-shadow-purple-300">
          Learn animation, work remotely, and earn well
        </h2>

        <Button className="lg:w-fit">Click Here To Register</Button>

        <AvatarGroupExample />

        <div className="w-full h-px bg-purple-300/40 mt-8" />

        <div className="w-full flex flex-col gap-4 text-sm text-purple-200">
          <p className="text-purple-300">
            © {year} Animation Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
