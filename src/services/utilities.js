import { useState, useEffect } from "react";

export function getCurrentTime() {
  const date = new Date();
  const hour = date.getHours();

  if (hour >= 3 && hour < 12) {
    return "Morning";
  } else if (hour >= 12 && hour < 18) {
    return "Afternoon";
  } else return "Evening";
}

export function addComas(number) {
  if (!number) return "-";
  const string = number.toString();
  const regex = new RegExp(/\B(?=(\d{3})+(?!\d))/g);
  return string.replace(regex, ".");
}

export function capitalize(string) {
  return string && string[0].toUpperCase() + string.slice(1);
}

export function useScrollTop(contentRef) {
  function scrollTop() {
    if (contentRef.current) {
      if (contentRef.current.parentElement) {
        contentRef.current.parentElement.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }
  }

  useEffect(() => {
    scrollTop();
  }, [contentRef]);

  return scrollTop;
}

export function useClickOutside(ref, setClickOtside) {
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setClickOtside(false);
    }
  };

  const target = document.getElementById("main-content");

  target.addEventListener("mousedown", handleClickOutside);
  return () => {
    target.removeEventListener("mousedown", handleClickOutside);
  };
}

export function ratingToStar(number) {
  const resultArray = [1, 0, 0, 0, 0];

  if (number < 1) {
    resultArray[0] = number;
  } else {
    const integerPart = Math.floor(number);
    const fraction = number - integerPart;

    for (let i = 0; i < integerPart; i++) {
      resultArray[i] = 1;
    }

    if (fraction !== 0) {
      resultArray[integerPart] = fraction;
    }
  }

  return resultArray;
}
