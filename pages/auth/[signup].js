import { useRouter } from "next/router";
import { useState, useSyncExternalStore } from "react";
import Head from "next/head";
import Link from "next/link";

const Page = () => {
  const router = useRouter();
  const { token } = router.query;

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [birthday, setBirthday] = useState("");
  const [name, setName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [success, setSucess] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8000/auth/signup/", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: token,
          username: username,
          password: password,
          birthday: birthday,
          name: name,
          id_number: idNumber,
        }),
      });
      if (res.data.success) {
        setSucess("true");
      } else {
        setSucess("false");
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
          <div className="text-2xl text-center">Login</div>
          {success === "true" ? (
            <>
              <div className="text-2xl text-center">
                You have successfully completed your registration. You can now
                log in.
              </div>
              <Link href="/">
                <button className="w-full p-3 mt-1 font-semibold transition duration-500 bg-white rounded-md shadow-md bg-opacity-30 hover:bg-opacity-40 shadow-slate-600/70">
                  Login
                </button>
              </Link>
            </>
          ) : success === "false" ? (
            <>
              <div className="text-2xl text-center">
                Something went wrong. Please try again.
              </div>
            </>
          ) : (
            <>
              <form onSubmit={handleRegister} className="mt-6">
                <div className="mb-4">
                  <label for="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 transition duration-500 bg-white rounded-md shadow-inner outline-none bg-opacity-10 hover:bg-opacity-20 shadow-slate-600/90"
                  />
                </div>
                <div className="mb-4">
                  <label for="username">Username</label>
                  <input
                    id="username"
                    type="text"
                    placeholder="johndoe"
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-3 transition duration-500 bg-white rounded-md shadow-inner outline-none bg-opacity-10 hover:bg-opacity-20 shadow-slate-600/90"
                  />
                </div>
                <div className="mb-4">
                  <label for="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 transition duration-500 bg-white rounded-md shadow-inner outline-none bg-opacity-10 hover:bg-opacity-20 shadow-slate-600/90"
                  />
                </div>
                <div className="mb-4">
                  <label for="idnumber">ID Number</label>
                  <input
                    id="idnumber"
                    type="text"
                    placeholder="1234567890"
                    onChange={(e) => setIdNumber(e.target.value)}
                    className="w-full p-3 transition duration-500 bg-white rounded-md shadow-inner outline-none bg-opacity-10 hover:bg-opacity-20 shadow-slate-600/90"
                  />
                </div>

                <div className="mb-4">
                  <label for="birthday">Birthday</label>
                  <input
                    id="birthday"
                    type="text"
                    placeholder="YYYY-MM-DD"
                    onChange={(e) => setBirthday(e.target.value)}
                    className="w-full p-3 transition duration-500 bg-white rounded-md shadow-inner outline-none bg-opacity-10 hover:bg-opacity-20 shadow-slate-600/90"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full p-3 mt-1 font-semibold transition duration-500 bg-white rounded-md shadow-md bg-opacity-30 hover:bg-opacity-40 shadow-slate-600/70"
                >
                  Submit
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
