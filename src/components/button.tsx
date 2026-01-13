function Button({
  children,
  className,
}: {
  children?: React.ReactNode;
  className: string;
}) {
  return (
    <button
      className={`bg-yellow-300 hover:bg-yellow-500 text-purple-900 font-semibold text-md lg:text-lg   lg:py-5 lg:px-10 py-3 px-6 rounded-lg shadow-md transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
