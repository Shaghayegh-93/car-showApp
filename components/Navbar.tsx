import Link from "next/link";
import Image from "next/image";
import React from "react";
import CustomeButton from "./CustomeButton";

const Navbar = () => {
  return (
    <header className="absolute z-10 w-full  ">
      <nav className="flex items-center justify-between max-w-[1440px] mx-auto  sm:px-16 px-6 py-4">
        <Link className="flex items-center justify-center" href="/">
          <Image
            alt="logo"
            width={118}
            height={18}
            src="/logo.svg"
            className="object-contain"
          />
        </Link>
        <CustomeButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue bg-white rounded-full min-w-[130px]"
        />
        {/* <Link href="/">Signin</Link> */}
      </nav>
    </header>
  );
};

export default Navbar;
