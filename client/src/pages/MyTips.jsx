import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router";

const MyTips = () => {
  const useData = useLoaderData();
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    console.log(id);
  };

  const handleUpdate = (id) => {
    navigate(`/tips/update/${id}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
        📁 My Garden Tips
      </h2>

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full text-sm text-gray-800">
          <thead className="bg-green-100 uppercase text-xs font-semibold">
            <tr>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Category</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {useData.map((tip) => (
              <tr key={tip.id} className="border-b hover:bg-green-50">
                <td className="py-3 px-4">{tip.title}</td>
                <td className="py-3 px-4">{tip.category}</td>
                <td className="py-3 px-4 capitalize">{tip.status}</td>
                <td className="py-3 px-4 text-center space-x-2">
                  <button
                    onClick={() => handleUpdate(tip.id)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(tip.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {useData.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500">
                  No tips yet. Start by adding one!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTips;
