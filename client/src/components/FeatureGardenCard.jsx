const FeatureGardenCard = ({ garden }) => {
  const { name, role, image, status, location } = garden;

  return (
    <div className="w-full max-w-sm bg-white shadow-lg rounded-xl overflow-hidden transform transition hover:scale-[1.02] hover:shadow-2xl duration-300">
      {/* Image */}
      <div className="relative">
        <img src={image} alt={name} className="w-full h-56 object-cover" />
        <div className="absolute top-2 left-2 bg-gradient-to-r from-green-600 to-green-400 text-white px-3 py-1 rounded-full text-sm font-semibold shadow">
          🌿 Featured
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-2">
        <h3 className="text-xl font-bold text-gray-800">👤 {name}</h3>
        <p className="text-sm text-gray-600">Role: {role}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
            Status: {status}
          </span>
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
            Location: {location}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeatureGardenCard;
