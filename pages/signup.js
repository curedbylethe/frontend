import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://127.0.0.1:8000/auth/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
        }),
      });
      console.log(res);

      let resJson = await res.json();
      console.log(resJson);
      if (res.status === 201) {
        setEmail("");
        setMessage(
          "Complete your registration by clicking the link in your email"
        );
      } else {
        setMessage("Some error occured: " + resJson.email);
      }
    } catch (err) {
      console.log(err);
    }
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
          {message ? (
            <>
              <div className="text-2xl text-center">{message}</div>
              <div className="my-4 text-center">or</div>
              <Link href="/">
                <button className="w-full p-3 mt-1 font-semibold transition duration-500 bg-white rounded-md shadow-md bg-opacity-30 hover:bg-opacity-40 shadow-slate-600/70">
                  Login
                </button>
              </Link>
            </>
          ) : (
            <div>
              <div className="text-2xl text-center">Signup</div>
              <form onSubmit={handleSignup} className="mt-6">
                <div className="mb-4">
                  <label for="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 transition duration-500 bg-white rounded-md shadow-inner outline-none bg-opacity-10 hover:bg-opacity-20 shadow-slate-600/90"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full p-3 mt-1 font-semibold transition duration-500 bg-white rounded-md shadow-md bg-opacity-30 hover:bg-opacity-40 shadow-slate-600/70"
                >
                  Signup
                </button>
                <div className="my-4 text-center">or</div>
                <Link href="/">
                  <button className="w-full p-3 mt-1 font-semibold transition duration-500 bg-white rounded-md shadow-md bg-opacity-30 hover:bg-opacity-40 shadow-slate-600/70">
                    Login
                  </button>
                </Link>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
