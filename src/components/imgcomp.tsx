function Imgcomp({ className }: { className?: string }) {
  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-4 md:gap-5 lg:gap-3 gap-2 w-full place-items-center max-w-8xl ${
        className || ""
      }`}
    >
      <img className="rounded-lg lg:rounded-lg" src="/a.GIF" alt="a" />
      <img className="rounded-lg lg:rounded-lg" src="/b.GIF" alt="b" />
      <img className="rounded-lg lg:rounded-lg" src="/c.GIF" alt="c" />
      <img className="rounded-lg lg:rounded-lg" src="/d.GIF" alt="d" />
    </div>
  );
}

export default Imgcomp;
