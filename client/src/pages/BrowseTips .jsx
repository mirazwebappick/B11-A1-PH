import { useLoaderData, useLocation, useNavigate } from "react-router";

const BrowseTips = () => {
  const publicTipsData = useLoaderData();
  const navigate = useNavigate();
  const param = useLocation();
  console.log(param);

  const goToDetails = (id) => {
    navigate(`/tip_details/${id}`);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-green-700 text-center">
        🌱 Browse Public Garden Tips
      </h2>

      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-green-100 text-green-700 uppercase text-sm">
            <tr>
              <th className="py-3 px-4 text-left">Image</th>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Category</th>
              <th className="py-3 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {publicTipsData.map((tip) => (
              <tr
                key={tip._id}
                className="hover:bg-green-50 transition-all border-b"
              >
                <td className="p-4">
                  <img
                    src={tip.imageUrl}
                    alt={tip.title}
                    className="w-16 h-16 rounded object-cover"
                  />
                </td>
                <td className="p-4 font-medium text-gray-800">{tip.title}</td>
                <td className="p-4 text-gray-600">{tip.category}</td>
                <td className="p-4 text-center">
                  <button
                    onClick={() => goToDetails(tip._id)}
                    className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 text-sm text-white bg-green-600 hover:bg-green-700 rounded-lg transition duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 2C5 2 1 10 1 10s4 8 9 8 9-8 9-8-4-8-9-8zm0 12a4 4 0 110-8 4 4 0 010 8z" />
                    </svg>
                    See More
                  </button>
                </td>
              </tr>
            ))}
            {publicTipsData.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-8 text-gray-500">
                  No public tips found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowseTips;
