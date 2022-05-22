import { useState, useEffect } from "react";

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

export const useResize = () => {
  const [horizontalDimension, setDimension] = useState(
    document.body.clientWidth
  );

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimension(document.body.clientWidth);
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  return { horizontalDimension };
};
