let funcparams = doc.querySelectorAll(".card");
let fpArray = Array.from(funcparams)
console.log(fpArray)
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
      for (div of fpArray) {
      if (data.innerHTML.toLowerCase().includes(input.value.toLowerCase())) {
        data.style.display = "table-row"
        if (div.innerText.toLowerCase().includes(input.value.toLowerCase())) {
div.style.display = "block"
        }
      } else {
        if (!div.innerText.toLowerCase().includes(input.value.toLowerCase())) {
          div.style.display = "none"
        }
        data.style.display = "none"
      }
     }
}
}

searchTable.onkeyup = () => search(searchTable, arr);
