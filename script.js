// LWHS Sustainable Energy Club — small progressive-enhancement script.

(function () {
  "use strict";

  /* ------------------------------------------------------------------
     Google Form loader.
     The <iframe> starts on about:blank and carries the real URL in
     data-google-form-src. If that attribute still holds the placeholder
     text, we leave the friendly placeholder card visible. Once you paste
     a real Google Form embed URL there, the form loads automatically.
  ------------------------------------------------------------------ */
  var iframe = document.querySelector(".formframe iframe");
  var placeholder = document.getElementById("formPlaceholder");

  if (iframe) {
    var url = iframe.getAttribute("data-google-form-src") || "";
    var isReal = /^https?:\/\//i.test(url) && url.indexOf("PASTE_YOUR") === -1;

    if (isReal) {
      iframe.src = url;
      if (placeholder) placeholder.remove();
      iframe.addEventListener("load", sizeToViewport);
      sizeToViewport();
      window.addEventListener("resize", sizeToViewport);
    }
  }

  function sizeToViewport() {
    if (!iframe) return;
    // Give the form generous height; Google Forms handle their own scrolling.
    var h = Math.max(720, Math.round(window.innerHeight * 0.85));
    iframe.style.height = h + "px";
  }

  /* ------------------------------------------------------------------
     Scroll reveal for sections/cards (respects reduced-motion via CSS).
  ------------------------------------------------------------------ */
  var targets = document.querySelectorAll(".agenda__item, .process li, .lead, .join__intro");
  targets.forEach(function (el) { el.classList.add("reveal"); });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach(function (el) { io.observe(el); });
  } else {
    targets.forEach(function (el) { el.classList.add("is-visible"); });
  }
})();
