function Imgcomp({ className }: { className?: string }) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 md:gap-5 w-full max-w-8xl ${className || ""}`}>
      <img className="rounded-tl-lg lg:rounded-lg" src="/a.GIF" alt="a" />
      <img className="rounded-tr-lg lg:rounded-lg" src="/b.GIF" alt="b" />
      <img className="rounded-bl-lg lg:rounded-lg" src="/c.GIF" alt="c" />
      <img className="rounded-br-lg lg:rounded-lg" src="/d.GIF" alt="d" />
    </div>
  );
}

export default Imgcomp;
