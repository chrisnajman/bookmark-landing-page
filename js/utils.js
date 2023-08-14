export function isValidEmail(emailInput) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailPattern.test(emailInput)
}
/** Usage: */
/*
  if (!isValidEmail(emailInputId.value.trim())) {
    // error messages ... 
    return
  } else {
    // success messages ...
  }
*/

export function setMultipleAttributes(element, attributesToSet) {
  for (let i in attributesToSet) {
    element.setAttribute(i, attributesToSet[i])
    // i is the attribute(s)
    // [i] is the attribute value(s)
  }
}
/** Usage; */
/*
  setMultipleAttributes(formMessageImg, {
    type: "img",
    src: "./img/icon-error.svg",
    width: "24",
    alt: "",
    "aria-hidden": true,
    class: "icon-warning",
  })
*/
