let toggle = getID("toggle"),
body = document.body,
sun = `<i class="fa-solid fa-sun"></i>`,
moon = `<i class="fa-solid fa-moon"></i>`

toggle.addEventListener("click", () => changeMode())

let storedValue = localStorage.getItem("mode")
if (storedValue == "dark") {
    changeModeDark()
} else if (storedValue == "light") {
    chnageModeLight()
}

function changeModeDark() {
    toggle.innerHTML = sun
    body.classList.remove("mode-light")
    body.classList.add("mode-dark")
    localStorage.setItem("mode", "dark")
} 

function changeModeLight() {
    toggle.innerHTML = moon
    body.classList.remove("mode-dark")
    body.classList.add("mode-light")
    localStorage.setItem("mode", "light")
}

function changeMode() {
    if (body.classList.contains("mode-light")) return changeModeDark()
    changeModeLight()
}