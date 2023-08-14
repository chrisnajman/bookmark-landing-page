import { isValidEmail } from "./utils.js"
import { setMultipleAttributes } from "./utils.js"
export default function newsLetter() {
  const newsLetterForm = document.getElementById("newsletter-form")
  const newsLetterFormInner = document.getElementById("newsletter-form-inner")
  const email = document.getElementById("email")
  const formMessage = document.createElement("p")
  const formMessageImg = document.createElement("img")
  setMultipleAttributes(formMessageImg, {
    type: "img",
    src: "./img/icon-error.svg",
    width: "24",
    alt: "",
    "aria-hidden": true,
    class: "icon-warning",
  })

  formMessage.classList.add("form-message")

  newsLetterForm.addEventListener("submit", (e) => {
    e.preventDefault()

    if (!isValidEmail(email.value.trim())) {
      formMessage.textContent = "Invalid email address!"
      formMessage.append(formMessageImg)
      newsLetterFormInner.classList.add("warning")
      email.classList.add("error-border")
      email.after(formMessage)
      return
    } else {
      formMessage.textContent = "You have signed up!"
      newsLetterFormInner.classList.remove("warning")
      email.classList.remove("error-border")
      email.after(formMessage)
    }

    email.value = ""
  })
}
