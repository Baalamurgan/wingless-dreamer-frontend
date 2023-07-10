import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import {
  BsCheck2,
  BsFacebook,
  BsLink45Deg,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";

export const FAQCard = ({
  faq,
  show,
}: {
  faq: {
    question: string;
    answer: string | JSX.Element;
  };
  show: boolean;
}) => {
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
  const copyToClipboard = () => {
    // https://www.winglessdreamer.com/faq?questionId=ed199f9a-1b64-42c1-bf6d-55677d0d8312&appDefId=14c92d28-031e-7910-c9a8-a670011e062d
    navigator.clipboard.writeText(
      `https://www.winglessdreamer.com/faq?questionId=${faq.question
        .split(" ")
        .join("")}&appDefId=14c92d28-031e-7910-c9a8-a670011e062d`
    );
    setCopiedToClipboard(true);
    setTimeout(() => {
      setCopiedToClipboard(false);
    }, 3000);
  };
  return (
    <div className="flex flex-col space-y-5 py-8 cursor-pointer border-b border-b-[#799299]">
      <div className="flex items-center justify-between w-full">
        <p className="text-[#799299] text-xl">{faq.question}</p>
        <BiChevronDown
          className={`text-[#799299] h-6 w-6 transition-all ${
            show ? "transform rotate-180" : "transform"
          }`}
        />
      </div>
      {show ? (
        <div>
          <p className="mt-3 text-[#799299] max-w-[90%]">{faq.answer}</p>
          <div className="flex items-center space-x-3 mt-5 relative">
            <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.winglessdreamer.com%2Ffaq%3FquestionId%3Ded199f9a-1b64-42c1-bf6d-55677d0d8312&appDefId=14c92d28-031e-7910-c9a8-a670011e062d">
              <BsFacebook className="h-4 w-4 cursor-pointer text-[#799299]" />
            </a>
            <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fintent%2Ftweet%3Furl%3Dhttps%3A%2F%2Fwww.winglessdreamer.com%2Ffaq%3FquestionId%3Ded199f9a-1b64-42c1-bf6d-55677d0d8312%26appDefId%3D14c92d28-031e-7910-c9a8-a670011e062d">
              <BsTwitter className="h-4 w-4 cursor-pointer text-[#799299]" />
            </a>
            <a href="https://www.linkedin.com/shareArticle/?mini=true&url=https://www.winglessdreamer.com/faq?questionId=ed199f9a-1b64-42c1-bf6d-55677d0d8312&appDefId=14c92d28-031e-7910-c9a8-a670011e062d">
              <BsLinkedin className="h-4 w-4 cursor-pointer text-[#799299]" />
            </a>
            {!copiedToClipboard ? (
              <BsLink45Deg
                className="h-4 w-4 cursor-pointer text-[#799299]"
                onClick={copyToClipboard}
              />
            ) : (
              <BsCheck2 className="h-4 w-4 cursor-pointer text-[#799299]" />
            )}
            <p
              className={`absolute text-black transition-all
                ${copiedToClipboard ? "opacity-100 top-5" : "opacity-0 top-10"}
                `}
            >
              Copied to clipboard
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};
