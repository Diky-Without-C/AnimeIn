import { useEffect } from "react";

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
      contentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  useEffect(() => {
    scrollTop();
  }, [contentRef]);

  return scrollTop;
}
