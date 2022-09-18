const st = getID("scripttag")
const out = getID("out")
function setClipboard(text) {
    const type = "text/plain";
    const blob = new Blob([text], { type });
    const data = [new ClipboardItem({ [type]: blob })];

    navigator.clipboard.write(data)
}

st.addEventListener("mouseenter", () => {
 out.innerHTML = "No link"
})