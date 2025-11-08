// const range = (start, end) => Array(end - start + 1).fill(start).map((el, idx) => el + idx);
// const charRange = (start, end) => range(start.charCodeAt(0), end.charCodeAt(0)).map(code => String.fromCharCode(code));
// // ** on loading the window **
// window.onload = () => {
//     const container = document.getElementsByClassName("grid-container");
//     const colHead = document.getElementsByClassName("column-headers");
//     const rowHead = document.getElementsByClassName("row-headers");
//     // function to create generate labels
//     const createLabel = (name, cls, par) => {
//         const labelCell = document.createElement("div");
//         labelCell.className = cls;
//         labelCell.textContent = name;
//         par.appendChild(labelCell);
//     }

//     const colLabels = charRange("A", "J");
//     colLabels.forEach(el => {
//         createLabel(el, "col-header", colHead)
//     });
// }

const range = (start, end) => Array(end - start + 1).fill(start).map((element, index) => element + index);
const charRange = (start, end) => range(start.charCodeAt(0), end.charCodeAt(0)).map(code => String.fromCharCode(code));

window.onload = () => {
  const container = document.getElementsByClassName("grid-container");
  const createLabel = (name) => {
    const label = document.createElement("div");
    label.className = "label";
    label.textContent = name;
    container.appendChild(label);
  }
  const letters = charRange("A", "J");
  letters.forEach(createLabel);
  range(1, 99).forEach(number => {
    createLabel(number);
    letters.forEach(letter => {
      const input = document.createElement("input");
      input.type = "text";
      input.id = letter + number;
      input.ariaLabel = letter + number;
      container.appendChild(input);
    })
  })
}