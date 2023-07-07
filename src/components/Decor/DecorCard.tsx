"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DecorCard = ({
  decor: { name, type, price, imageSrc, slug },
}: {
  decor: {
    id: number;
    name: string;
    type: string;
    price: number;
    imageSrc: string;
    slug: string;
  };
}) => {
  const { push } = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <div
        className="relative group cursor-pointer"
        onClick={() => {
          push(`/product-page/${slug}`);
        }}
      >
        <div className="group-hover:opacity-100 opacity-0 absolute top-0">
          <Image
            src="/assets/images/default_decor.webp"
            alt={name}
            width={224}
            height={224}
          />
          <div
            className="absolute -bottom-5 group-hover:bottom-0 w-full transition-all"
            onClick={(e) => {
              e.preventDefault();
              setModalOpen(true);
            }}
          >
            <div className="flex items-center justify-center w-full h-[50px] bg-white bg-opacity-50 transition-all">
              <p>Quick View</p>
            </div>
          </div>
        </div>
        <div className="group-hover:opacity-0 opacity-100 transition-all">
          <Image src={imageSrc} alt={name} width={224} height={224} />
        </div>
        <div className="absolute top-0 left-0">
          <div className="bg-[#799299] px-3 py-1">
            <p className="text-xs text-white">New arrival</p>
          </div>
        </div>
        <p className="text-[#414141] mt-4">
          {name} - {type}
        </p>
        <p className="text-[#999997] mt-0.5">${Math.round(price).toFixed(2)}</p>
      </div>
      {isModalOpen && <div />}
    </div>
  );
};

export default DecorCard;
