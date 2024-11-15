"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement signup logic
    router.push("/products");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 p-8">
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] -z-10" />
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[800px] h-[800px] bg-blue-700/10 rounded-full blur-3xl" />
      </div>
      <div className="max-w-md w-full space-y-8 bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-700">
        <h2 className="text-3xl font-bold text-center text-white">Sign Up</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              required
              className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 text-white p-2 placeholder-gray-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 text-white p-2 placeholder-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 text-white p-2 placeholder-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-blue-500/20"
          >
            Create Account
          </button>
        </form>
        <p className="text-center text-gray-400">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-blue-400 hover:text-blue-500"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
