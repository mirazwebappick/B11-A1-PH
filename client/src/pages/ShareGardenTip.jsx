import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const ShareGardenTip = () => {
  const { user } = use(AuthContext);
  const { email, displayName } = user;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { ...formEntries } = Object.fromEntries(formData.entries());

    fetch("http://localhost:3000/share_garden_tip", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formEntries),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("data push after database", result);
        if (result.insertedId) {
          toast.success(" Tips submitted successfully!");
        }
      });
  };
  return (
    <div className="flex justify-center items-center py-10 px-4 bg-gradient-to-br from-green-100 to-white min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8 space-y-6 border border-green-200"
      >
        <h2 className="text-3xl font-bold text-green-700 text-center">
          🌿 Share Your Garden Tip
        </h2>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="How I Grow Tomatoes Indoors"
            className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Plant Type / Topic
          </label>
          <input
            type="text"
            name="plantType"
            className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-green-400 focus:ring-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Difficulty Level
          </label>
          <select
            name="difficulty"
            className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-green-400 focus:ring-2"
            required
          >
            <option value="">-- Select --</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            rows="4"
            className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-green-400 focus:ring-2"
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="url"
            name="imageUrl"
            className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-green-400 focus:ring-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            name="category"
            className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-green-400 focus:ring-2"
            required
          >
            <option value="">-- Select --</option>
            <option value="Composting">Composting</option>
            <option value="Plant Care">Plant Care</option>
            <option value="Vertical Gardening">Vertical Gardening</option>
            <option value="Hydroponics">Hydroponics</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Availability
          </label>
          <select
            name="availability"
            className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-green-400 focus:ring-2"
            required
          >
            <option value="">-- Select --</option>
            <option value="Public">Public</option>
            <option value="Hidden">Hidden</option>
          </select>
        </div>

        {/* Read-only User Info */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              User Email
            </label>
            <input
              type="email"
              name="email"
              readOnly
              className="mt-1 w-full p-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-700"
              value={email}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              User Name
            </label>
            <input
              type="text"
              readOnly
              className="mt-1 w-full p-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-700"
              value={displayName}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 cursor-pointer"
          >
            Submit Garden Tip
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShareGardenTip;
