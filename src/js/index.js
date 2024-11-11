(() => {
  const menubtn = document.getElementById("menu-btn");

  menubtn.addEventListener("click", (e) => {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.toggle("hidden");
  });
})();
