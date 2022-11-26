import Head from "next/head";
import { useState } from "react";
import Layout from "../components/layout";
export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
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
    <>
      <Layout>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        {/* email input */}
        <div className="flex flex-col items-center justify-center align-middle">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-[1px] px-[16px] w-[221px] h-[48px] mt-6 rounded-lg"
            />
            <button type="submit" className="bg-blue-600 ">
              submit
            </button>
          </form>
          <p>{message}</p>
        </div>
      </Layout>
    </>
  );
}
