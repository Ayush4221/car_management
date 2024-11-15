"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);

  const product = {
    id: params.id,
    title: "Tesla Model 3",
    description:
      "Electric Sedan with Autopilot capability and long-range battery",
    price: 35000,
    image: "/car1.jpg",
    specs: {
      year: "2024",
      mileage: "0",
      transmission: "Automatic",
      fuelType: "Electric",
    },
  };

  const handleDelete = async () => {
    // TODO: Implement delete logic
    router.push("/products");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/products"
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-6"
        >
          ← Back to Products
        </Link>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[400px] md:h-full">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h1>
                <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-lg font-semibold">
                  ${product.price.toLocaleString()}
                </span>
              </div>

              <p className="text-gray-600 mb-6">{product.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500 capitalize">
                      {key}
                    </div>
                    <div className="text-gray-900 font-medium">{value}</div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm hover:shadow flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  Edit
                </button>
                <button
                  onClick={handleDelete}
                  className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-sm hover:shadow flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
