import { Link } from "react-router-dom";
import Icon from "./component/icon";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-300">
      <div className="flex w-full max-w-md flex-col rounded-md bg-white px-4 py-8 shadow-md sm:px-6 md:px-8 lg:px-10">
        <h1 className="text-center text-xl font-bold text-gray-800 sm:text-2xl">
          Login
        </h1>
        <button className="relative mt-6 rounded-md border bg-gray-100 py-2 text-sm text-gray-800 hover:bg-gray-200">
          <span>Login with Google</span>
        </button>
        <div className="relative mt-10 h-px bg-gray-300">
          <div className="absolute left-0 top-0 -mt-2 flex w-full justify-center">
            <span className="bg-white px-4 text-xs uppercase text-gray-500">
              Or Login With Email
            </span>
          </div>
        </div>
        <div className="mt-10">
          <form>
            <div className="mb-2 flex flex-col">
              <span className="mb-1 text-gray-500">E-mail address</span>
              <div className="relative">
                <label
                  htmlFor="login-email"
                  className="absolute left-0 top-0 inline-flex h-full w-10 items-center justify-center"
                >
                  <Icon name="email" color="gray" />
                </label>

                <input
                  id="login-email"
                  type="email"
                  className="w-full rounded-lg border border-gray-400 py-2 pl-10 pr-4 text-sm placeholder-gray-500 focus:border-blue-500 focus:outline-none sm:text-base"
                  placeholder="E-Mail Address"
                />
              </div>
            </div>
            <div className="mb-6 flex flex-col">
              <span className="mb-1 text-gray-500">Password</span>
              <div className="relative">
                <label
                  htmlFor="login-password"
                  className="absolute left-0 top-0 inline-flex h-full w-10 items-center justify-center text-gray-400"
                >
                  <Icon name="lock" color="gray" />
                </label>

                <input
                  id="login-password"
                  type="password"
                  className="w-full rounded-lg border border-gray-400 py-2 pl-10 pr-4 text-sm placeholder-gray-500 focus:border-blue-500 focus:outline-none sm:text-base"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="flex w-full">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded bg-blue-600 py-2 text-sm text-white transition duration-150 ease-in hover:bg-blue-700 focus:outline-none sm:text-base"
              >
                <span className="mr-2 uppercase">Login</span>
                <span>
                  <Icon name="arrowRight" color="white" />
                </span>
              </button>
            </div>
          </form>
        </div>
        <div className="mt-6 flex items-center justify-center">
          <Link
            to="/AnimeIn/register"
            className="text-xs font-bold text-blue-500 hover:text-blue-700"
          >
            <span className="ml-2">Don't have an account?</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
