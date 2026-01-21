/* ExoCloud — tiny JS for mobile menu */
(function () {
  const openBtn = document.getElementById("openMenuBtn");
  const closeBtn = document.getElementById("closeMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileBackdrop = document.getElementById("mobileBackdrop");
  const mobilePanel = document.getElementById("mobilePanel");

  function openMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add("hidden");
    document.body.style.overflow = "";
  }

  if (openBtn) openBtn.addEventListener("click", openMenu);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  if (mobileBackdrop) mobileBackdrop.addEventListener("click", closeMenu);

  // close on link click
  if (mobilePanel) {
    mobilePanel.addEventListener("click", function (e) {
      const a = e.target.closest("a");
      if (a && a.getAttribute("href") && a.getAttribute("href").startsWith("#")) {
        closeMenu();
      }
    });
  }

  // ESC closes
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });
})();
