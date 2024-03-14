import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="fixed left-0 top-0 z-20 flex h-screen w-full flex-col items-center justify-center bg-white">
      <h1 className="mb-2 text-5xl font-bold">404</h1>
      <p className="text-2xl text-gray-700">Page not found</p>
      <Link to="/AnimeIn/" className="font-medium text-blue-600">
        Back to Home
      </Link>
    </div>
  );
}
