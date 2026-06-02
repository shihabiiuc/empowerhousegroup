document.addEventListener("astro:page-load", () => {
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobile-nav");

  hamburger?.addEventListener("click", () => {
    const isOpen = hamburger.classList.toggle("open");
    mobileNav?.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
    mobileNav?.setAttribute("aria-hidden", String(!isOpen));
  });

  // Close when a link is tapped
  mobileNav?.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      hamburger?.classList.remove("open");
      mobileNav.classList.remove("open");
      hamburger?.setAttribute("aria-expanded", "false");
      mobileNav.setAttribute("aria-hidden", "true");
    }),
  );
});
