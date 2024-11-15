import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="absolute inset-0 bg-grid-slate-900/[0.1] -z-10" />
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[800px] h-[800px] bg-blue-700/20 rounded-full blur-3xl" />
      </div>

      <main className="max-w-4xl w-full space-y-12 relative">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 animate-fade-in">
            Car Retail Management
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A modern platform to manage your automotive inventory with ease
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/auth/login"
            className="group relative px-8 py-4 w-full sm:w-auto text-center bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-blue-500/30"
          >
            <span className="flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
              <span>Login</span>
            </span>
          </Link>
          <Link
            href="/auth/signup"
            className="group relative px-8 py-4 w-full sm:w-auto text-center bg-gray-700 text-white rounded-xl hover:bg-gray-600 transition-all duration-200 shadow-lg hover:shadow-xl border border-gray-600"
          >
            <span className="flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
              <span>Sign Up</span>
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-700"
            >
              <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

const features = [
  {
    title: "Easy Management",
    description:
      "Efficiently manage your vehicle inventory with our intuitive interface",
    icon: (
      <svg
        className="w-6 h-6 text-blue-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 10h16M4 14h16M4 18h16"
        />
      </svg>
    ),
  },
  {
    title: "Real-time Updates",
    description: "Track changes and updates to your inventory in real-time",
    icon: (
      <svg
        className="w-6 h-6 text-blue-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Detailed Analytics",
    description:
      "Get insights into your inventory performance with detailed analytics",
    icon: (
      <svg
        className="w-6 h-6 text-blue-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
];
