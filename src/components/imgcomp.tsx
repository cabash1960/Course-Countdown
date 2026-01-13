import a from "../assets/c.gif";
import b from "../assets/d.gif";
import c from "../assets/c.gif";
import d from "../assets/d.gif";

function Imgcomp() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 w-full max-w-8xl ">
      <img src={a} alt="a" />
      <img src={b} alt="b" />
      <img src={c} alt="c" />
      <img src={d} alt="d" />
    </div>
  );
}

export default Imgcomp;
