/* eslint-disable import/no-unresolved */
import React from "react";
import { render } from "react-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import App from "./app";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "./index.scss";

render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App i18n={i18n} />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

(($) => {
  // Preloader (if the #preloader div exists)
  $(window).on("load", () => {
    if ($("#preloader").length) {
      $("#preloader")
        .delay(100)
        .fadeOut("slow", () => {
          $(this).remove();
        });
    }
  });

  // Back to top button
  $(window).scroll(() => {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  $(".back-to-top").click(() => {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Smooth scroll for the navigation and links with .scrollto classes
  $(".main-nav a, .mobile-nav a, .scrollto").on("click", () => {
    const { hostname, pathname } = window.location;

    if (!hostname || !pathname) return;

    const pathnamesEqual = pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "");

    if (pathnamesEqual && hostname === this.hostname) {
      const target = $(this.hash);
      if (target.length) {
        let topSpace = 0;

        if ($("#header").length) {
          topSpace = $("#header").outerHeight();

          if (!$("#header").hasClass("header-scrolled")) {
            topSpace -= 20;
          }
        }

        $("html, body").animate(
          {
            scrollTop: target.offset().top - topSpace,
          },
          1500,
          "easeInOutExpo"
        );

        if ($(this).parents(".main-nav, .mobile-nav").length) {
          $(".main-nav .active, .mobile-nav .active").removeClass("active");
          $(this).closest("li").addClass("active");
        }

        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $(".mobile-nav-toggle i").toggleClass("fa-times fa-bars");
          $(".mobile-nav-overly").fadeOut();
        }
        //        return false;
      }
    }
    //  return true;
  });

  // Navigation active state on scroll
  // const navSections = $("section");
  // const mainNav = $(".main-nav, .mobile-nav");
  // const mainNavHeight = $("#header").outerHeight();

  // $(window).on("scroll", () => {
  //   const curPosition = $(this).scrollTop();

  //   navSections.each(() => {
  //     const top = $(this).offset().top - mainNavHeight;
  //     const bottom = top + $(this).outerHeight();

  //     if (curPosition >= top && curPosition <= bottom) {
  //       mainNav.find("li").removeClass("active");
  //       mainNav
  //         .find(`a[href="#${$(this).attr("id")}"]`)
  //         .parent("li")
  //         .addClass("active");
  //     }
  //   });
  // });

  // jQuery counterUp (used in Why Us section)
  // $('[data-toggle="counter-up"]').counterUp({
  //   delay: 10,
  //   time: 1000
  // });

  // Porfolio isotope and filter
  // $(window).on('load', function () {
  //   var portfolioIsotope = $('.portfolio-container').isotope({
  //     itemSelector: '.portfolio-item'
  //   });
  //   $('#portfolio-flters li').on('click', function () {
  //     $("#portfolio-flters li").removeClass('filter-active');
  //     $(this).addClass('filter-active');

  //     portfolioIsotope.isotope({ filter: $(this).data('filter') });
  //   });
  // });
})(window.jQuery);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
