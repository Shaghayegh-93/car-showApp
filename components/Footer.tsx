import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" flex flex-col  bordet-t text-black-100 border-gray-100">
      {/* <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            alt="logo"
            width={118}
            height={18}
            src="/logo.svg"
            className="object-contain"
          />
          <p className="text-gray-700 text-base">
            Carhub 2023 <br />
            All right reserved &copy;
          </p>
        </div>
        <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
          {footerLinks.map((link) => (
            <div
              className="flex flex-col gap-6 text-base min-w-[170px]"
              key={link.title}
            >
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link className="text-gray-500" key={item.url} href={item.url}>
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div> */}
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-4">
        <Link href="/">
          <Image
            alt="logo"
            width={118}
            height={18}
            src="/logo.svg"
            className="object-contain"
          />
        </Link>
        <p className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
          Carhub 2023, All right reserved &copy;
        </p>
      </div>
    </footer>
  );
};

export default Footer;
