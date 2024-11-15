"use client";
import { useState } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data - replace with actual API call
  const products = [
    {
      id: 1,
      title: "Tesla Model 3",
      description:
        "Electric Sedan with Autopilot capability and long-range battery",
      price: 35000,
      image: "/car1.jpg",
    },
    {
      id: 2,
      title: "BMW X5",
      description: "Luxury SUV with premium features and powerful performance",
      price: 60000,
      image: "/car2.jpg",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="absolute inset-0 bg-grid-slate-900/[0.1] -z-10" />
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[800px] h-[800px] bg-blue-700/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              My Products
            </h1>
            <p className="mt-1 text-sm text-gray-300">
              Manage and track your vehicle inventory
            </p>
          </div>
          <Link
            href="/products/new"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-blue-500/30"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add New Product
          </Link>
        </div>

        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <svg
            className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
