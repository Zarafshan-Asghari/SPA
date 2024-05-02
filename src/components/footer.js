import Logo from "./logo";

export default function Footer({
  text = "Lorem ipsum dolor sit amet consectetur adipisicing illum ab eos! Dolores dolore harum corrupti",
}) {
  return (
    <div className="bg-[#fffad6] px-6 py-4 ">
      <div className="flex flex-col-reverse md:flex-row gap-6 md:justify-between items-center justify-center  py-10 max-w-6xl mx-auto  space-y-4">
        {/* <div className=""> */}
        <div className="flex flex-col gap-4 text-center md:text-start">
          <h5 className="text-[#bb3e03] text-2xl uppercase font-bold font-serif">
            startNow
          </h5>
          <p className="text-sm font-thin max-w-md ">{text}</p>
        </div>

        {/* logo */}
        <Logo></Logo>
        {/* </div> */}
      </div>
    </div>
  );
}
