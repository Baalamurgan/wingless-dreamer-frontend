"use client";
import Image from "next/image";

const BlogCard = ({
  blog,
  className,
}: {
  blog: {
    title: string;
    time: string;
    imgSrc: string;
  };
  className?: string;
}) => {
  const pushToBlog = () => {};
  return (
    <div className={`bg-white p-2 flex space-x-3 w-full ${className || ""}`}>
      <div className="group flex-1">
        <p
          className="text-sm futura text-[#414141] group-hover:text-[#799299] cursor-pointer"
          onClick={pushToBlog}
        >
          {blog.title}
        </p>
        <p className="mt-4 text-xs text-[#414141] opacity-70">{blog.time}</p>
      </div>
      <div className="h-20 w-20 overflow-hidden flex items-center cursor-pointer">
        <Image
          onClick={pushToBlog}
          src={blog.imgSrc}
          width={80}
          height={80}
          alt="Blog Image"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default BlogCard;
