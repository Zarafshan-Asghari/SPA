export default function Teme({ fname, id, role, img }) {
  return (
    <div className="team-item bg-white rounded-lg shadow-lg p-6 text-center">
      <img
        src={img}
        alt=""
        className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
      />
      <h5 className="text-lg font-semibold text-gray-800 mb-2">{fname}</h5>
      <span className="text-gray-600">{role}</span>
    </div>
  );
}
