const searchInp = getID("searchInput");
const fuwul = document.getElementsByClassName("version-changelog");
const lowercase = searchInp.value.toLowerCase();
const fuwli = document.getElementsByClassName("heading");

const sleep = (ms) => {
  return new Promise((r) => setTimeout(r, ms));
};

async function search(li, input) {
  const arr = [];
  for (let e of li) {
    arr.push(e.innerHTML);
  }
  let filtered = arr.filter((user) => {
    user = user.toLowerCase();
    return user.indexOf(input.value.toLowerCase()) > -1;
  });
  for (let e of fuwli) {
    const div = document.getElementById(e.innerHTML.split(" ").join(""));
    if (filtered.indexOf(e.innerHTML) == -1) return div.style.display = "none";
    div.style.display = "block";
  }
}

searchInp.onkeyup = () => search(fuwli, searchInp);
