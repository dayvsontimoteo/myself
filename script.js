function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    html.classList.remove("light")
    html.classList.add("dark")
    img.setAttribute("src", "./assets/eu.jpg")
  } else {
    html.classList.remove("dark")
    html.classList.add("light")
    img.setAttribute("src", "./assets/eu.jpg")
  }
}
