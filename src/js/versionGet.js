let select = getID("ver");
let versionPlace = getID("versionplace");
let stl = getID("scripttaglink").innerText.toString()

select.addEventListener("change", function () {
  versionPlace.innerHTML = select.value;
});

let arr = [];
let versUl = getID("vers");

let options = select.options;
for (let i of options) {
  arr.push(i);
}
arr.forEach(async (option) => {
  const li = document.createElement("li");
  li.innerHTML = option.label;
  if (option == arr[0]) {
    versionPlace.innerHTML = option.label;
    li.innerHTML = `<i class="fa-solid fa-star"></i> <b>${option.label}</b>`;
  }
  versUl.appendChild(li);
})


let cpc = getID("clipboard")
cpc.addEventListener("click", async function () {
    navigator.clipboard.writeText(`<script src="https://jsfunc.web.app/package/${versionPlace.innerText}/jsf.js" defer>`)
    cpc.innerHTML = `<i class="fa-solid fa-clipboard-check"></i> Copied`
await sleep(500)
cpc.innerHTML = `<i class="fa-solid fa-clipboard"></i> Copy to clipboard`
})