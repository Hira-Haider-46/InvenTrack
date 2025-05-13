import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaTrashAlt, FaPlus, FaMinus, FaEdit } from "react-icons/fa";

const initialStockData = [
  {
    id: "#7671",
    product: "Inverter",
    category: "cat1",
    instruction: "Stock adjustment",
    items: 80,
  },
  {
    id: "#7672",
    product: "Battery",
    category: "cat2",
    instruction: "",
    items: 80,
  },
  {
    id: "#7673",
    product: "Generator",
    category: "cat2",
    instruction: "Stock adjustment",
    items: 80,
  },
  {
    id: "#7674",
    product: "Charger",
    category: "cat3",
    instruction: "Stock adjustment",
    items: 80,
  },
  {
    id: "#7675",
    product: "Power",
    category: "cat4",
    instruction: "",
    items: 80,
  },
];

function InStock() {
  const [stockData, setStockData] = useState(initialStockData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleQuantityChange = (index, delta) => {
    setStockData((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, items: Math.max(0, item.items + delta) } : item
      )
    );
  };

  const handleDelete = (index) => {
    setStockData((prev) => prev.filter((_, i) => i !== index));
  };

  const filteredData = stockData.filter((item) => {
    const matchesSearch = item.product
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const uniqueCategories = [
    "All",
    ...new Set(stockData.map((item) => item.category)),
  ];

  return (
    <div>
      <div className="flex items-center justify-between py-6 px-8 border-b border-gray-300">
        <h1 className="text-[#1E88E5] text-2xl font-medium">In stock</h1>
        <Link to="/create">
          <button className="bg-[#1E88E5] text-white px-5 py-2 rounded-sm hover:bg-white hover:text-[#1E88E5] border border-[#1E88E5] transition cursor-pointer">
            + New Stock
          </button>
        </Link>
      </div>
      <div className="flex flex-wrap gap-4 justify-between items-center px-8 py-6 border-b border-gray-300 bg-white">
        <div className="relative max-w-xs w-full">
          <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg text-[#101540]" />
          <input
            type="text"
            placeholder="Quick search"
            className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="px-4 py-2 border border-gray-300 text-sm rounded-md cursor-pointer"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {uniqueCategories.map((cat, i) => (
            <option key={i} value={cat} className="cursor-pointer">
              {cat === "All" ? "All Categories" : cat}
            </option>
          ))}
        </select>
      </div>

      <div className="bg-white rounded-md overflow-x-auto px-8">
        <table className="w-full text-sm text-center">
          {filteredData.length > 0 ? (
            <>
              <thead className="text-[#101540] border-b">
                <tr>
                  <th className="p-3">Order ID</th>
                  <th className="p-3">Product</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Sales channel</th>
                  <th className="p-3">Instruction</th>
                  <th className="p-3">Items</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr key={index} className="border-b text-gray-800">
                    <td className="p-3">{item.id}</td>
                    <td className="p-3">{item.product}</td>
                    <td className="p-3">{item.category}</td>
                    <td className="p-3">Store name</td>
                    <td className="p-3">{item.instruction || "-"}</td>
                    <td className="p-3">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          className="text-gray-600 cursor-pointer"
                          onClick={() => handleQuantityChange(index, -1)}
                        >
                          <FaMinus />
                        </button>
                        <input
                          type="text"
                          value={item.items}
                          readOnly
                          className="w-10 text-center"
                        />
                        <button
                          className="text-gray-600 cursor-pointer"
                          onClick={() => handleQuantityChange(index, 1)}
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </td>
                    <td className="p-3 flex items-center justify-center gap-2">
                      <button
                        className="text-red-600 hover:text-red-800 cursor-pointer"
                        onClick={() => handleDelete(index)}
                      >
                        <FaTrashAlt />
                      </button>
                      <Link to="/edit">
                        <button className="text-green-600 hover:text-green-800 cursor-pointer">
                          <FaEdit />
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </>
          ) : (
            <p className="text-center text-gray-600 text-lg py-6">
              No stock found.
            </p>
          )}
        </table>
      </div>
    </div>
  );
}

export default InStock;