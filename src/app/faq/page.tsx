"use client";
import { FAQCard } from "@/components/Faq/FAQCard";
import Link from "next/link";
import { useState } from "react";

const Faq = () => {
  const settingupFAQs = [
    {
      question: "Are you open to international submissions?",
      answer:
        "Yes, we accept submissions from authors around the world. We believe in promoting diverse voices and perspectives in literature.",
    },
    {
      question: "Do you have any specific manuscript formatting requirements?",
      answer:
        "Yes, we have specific formatting guidelines for manuscript submissions. Please send us your submissions with Font: Times New Roman, Font size: 12 pts, Line spacing: 1.5.",
    },
    {
      question: "What sort of literary works are you interested in?",
      answer: (
        <div>
          At Wingless Dreamer Press, we regularly organize monthly contests
          centered around various themes all year round. Our primary focus lies
          in publishing exceptional nonfiction works that possess long-lasting
          appeal and can captivate readers year after year. Our selection
          process is geared towards seeking submissions that cater to a distinct
          and passionate target audience. Our publishing house, along with its
          imprints, covers a diverse range of subjects in the realm of general
          nonfiction. Some of our areas of interest include:
          <div className="flex flex-col">
            <p>1. History</p>
            <p>2. LGBTQ+ interests</p>
            <p>3. True crime</p>
            <p>4. Outdoor and nature</p>
            <p>5. Poetry</p>
            <p>
              6. Children&apos;s and young adult literature, history, and art
            </p>
          </div>
          We aim to curate a collection that encompasses these genres and more,
          with an emphasis on delivering high-quality content that resonates
          with readers.
        </div>
      ),
    },
    {
      question: "What is your preferred method of manuscript submission?",
      answer: (
        <div>
          <p>
            We prefer electronic submissions through{" "}
            <a href="mailto:submit@winglessdreamer.com">
              <span className="underline">Email</span>
            </a>{" "}
            and{" "}
            <a href="https://winglessdreamer.submittable.com/submit">
              <span className="underline">Submittable</span>
            </a>
            . Detailed guidelines and instructions can be found on our website.
          </p>
        </div>
      ),
    },
    {
      question:
        "How long does it typically take to receive a response regarding a submitted manuscript?",
      answer:
        "Our response time may vary depending on the volume of submissions we receive. Generally, it takes approximately 1-2 months for us to review and respond to submissions.",
    },
    {
      question: "How do you decide the prices of your paperbacks and ebooks?",
      answer: (
        <div className="flex flex-col space-y-5">
          <p>
            The internet has brought significant advancements and
            transformations to the operations of publishers. At Wingless
            Dreamer, we leverage print-on-demand technology, eliminating any
            unnecessary prints and reducing waste. Consequently, our paperbacks
            and ebooks are priced affordably.
          </p>
          <p>
            Typically, the cost of Wingless Dreamer paperbacks ranges from USD
            10 to USD 15, while ebooks are priced between USD 5 and USD 10.
            These prices encompass shipping costs, printing expenses, and other
            essential third-party fees.
          </p>
          <p>
            However, it&apos;s worth noting that our color prints may be
            slightly more expensive due to the inherent costs involved. The
            price range for color prints is generally between USD 18 and USD 25.
          </p>
        </div>
      ),
    },
  ];
  const generalFAQs = [
    {
      question: "How do I submit my proposal?",
      answer: (
        <div className="flex flex-col space-y-5">
          <p>
            At the moment, we regret to inform you that we are unable to accept
            manuscripts submitted by individual authors. However, we are
            actively working towards incorporating independent publishing into
            our offerings in the near future.
          </p>

          <p>
            To explore the current submission opportunities, we encourage you to
            visit our{" "}
            <Link href="/contests" className="underline">
              Contests page
            </Link>
            . Alternatively, you can also email us at{" "}
            <a href="mailto:submit@winglessdreamer.com" className="underline">
              submit@winglessdreamer.com
            </a>
            , ensuring that you mention the name of the contest in the subject
            line of your email.
          </p>

          <p>
            Please take note that we do not publish technical and scientific
            research studies, monographs, papers, or medical books. Therefore,
            any proposals centered around these areas will not be considered for
            publication by our press.
          </p>
        </div>
      ),
    },
    {
      question: "What are the submission guidelines?",
      answer: (
        <div>
          We highly recommend you to refer to the particular contest guidelines
          for more info. But in general we follow the below contest guidelines:
          <div className="flex flex-col space-y-2 px-7 my-1">
            <p>
              1. All entries are judged anonymously and the submitter&apos;s
              name must not appear on the submission itself.
            </p>
            <p>
              2. All poems must have a title and must not exceed 40 lines in
              length (excluding title). All short stories must not exceed 500
              words.
            </p>
            <p>
              3. The participant must be 18 years old or above at the time of
              submitting the work with us.
            </p>
            <p>4. The submission must be in English.</p>
            <p>5. Remember one submission, one entry per submitter.</p>
            <p>6. Submissions must be the entrant’s original work.</p>
            <p>
              7. Entries must not have been published, self-published, published
              on a website, or made public on social media, broadcast, or
              featured among the winners in another competition.
            </p>
          </div>
          Please read our Terms and Conditions before submitting your work.
        </div>
      ),
    },
    {
      question: "How much time does it takes to receive my order?",
      answer:
        "We kindly ask for your understanding and patience regarding order processing and delivery. While we strive to dispatch orders within 10 days, please be aware that factors such as geographic location, weather conditions, and delivery partner challenges may contribute to longer delivery times of up to 1-2 months.",
    },
    {
      question: "Do you offer advances or royalties to authors?",
      answer: (
        <div>
          <p>
            Due to the compact size of the organisation and financial
            constraints, currently, we don&apos;t provide payments royalties to
            authors. However, we do have contests with amazing prizes. Do check
            out our
            <Link href="/contests" className="underline px-1">
              Contest page
            </Link>
            section.
          </p>
        </div>
      ),
    },
    {
      question: "Do you accept previously self-published works?",
      answer:
        "No, we don't publish previously published works. Simply because we want to provide more opportunities to unpublished writers.",
    },
  ];
  const [selectedTab, setSelectedTab] = useState("settingupFAQs");
  const [show, setShow] = useState(0);

  return (
    <div className="flex flex-col items-center bg-white">
      <div className="flex flex-col items-center my-4">
        <p className="text-[#799299] text-xl">Frequently asked</p>
        <p className="text-[47px] text-[#42BABE]">QUESTIONS</p>
      </div>
      <div className="bg-[#F2F2F2] w-[90%] flex justify-center">
        <div className="border-[15px] border-[#799299] px-20 py-12 my-8 xl:w-[80%]">
          <p className="text-[25px] text-[#799299] text-center">
            Frequently asked questions
          </p>
          <div className="mt-5 flex space-x-5">
            <p
              className={`text-sm text-[#799299] cursor-pointer leading-[40px] ${
                selectedTab === "settingupFAQs" ? "font-bold" : ""
              }`}
              onClick={() => setSelectedTab("settingupFAQs")}
            >
              Setting up FAQs
            </p>
            <p
              className={`text-sm text-[#799299] cursor-pointer leading-[40px] ${
                selectedTab === "generalFAQs" ? "font-bold" : ""
              }`}
              onClick={() => setSelectedTab("generalFAQs")}
            >
              General
            </p>
          </div>
          <div className="mb-10">
            {selectedTab === "settingupFAQs" ? (
              <div>
                {settingupFAQs.map((faq, i) => (
                  <div key={i} onClick={() => setShow(i)}>
                    <FAQCard faq={faq} show={show === i} />
                  </div>
                ))}
              </div>
            ) : selectedTab === "generalFAQs" ? (
              <div>
                {generalFAQs.map((faq, i) => (
                  <div key={i} onClick={() => setShow(i)}>
                    <FAQCard faq={faq} show={show === i} />
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
