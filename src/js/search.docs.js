let tableData = getID("tab").getElementsByTagName("tr");
let arr = [];
let searchTable = getID("searchTable");
for (tr of tableData) {
  arr.push(tr);
}
arr.splice(0, 1);
console.log(arr);

function search(input, array) {
  for (data of array) {
    if (data.innerText.toLowerCase().includes(input.value.toLowerCase())) {
      data.style.display = "table-row";
    } else {
      data.style.display = "none";
    }
  }
}

searchTable.onkeyup = () => search(searchTable, arr);
