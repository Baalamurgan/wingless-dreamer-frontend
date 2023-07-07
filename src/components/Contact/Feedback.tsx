"use client";
import { Checkbox } from "@atlaskit/checkbox";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import Button from "../Button";
import Radio from "../Input/Radio";
import TextInput from "../Input/TextInput";

// const Star = ({ fillColor }: { fillColor: string }) => (
//   <svg
//     data-bbox="13.159 17.17 173.683 165.66"
//     viewBox="0 0 200 200"
//     height="25"
//     width="25"
//     xmlns="http://www.w3.org/2000/svg"
//     data-type="shape"
//     fill={fillColor}
//   >
//     <g>
//       <path d="M104.368 19.886l23.062 46.728a4.872 4.872 0 0 0 3.668 2.665l51.567.257c3.996.581 5.591 5.491 2.7 8.309l-37.314 43.608a4.872 4.872 0 0 0-1.401 4.312l17.152 51.359c.683 3.979-3.494 7.014-7.068 5.135l-54.467-24.248a4.873 4.873 0 0 0-4.534 0L45.022 182.26c-3.574 1.879-7.751-1.156-7.068-5.135l15.397-51.359a4.872 4.872 0 0 0-1.401-4.312L14.635 79.203c-2.891-2.818-1.296-7.729 2.7-8.309l51.567-1.615a4.872 4.872 0 0 0 3.668-2.665l23.062-46.728c1.787-3.621 6.949-3.621 8.736 0z"></path>
//     </g>
//   </svg>
// );

const Feedback = () => {
  const [feedbackValues, setFeedbackValues] = useState<{
    experience: number;
    love_our_website: number;
    rate: number;
    best_part: string[];
    donations: string;
    email: string;
    feedback: string;
  }>({
    experience: 0,
    love_our_website: 0,
    rate: 0,
    best_part: ["Bookstore", "Editing Services"],
    donations: "",
    email: "",
    feedback: "",
  });
  return (
    <div className="bg-[#F2F2F2] w-full">
      <div className="px-10 py-6">
        <p className="playfair text-wd-green text-[28px] font-bold">
          Liked our work. Tell us all about it. Please give us your feedback.
        </p>
        <div className="mt-16 flex flex-col space-y-6">
          <div className="flex items-center justify-between space-x-0 space-y-5 md:space-x-10 md:space-y-0 max-w-[70%]">
            <p className="text-[#414141] futura">
              1. How was your overall experience with us? <sup>*</sup>
            </p>
            <div>
              <Rating
                allowFraction={false}
                initialValue={feedbackValues.experience}
                onClick={(experience) => {
                  setFeedbackValues({ ...feedbackValues, experience });
                }}
                fillStyle={{
                  color: "#369A9E",
                }}
                SVGclassName="inline-block"
                //   SVGstyle={{ display: "inline-block" }}
                //   emptyClassName="inline-block"
                //   fillClassName="inline-block"
                //   emptyIcon={<Star fillColor="#D6D6D6" />}
                //   fillIcon={<Star fillColor="#369A9E" />}
              />
            </div>
          </div>
          <div className="flex items-center justify-between space-x-0 space-y-5 md:space-x-10 md:space-y-0 max-w-[70%]">
            <p className="text-[#414141] futura">
              2. Do you love our website? <sup>*</sup>
            </p>
            <div>
              <Rating
                allowFraction={false}
                initialValue={feedbackValues.love_our_website}
                onClick={(love_our_website) => {
                  setFeedbackValues({ ...feedbackValues, love_our_website });
                }}
                fillStyle={{
                  color: "#369A9E",
                }}
                SVGclassName="inline-block"
              />
            </div>
          </div>
          <div className="flex items-center justify-between space-x-0 space-y-5 md:space-x-10 md:space-y-0 max-w-[70%]">
            <p className="text-[#414141] futura">
              3. How much will you rate our Products & Services? <sup>*</sup>
            </p>
            <div>
              <Rating
                allowFraction={false}
                initialValue={feedbackValues.rate}
                onClick={(rate) => {
                  setFeedbackValues({ ...feedbackValues, rate });
                }}
                fillStyle={{
                  color: "#369A9E",
                }}
                SVGclassName="inline-block"
              />
            </div>
          </div>
          <div>
            <p className="text-[#414141] futura">
              4. What was the best part about Wingless Dreamer Publisher?{" "}
              <sup>*</sup>
            </p>
            <div className="flex flex-col space-y-2 mt-3 max-w-[50%]">
              {[
                "Bookstore",
                "Editing Services",
                "Counselling Services",
                "Events",
              ].map((part) => (
                <Checkbox
                  key={part}
                  isChecked={feedbackValues.best_part.includes(part)}
                  size="medium"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFeedbackValues({
                        ...feedbackValues,
                        best_part: [...feedbackValues.best_part, part],
                      });
                    } else {
                      setFeedbackValues({
                        ...feedbackValues,
                        best_part: feedbackValues.best_part.filter(
                          (p) => p !== part
                        ),
                      });
                    }
                  }}
                  label={part}
                  // value="Controlled Checkbox"
                  // name="controlled-checkbox"
                />
              ))}
            </div>
          </div>
          <div>
            <p className="text-[#414141] futura">
              5. Will you support us through recommendations or donations?
            </p>
            <div className="flex flex-col space-y-2 mt-3 max-w-[50%]">
              {["I'd love to. Kudos!", "I am not sure."].map((part) => (
                <Radio
                  key={part}
                  checked={feedbackValues.donations === part}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFeedbackValues({
                        ...feedbackValues,
                        donations: part,
                      });
                    }
                  }}
                  label={part}
                />
              ))}
            </div>
          </div>
          <div>
            <TextInput
              value={feedbackValues.email}
              onChange={(e) => {
                setFeedbackValues({
                  ...feedbackValues,
                  email: e.target.value,
                });
              }}
              label="Your email"
              placeholder="Enter email here"
              error={!feedbackValues.email}
              required
            />
          </div>
          <div>
            <TextInput
              value={feedbackValues.feedback}
              onChange={(e) => {
                setFeedbackValues({
                  ...feedbackValues,
                  feedback: e.target.value,
                });
              }}
              label="Feedback"
              placeholder="Type it here"
              error={!feedbackValues.feedback}
              required
              className="min-h-[100px]"
              textarea
            />
          </div>
        </div>
        <Button className="mt-5 !bg-wd-green hover:!bg-[#18509E] !rounded-[10px] transition-all !px-5 !py-4">
          <p className="text-white">Send Feedback</p>
        </Button>
      </div>
      <div className="w-full mt-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3719.2604516701476!2d81.65975087547112!3d21.221518181129788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDEzJzE3LjUiTiA4McKwMzknNDQuNCJF!5e0!3m2!1sen!2sin!4v1688721281652!5m2!1sen!2sin"
          width="100%"
          height={590}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Feedback;
