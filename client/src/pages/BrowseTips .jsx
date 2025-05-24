import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const BrowseTips = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("all");

  const [selectedTip, setSelectedTip] = useState();

  const goToDetails = (id) => {
    navigate(`/tip_details/${id}`);
  };

  const handleStatusChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    fetch(`http://localhost:3000/difficulty/${value}`)
      .then((res) => res.json())
      .then((result) => {
        setSelectedTip(result);
      });
  }, [value]);
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-green-700 text-center">
        <Fade delay={1e3} cascade damping={1e-1}>
          🌱 Browse Public Garden Tips
        </Fade>
      </h2>

      <div className="mb-6 text-right">
        <label className="mr-2 text-sm font-medium text-gray-700">
          Filter by Difficulty:
        </label>
        <select
          onChange={handleStatusChange}
          className="border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-sm"
        >
          <option value="all">All</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

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
            {selectedTip?.map((tip) => (
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
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm text-white bg-green-600 hover:bg-green-700 rounded-lg transition duration-300"
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
            {selectedTip?.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-8 text-gray-500">
                  No tips match the selected difficulty.
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
