export default function cssNestingBrowserCheck() {
  const pageMessage = document.getElementById("message")
  const styleNormal = document.getElementById("stylesheet-normal")
  const pageStyle = document.getElementById("page-style")

  // Load non-CSS-nesting stylesheet
  styleNormal.addEventListener("click", () => {
    pageStyle.setAttribute("href", "./css/styles-normal.css")
    pageMessage.classList.add("hide")
  })

  const todaysDate = new Date(Date.now())
    .toLocaleString("en-GB", { day: "numeric", month: "long", year: "numeric" })
    .split(",")[0]
  const date = document.querySelector("[data-date]")
  date.textContent = todaysDate
}
