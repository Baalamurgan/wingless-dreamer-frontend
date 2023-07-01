"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const ReactCarousel = ({
  showArrows,
  onChange,
  children,
}: {
  children: React.ReactChild[];
  showArrows?: boolean;
  onChange: (e: any) => void;
}) => {
  return (
    <Carousel
      centerMode={true}
      centerSlidePercentage={20} // 5 slides per page
      showArrows={showArrows}
      onChange={onChange}
      useKeyboardArrows={true}
      showStatus={false}
      showIndicators={false}
      infiniteLoop={false}
      swipeable={true}
      emulateTouch={true}
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{
              position: "absolute",
              zIndex: 40,
              cursor: "pointer",
              top: "calc(50% - 15px)",
              right: 0,
            }}
          >
            <div>
              <AiOutlineRight className="h-6 w-6 text-white font-bold" />
            </div>
          </button>
        )
      }
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{
              position: "absolute",
              zIndex: 40,
              cursor: "pointer",
              top: "calc(50% - 15px)",
              left: 0,
            }}
          >
            <div>
              <AiOutlineLeft className="h-6 w-6 text-white font-bold" />
            </div>
          </button>
        )
      }
    >
      {children}
    </Carousel>
  );
};

export default ReactCarousel;
