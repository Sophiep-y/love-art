import React from "react";

/**
 * @enum {{Top: string, Bottom: string}}
 */
export const Position = {
  Top: "Top",
  Bottom: "Bottom",
};

/**
 * @param {string} title
 * @param {Position} position
 * @returns {Element}
 * @constructor
 */
const Title = ({ title, position }) => {
  const positionStyle =
    position === Position.Top
      ? "hidden lg:inline-block md:inline-block "
      : "sm:hidden flex justify-center mx-auto absolute bottom-4 left-4 right-4";
  const style = `${positionStyle} uppercase text-6xl text-primary font-extralight  transition-opacity duration-500 ease-in-out`;
  return <span className={`${style} `}>{title}</span>;
};

export default Title;
