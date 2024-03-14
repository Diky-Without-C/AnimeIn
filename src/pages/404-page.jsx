import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">404</h1>
        <p className="text-xl">this page not found</p>
        <Link to="/AnimeIn/" className="font-bold text-blue-600">
          Back to home
        </Link>
      </div>
    </>
  );
}
