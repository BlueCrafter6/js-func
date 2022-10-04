
const searchInp = getID("searchInput");
const fuwul = document.getElementsByClassName("version-changelog");
const lowercase = searchInp.value.toLowerCase();
const fuwli = document.getElementsByClassName("heading");

async function search(li, input) {
  const arr = [];
  for (let e of li) {
    arr.push(e.innerHTML);
  }

  let filtered = arr.filter((user) => {
    user = user.toLowerCase();
    return user.indexOf(input.value.toLowerCase()) > -1;
  });
  for (let e of li) {
    const div = document.getElementById(e.innerHTML.split(" ").join(""));
    div.style.animation = "none"
    if (filtered.indexOf(e.innerHTML) == -1) div.style.display = "none"
    else div.style.display = "block";
  }
}

searchInp.onkeyup = () => search(fuwli, searchInp);
