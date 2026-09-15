// LWHS Sustainable Energy Club: small progressive-enhancement script.

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
      applyHeight();
      window.addEventListener("resize", applyHeight);
    }
  }

  function applyHeight() {
    if (!iframe) return;
    // Show the whole Google Form (it can't report its height across origins, so
    // we use the height it was published at, with extra room on narrow screens
    // where the form reflows taller). If you edit the form and it changes
    // length, update data-google-form-height in index.html.
    var base = parseInt(iframe.getAttribute("data-google-form-height"), 10) || 1200;
    var extra = window.innerWidth < 500 ? 260 : 60; // phones wrap fields -> taller
    iframe.style.height = base + extra + "px";
  }

  /* ------------------------------------------------------------------
     In-page navigation without touching the URL.
     Anchor links (href="#...") normally append the fragment to the address
     bar, so if someone copies the URL after clicking a nav link the QR/link
     ends up like ".../#partners" and opens mid-page. Here we scroll to the
     target ourselves and never change the URL, so the shared address stays
     the clean base URL.
  ------------------------------------------------------------------ */
  var prefersReduced = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href").slice(1);
      var target = id === "top" ? document.body : document.getElementById(id);
      if (!target) return; // let unknown anchors behave normally
      e.preventDefault();
      var top = id === "top" ? 0 : target.getBoundingClientRect().top + window.pageYOffset - 64;
      window.scrollTo({ top: top, behavior: prefersReduced ? "auto" : "smooth" });
      if (typeof target.focus === "function") {
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      }
    });
  });

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
