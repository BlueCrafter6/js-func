let textHeader = getID("textHeader")
const sleep = (ms) => {
    return new Promise(r => setTimeout(r, ms))
}
let textPara = getID("textPara")
let page = getID("page")

async function changeHeader() {
textHeader.innerHTML = "4|"
await sleep(150)
textHeader.innerHTML = "40|"
await sleep(150)
textHeader.innerHTML = "404|"
await sleep(150)
textHeader.innerHTML = "404 |"
await sleep(150)
textHeader.innerHTML = "404 N|"
await sleep(150)
textHeader.innerHTML = "404 No|"
await sleep(150)
textHeader.innerHTML = "404 Not|"
await sleep(150)
textHeader.innerHTML = "404 Not |"
await sleep(150)
textHeader.innerHTML = "404 Not F|"
await sleep(150)
textHeader.innerHTML = "404 Not Fo|"
await sleep(150)
textHeader.innerHTML = "404 Not Fou|"
await sleep(150)
textHeader.innerHTML = "404 Not Foun|"
await sleep(150)
textHeader.innerHTML = "404 Not Found|"
await sleep(150)
textHeader.innerHTML = "404 Not Found&nbsp;"
await sleep(150)
}

changeHeader()

let z = window.location.toString().split("/")
let c = z[z.length-1]
page.innerHTML = c


