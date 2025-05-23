import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router";
import { useState } from "react";
import toast from "react-hot-toast";

const MyTips = () => {
  const initialData = useLoaderData();
  const [useData, setUseData] = useState(initialData);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/my_tips/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount === 1) {
              console.log("id deleted success ", result);
              toast.success("User Deleted Successful!");
              const remainingData = useData.filter((data) => data._id !== id);
              setUseData(remainingData);
            }
          });
      }
    });
  };

  const handleUpdate = (id) => {
    navigate(`/update_tip/${id}`);
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
              <tr key={tip._id} className="border-b hover:bg-green-50">
                <td className="py-3 px-4">{tip.title}</td>
                <td className="py-3 px-4">{tip.category}</td>
                <td className="py-3 px-4 capitalize">{tip.status}</td>
                <td className="py-3 px-4 text-center space-x-2">
                  <button
                    onClick={() => handleUpdate(tip._id)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded cursor-pointer"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(tip._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded cursor-pointer"
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
