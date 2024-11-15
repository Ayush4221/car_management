import Link from "next/link";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200">
      <div className="relative w-full h-48">
        <Image
          src={product.image}
          alt={product.title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-2xl"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">
          {product.title}
        </h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-400">
            ${product.price.toLocaleString()}
          </span>
          <Link href={`/products/${product.id}`}>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-blue-500/20">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
