"use client";
import { useWindowSize } from "@/utils/useWindowSize";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { LiaUserCircle } from "react-icons/lia";

const Navbar = () => {
  const pathname = usePathname();
  const links = [
    {
      label: "Home",
      link: "/",
      sublinks: [
        {
          label: "About Us",
          link: "/about-us",
        },
        {
          label: "Meet our team",
          link: "/meet-our-team",
        },
        {
          label: "Terms and Conditions",
          link: "/terms-and-conditions",
        },
      ],
    },
    {
      label: "Contests",
      link: "/contests",
    },
    {
      label: "Announcements",
      link: "/announcements",
    },
    {
      label: "Shop",
      sublinks: [
        {
          label: "Bookstore",
          link: "/bookstore",
        },
        {
          label: "Decor",
          link: "/decor",
        },
      ],
    },
    {
      label: "Creative Hub",
      link: "/contests",
    },
    {
      label: "Contact Us",
      link: "/contests",
    },
    {
      label: "FAQ",
      link: "/contests",
    },
  ];
  const { width, height } = useWindowSize();
  const { push } = useRouter();
  return (
    <div>
      <div className="md:hidden flex"></div>
      <div className="hidden md:flex md:w-full">
        {/* // max-h-[70px]  */}
        <div
          className="
        xl:min-h-[110px] xl:max-h-[110px] bg-white w-full"
        >
          <div className="px-1 lg:px-3 2xl:px-[110px] flex items-center justify-between max-w-full">
            <Image
              src="/assets/images/logo.jpeg"
              width={width >= 1440 ? 400 : width >= 1024 ? 180 : 200}
              height={103}
              alt="Wingless Dreamer Logo"
              className="pb-[30px] cursor-pointer"
              onClick={() => push("/")}
            />
            <div className="flex items-center xl:space-x-5 relative">
              <div className="flex items-center">
                {links.map((link) => (
                  <div key={link.label} className="group relative">
                    <a
                      href={link.link ? link.link : "#"}
                      className={`px-4 py-2 whitespace-nowrap ${
                        pathname === link.link ? "text-black" : "text-wd-green"
                      }  hover:text-wd-light-green hover:opacity-80`}
                      style={{
                        transition: "color 0.4s ease",
                      }}
                    >
                      {link.label}
                    </a>
                    <div className="hidden group-hover:flex absolute pt-3">
                      <div className="bg-white shadow-lg rounded-lg z-30">
                        {link.sublinks?.map((sublink) => (
                          <a
                            key={sublink.label}
                            href={sublink.link}
                            className="block px-4 py-2 whitespace-nowrap text-black hover:text-wd-green hover:opacity-80"
                            style={{
                              transition: "color 0.4s ease",
                            }}
                          >
                            {sublink.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-3 lg:space-x-10">
                {/* <div><SearchBar /></div> */}
                <div className="group hover:cursor-pointer flex items-center space-x-1">
                  <LiaUserCircle className="h-8 w-8 group-hover:text-wd-green" />
                  <p className="text-[#799299] group-hover:text-wd-green whitespace-nowrap">
                    Log In
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
