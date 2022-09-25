const st = getID("scripttag")
const out = getID("out")
let npm = getID("npm")

st.addEventListener("mouseenter", () => {
    out.textContent = "<script src='https://jsfunc.web.app/package/BETA/v0.5/jsf.js'></script>"
})

npm.addEventListener("mouseenter", () => {
    out.textContent = "Coming Soon"
})