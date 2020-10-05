import React, { useLayoutEffect } from "react";

const $ = window.jQuery;

const BackToTop = () => {
  useLayoutEffect(() => {
    const handler = (e) => {
      const {
        scrollingElement: { scrollTop: distanceFromTop },
      } = e.target;

      if (distanceFromTop > 100) {
        $(".back-to-top").fadeIn("slow");
      } else {
        $(".back-to-top").fadeOut("slow");
      }
    };

    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  const handler = (e) => {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
  };

  return (
    /* eslint-disable-next-line jsx-a11y/anchor-is-valid */
    <a href="#" className="back-to-top" onClick={handler}>
      <i className="fa fa-chevron-up" />
    </a>
  );
};

export default BackToTop;
