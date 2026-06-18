function Imgcomp({ className }: { className?: string }) {
  const imageUrl = {
    // a: "https://res.cloudinary.com/dfsk9idjx/image/upload/v1781770244/a_ezfpyg.gif",
    a: "https://res.cloudinary.com/dfsk9idjx/image/upload/f_auto,q_auto/v1781770244/a_ezfpyg.gif",
    b: "https://res.cloudinary.com/dfsk9idjx/image/upload/f_auto,q_auto/v1781770264/b_qxqqld.gif",
    c: "https://res.cloudinary.com/dfsk9idjx/image/upload/f_auto,q_auto/v1781770265/c_omliqk.gif",
    d: "https://res.cloudinary.com/dfsk9idjx/image/upload/f_auto,q_auto/v1781770261/d_ssiuys.gif",
  };
  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-4 md:gap-5 lg:gap-3 gap-2 w-full place-items-center max-w-8xl ${
        className || ""
      }`}
    >
      <img className="rounded-lg lg:rounded-lg" src={imageUrl.a} alt="a" />
      <img className="rounded-lg lg:rounded-lg" src={imageUrl.b} alt="b" />
      <img className="rounded-lg lg:rounded-lg" src={imageUrl.c} alt="c" />
      <img className="rounded-lg lg:rounded-lg" src={imageUrl.d} alt="d" />
    </div>
  );
}

export default Imgcomp;
