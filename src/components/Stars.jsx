import React, { useEffect, useState } from "react";

const FilledStar = () => (
  <svg
    fill="currentColor"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className="w-4 h-4 text-red-500"
    viewBox="0 0 24 24"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
  </svg>
);

const HalfFilledStar = () => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className="w-4 h-4 text-red-500"
    viewBox="0 0 24 24"
  >
    <defs>
      <clipPath id="half">
        <rect x="0" y="0" width="12" height="24" />
      </clipPath>
    </defs>
    <path
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      fill="rgb(239 68 68 / 1)"
      clip-path="url(#half)"
    ></path>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
  </svg>
);

const EmptyStar = () => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className="w-4 h-4 text-red-500"
    viewBox="0 0 24 24"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
  </svg>
);

const Stars = ({ totalStars, stars }) => {
  const [starsToDisplay, setStarsToDisplay] = useState([]);

  function getStarRating() {
    let starArray = [];
    for (let i = 1; i <= totalStars; i++) {
      if (stars >= i) {
        starArray.push("full");
      } else if (stars >= i - 0.5) {
        starArray.push("half");
      } else {
        starArray.push("empty");
      }
    }
    return starArray;
  }

  useEffect(() => {
    setStarsToDisplay(getStarRating());
  }, []);

  return (
    <>
      {starsToDisplay.map((star, index) =>
        star === "full" ? (
          <FilledStar key={star + index} />
        ) : star === "half" ? (
          <HalfFilledStar key={star + index} />
        ) : (
          <EmptyStar key={star + index} />
        )
      )}
    </>
  );
};

export default Stars;
