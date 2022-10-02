let select = getID("ver");
let versionPlace = getID("versionplace");

select.addEventListener("change", function () {
  versionPlace.innerHTML = select.value;
});

let arr = [];
let versUl = getID("vers");
let spinner = getClass("loader")[0];

let options = select.options;
for (let i of options) {
  arr.push(i);
}
arr.forEach(async (option) => {
  const li = document.createElement("li");
  li.innerHTML = option.label;
  if (option == arr[0]) {
    versionPlace.innerHTML = option.label;
    li.innerHTML = `<i class="fa-solid fa-star"></i> ${option.label}`;
  }
  await sleep(500);
  spinner.style.display = "none";
  versUl.appendChild(li);
});

let cpc = getID("clipboard")
let stl = getID("scripttaglink").innerText
cpc.addEventListener("click", async function () {
    navigator.clipboard.writeText(stl)
    cpc.innerHTML = `<i class="fa-solid fa-clipboard-check"></i> Copied`
await sleep(500)
cpc.innerHTML = `<i class="fa-solid fa-clipboard"></i> Copy to clipboard`
})