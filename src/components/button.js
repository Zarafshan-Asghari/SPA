export default function Button({ btnText = "button" }) {
  return (
    <button className="bg-[#90d1bb] px-8 py-2  rounded-lg capitalize  tracking-wider transition duration-200 border-2 border-[#94d2bd] hover:bg-white text-white font-semibold hover:text-[#94d2bd]  ease-in">
      {btnText}
    </button>
  );
}
