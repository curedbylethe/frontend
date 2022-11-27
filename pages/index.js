import Head from "next/head";
import Link from "next/link";
export default function Home() {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("login");
  };
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <div
        className="flex flex-col items-center justify-center h-screen bg-black bg-cover bg-main"
        style={{ textShadow: "0px 1px 4px #77A" }}
      >
        <div className="flex flex-col items-center px-8 py-10 mx-auto text-white bg-white rounded-md shadow-2xl w-96 shadow-slate-900 bg-clip-padding backdrop-filter bg-opacity-10 backdrop-blur-md">
          <div className="text-2xl text-center">Login</div>
          <form onSubmit={handleLogin} className="mt-6">
            <div className="mb-4">
              <label for="email">Email</label>
              <input
                id="email"
                type="email"
                className="w-full p-3 transition duration-500 bg-white rounded-md shadow-inner outline-none bg-opacity-10 hover:bg-opacity-20 shadow-slate-600/90"
              />
            </div>
            <div className="mb-4">
              <label for="password">Password</label>
              <input
                id="password"
                type="password"
                className="w-full p-3 transition duration-500 bg-white rounded-md shadow-inner outline-none bg-opacity-10 hover:bg-opacity-20 shadow-slate-600/90"
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 mt-1 font-semibold transition duration-500 bg-white rounded-md shadow-md bg-opacity-30 hover:bg-opacity-40 shadow-slate-600/70"
            >
              Login
            </button>
            <div className="my-4 text-center">or</div>
            <Link href="/signup">
              <button className="w-full p-3 mt-1 font-semibold transition duration-500 bg-white rounded-md shadow-md bg-opacity-30 hover:bg-opacity-40 shadow-slate-600/70">
                Signup
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
