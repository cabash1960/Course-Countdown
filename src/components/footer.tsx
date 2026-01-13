import Button from "./button";

function Footer() {
  return (
    <section className=" px-8  lg:px-16 text-center  bg-purple-500 pt-20 min-h-[50vh] ">
      <div className="flex flex-col gap-6 justify-center items-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-shadow-purple-300">
          Learn animation, work remotely, and earn well
        </h2>
        <Button className="lg:w-fit">Click Here To Register</Button>
      </div>

      <div className="w-full lg:text-md text-sm text-purple-300 lg:p-6 bottom-0 p-6 text-center mt-7">
        Disclaimer : This site is not a part of Facebook TM or Meta Platforms
        inc. Additionally, this site is NOT endorsed by Facebook TM in any way.
      </div>
    </section>
  );
}

export default Footer;
