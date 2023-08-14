export default function accordion() {
  const accordionButtons = document.querySelectorAll("[data-accordion-button]")
  const accordionContents = document.querySelectorAll(".accordion-content")

  accordionContents.forEach((content) => {
    content.setAttribute("aria-hidden", true)
    content.classList.remove("open")
  })

  accordionButtons.forEach((button) => {
    button.setAttribute("aria-expanded", false)

    const number = button.getAttribute("id").split("-").pop()

    const accordionContent = document.querySelector(
      `#accordion-content-${number}`
    )

    const accordionHeading = accordionContent.children[0] // gets first child (p)

    button.addEventListener("click", () => {
      button.classList.toggle("expanded")
      accordionContent.classList.toggle("open")

      if (button.classList.contains("expanded")) {
        button.setAttribute("aria-expanded", true)
        accordionContent.setAttribute("aria-hidden", false)
        accordionHeading.setAttribute("tabindex", "0") // sets focus on first child (h3) with tabindex
      } else {
        button.setAttribute("aria-expanded", false)
        accordionContent.setAttribute("aria-hidden", true)
        accordionHeading.removeAttribute("tabindex") // removes focus from first child (h3)
      }
    })
  })
}
