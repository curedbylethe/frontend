import { useRouter } from "next/router";
import { useState } from "react";

const Page = () => {
  const router = useRouter();
  const { token } = router.query;

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [birthday, setBirthday] = useState("");
  const [name, setName] = useState("");
  const [idNumber, setIdNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(
        "http://127.0.0.1:8000/auth/signup/?token=" + token,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: username,
            password: password,
            birthday: birthday,
            name: name,
            id_number: idNumber,
          }),
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col justify-center align-middle items-center">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          className="border-[1px] px-[16px] w-[221px] h-[48px] mt-6 rounded-lg"
        />
        <input
          type="text"
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          className="border-[1px] px-[16px] w-[221px] h-[48px] mt-6 rounded-lg"
        />
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          className="border-[1px] px-[16px] w-[221px] h-[48px] mt-6 rounded-lg"
        />
        <input
          type="number"
          value={idNumber}
          placeholder="id number"
          onChange={(e) => setIdNumber(e.target.value)}
          className="border-[1px] px-[16px] w-[221px] h-[48px] mt-6 rounded-lg"
        />
        <input
          type="text"
          value={birthday}
          placeholder="birth date"
          onChange={(e) => setBirthday(e.target.value)}
          className="border-[1px] px-[16px] w-[221px] h-[48px] mt-6 rounded-lg"
        />
        <button type="submit" className=" bg-blue-600">
          submit
        </button>
      </form>
    </div>
  );
};

export default Page;
