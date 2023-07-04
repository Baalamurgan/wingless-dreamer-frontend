"use client";
import Link from "next/link";
import { BsChevronUp } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="relative bg-[#799299] text-white text-sm">
      <div className="container mx-auto pt-20 pb-4">
        <div className="grid grid-cols-1 place-items-center sm:place-items-start text-center sm:text-left sm:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-[250px] py-4 px-2 lg:px-0 lg:pr:2">
            <div className="mb-10">
              <p className="text-sm">WINGLESS DREAMER PUBLISHER</p>
            </div>
            <p className="text-sm text-tm-black font-bold mb-3 text-[#C7C7C7]">
              WRITE US AT
            </p>
            <p className="mt-3">
              <a href="mailto:editor@winglessdreamer.com">
                editor@winglessdreamer.com
              </a>
            </p>
            <div className="max-w-[250px] py-4 px-2 lg:px-0 lg:pr:2 mt-5">
              <p className="text-sm text-tm-black font-bold mb-3 text-[#C7C7C7]">
                CONTACT US (WHATSAPP):
              </p>
              <p className="mt-3">+91-7305022147</p>
              <p className="mt-3">Mon- Fri, 8:00 am - 8:00 pm (IST)</p>
            </div>
          </div>
          <div className="max-w-[250px] py-4 px-2 lg:px-0 lg:pr:2">
            <p className="text-sm text-tm-black font-bold mb-3">SHOP</p>
            <ul className="mt-10">
              <li className="text-tm-gray text-sm mt-4 duration-300 hover:text-tm-dark-gray hover:cursor-pointer">
                <Link href="">FAQ</Link>
              </li>
              <li className="text-tm-gray text-sm mt-4 duration-300 hover:text-tm-dark-gray hover:cursor-pointer">
                <Link href="">Shipping & Returns</Link>
              </li>
              <li className="text-tm-gray text-sm mt-4 duration-300 hover:text-tm-dark-gray hover:cursor-pointer">
                <Link href="">Terms and Conditions</Link>
              </li>
              <li className="text-tm-gray text-sm mt-4 duration-300 hover:text-tm-dark-gray hover:cursor-pointer">
                <Link href="">Wholesale Inquiries</Link>
              </li>
              <li className="text-tm-gray text-sm mt-4 duration-300 hover:text-tm-dark-gray hover:cursor-pointer">
                <Link href="">Payment Methods</Link>
              </li>
              <li className="text-tm-gray text-sm mt-4 duration-300 hover:text-tm-dark-gray hover:cursor-pointer">
                <Link href="">Our Commitment and Privacy</Link>
              </li>
            </ul>
          </div>
          <div className="max-w-[250px] py-4 px-2 lg:px-0 lg:pr:2">
            <p className="text-sm text-tm-black font-bold mb-3">SOCIALS</p>
            <ul className="mt-10">
              <li className="text-tm-gray text-sm mt-4 duration-300 hover:text-tm-dark-gray hover:cursor-pointer">
                <Link href="">YouTube</Link>
              </li>
              <li className="text-tm-gray text-sm mt-4 duration-300 hover:text-tm-dark-gray hover:cursor-pointer">
                <Link href="">Facebook</Link>
              </li>
              <li className="text-tm-gray text-sm mt-4 duration-300 hover:text-tm-dark-gray hover:cursor-pointer">
                <Link href="">Twitter</Link>
              </li>
              <li className="text-tm-gray text-sm mt-4 duration-300 hover:text-tm-dark-gray hover:cursor-pointer">
                <Link href="">Instagram</Link>
              </li>
              <li className="text-tm-gray text-sm mt-4 duration-300 hover:text-tm-dark-gray hover:cursor-pointer">
                <Link href="">Pinterest</Link>
              </li>
            </ul>
          </div>
          <div className="sm:max-w-[250px] py-4 px-2 lg:px-0 lg:pr:2">
            <p className="text-sm text-tm-black font-bold mb-3">
              BE THE FIRST TO KNOW
            </p>
            <div className="mt-10">
              <Link href="">Sign up for our newsletter</Link>
              <div className="mt-3">
                <button className="px-5 py-2 border-2">
                  <p>Enter your email here*</p>
                </button>
              </div>
              <div className="mt-3">
                <button className="px-5 py-2 border-2 bg-white w-full">
                  <p className="text-wd-green">Subscribe</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-[#C7C7C7] text-sm text-center mt-5">
        2023 by Wingless Dreamer Publisher. Proudly created with Wix.co
      </p>
      <div className="absolute bottom-0 right-10">
        <BsChevronUp
          className="h-9 w-9 text-white cursor-pointer"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        />
      </div>
    </footer>
  );
}
