import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditStock = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    product: "Inverter",
    category: "cat1",
    salesChannel: "Store name",
    instruction: "Stock adjustment",
    items: 80,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated stock:", formData);
    navigate("/");
  };

  return (
    <div className="px-8 py-10">
      <h2 className="text-2xl font-semibold text-[#1E88E5] mb-10 text-center">
        Edit Stock - Order ID # 1234
      </h2>
      <form onSubmit={handleSubmit} className="px-2 md:px-8 my-5">
        <div className="flex flex-col md:flex-row gap-5 md:gap-10 w-full">
          <div className="w-full md:w-1/2">
            <label className="block text-base font-medium text-[#101540]">
              Product
            </label>
            <input
              type="text"
              name="product"
              value={formData.product}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md outline-none text-gray-500"
              required
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="block text-base font-medium text-[#101540]">
              Category
            </label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md outline-none text-gray-500"
              required
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 md:gap-10 w-full my-3">
          <div className="w-full md:w-1/2">
            <label className="block text-base font-medium text-[#101540]">
              Sales Channel
            </label>
            <input
              type="text"
              name="salesChannel"
              value={formData.salesChannel}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md outline-none text-gray-500"
              required
            />
          </div>

          <div className="w-full md:w-1/2">
            <label className="block text-base font-medium text-[#101540]">
              Instruction
            </label>
            <input
              type="text"
              name="instruction"
              value={formData.instruction}
              onChange={handleChange}
              placeholder="Optional"
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md outline-none text-gray-500"
            />
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-base font-medium text-[#101540]">
            Items
          </label>
          <input
            type="number"
            name="items"
            value={formData.items}
            onChange={handleChange}
            className="mt-1 block w-full md:w-[48%] px-4 py-2 border border-gray-300 rounded-md text-gray-500"
            required
            min={0}
          />
        </div>

        <div className="flex justify-between items-center">
          <button
            type="submit"
            className=" bg-[#1E88E5] border border-[#1E88E5] text-white px-6 py-2 rounded hover:text-[#1E88E5] hover:bg-white cursor-pointer"
          >
            Save Changes
          </button>
          <button
            type="button"
            className="text-gray-400 cursor-pointer font-medium"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditStock;