// import { openWebinarJam } from "../hooks/openWebinar";

function Button({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      // onClick={openWebinarJam}
      // onClick={openWebinarJam}
      className={`bg-yellow-300 hover:bg-yellow-500 text-purple-900 font-semibold text-md lg:text-lg   lg:py-5 lg:px-10 py-3 cursor-pointer px-6 rounded-lg shadow-md transition duration-300  ${className}`}
    >
      {" "}
      <a
        href="https://ghenghenacademy.selar.com/430z1k"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </button>
  );
}

export default Button;
