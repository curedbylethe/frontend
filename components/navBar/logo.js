import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="lg:w-300 sm:w-100 md:w-250">
      <div className="">
        <Link href="/" className="flex mb-3 align-middle">
          <Image
            src="/78965755.jpeg"
            width={70}
            height={70}
            alt="Website Logo"
          ></Image>
        </Link>
      </div>
    </div>
  );
};
export default Logo;
