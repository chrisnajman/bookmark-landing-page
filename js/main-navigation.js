export default function mainNavigation() {
  const pageHeaderInner = document.getElementById("page-header-inner")
  const mobileNavButton = document.getElementById("mobile-nav-button")
  mobileNavButton.textContent = "Open menu"
  const navigation = document.querySelector(".navigation")
  const navBreakpoint = 700

  mobileNavButton.addEventListener("click", (e) => {
    navigation.classList.toggle("main-navigation")
    let buttonText = e.target.textContent
    e.target.textContent =
      e.target.textContent === "Open menu" ? "Close menu" : "Open menu"

    if (buttonText === "Open menu") {
      mobileNavButton.classList.add("mob-menu-close")
      mobileNavButton.classList.remove("mob-menu-open")
      pageHeaderInner.classList.add("mobile-header")
    }
    if (buttonText === "Close menu") {
      mobileNavButton.classList.add("mob-menu-open")
      mobileNavButton.classList.remove("mob-menu-close")
      pageHeaderInner.classList.remove("mobile-header")
    }
  })

  window.addEventListener("resize", () => {
    if (window.innerWidth > navBreakpoint) {
      navigation.classList.add("main-navigation")
      mobileNavButton.classList.add("mob-menu-open")
      mobileNavButton.textContent = "Open menu"
      mobileNavButton.classList.remove("mob-menu-close")
      pageHeaderInner.classList.remove("mobile-header")
    }
  })
}
