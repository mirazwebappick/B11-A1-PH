const GardenerCard = ({ garden }) => {
  const {
    name,
    age,
    gender,
    status,
    experience,
    image,
    totalTips,
    location,
    specialty,
  } = garden;

  return (
    <div className="w-full max-w-sm bg-white shadow-lg rounded-xl overflow-hidden transform transition hover:scale-[1.02] hover:shadow-2xl duration-300">
      {/* Image */}
      <div className="relative">
        <img src={image} alt={name} className="w-full h-56 object-cover" />
        <div className="absolute top-2 left-2 bg-gradient-to-r from-green-600 to-green-400 text-white px-3 py-1 rounded-full text-sm font-semibold shadow">
          🌿 Gardener
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-2">
        <h3 className="text-xl font-bold text-gray-800">👤 {name}</h3>
        <p className="text-sm text-gray-600">
          Age: {age} | Gender: {gender}
        </p>
        <p className="text-sm text-gray-600">Experience: {experience} years</p>
        <p className="text-sm text-gray-600">
          Total Shared Tips:{" "}
          <span className="font-medium text-green-700">{totalTips}</span>
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          <span
            className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
              status === "active"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-600"
            }`}
          >
            Status: {status}
          </span>
          {location && (
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
              Location: {location}
            </span>
          )}
          {specialty && (
            <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-medium px-3 py-1 rounded-full">
              Specialty: {specialty}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default GardenerCard;
