const range = (start, end) => Array(end - start + 1).fill(start).map((element, index) => element + index);
const charRange = (start, end) => range(start.charCodeAt(0), end.charCodeAt(0)).map(code => String.fromCharCode(code));

const sum = nums => nums.reduce((el, acc) => el + acc, 0);
// const subtract = nums => nums.reduce((el, acc) => el - acc, 0);
const isEven = num => !(num%2);
const average = nums => sum(nums)/nums.length;
const median = nums => {
    const sorted = nums.slice().sort();
    const mid = nums.length/2 - 1;
    if(nums.length % 2 === 0)return average([sorted[mid], sorted[mid + 1]]);
    else return sorted[Math.ceil(mid)];
}

// object of spreadsheet funcitons
const spreadsheetFuncs = {
    sum,
    average,
    median
}
window.onload = () => {
    const colHeaders = document.getElementById("col-head");
    const rowHeaders = document.getElementById("row-head");
    const container = document.getElementById("container");
    
    const createLabel = (name, clss, par) => {
        const label = document.createElement("div");
        label.className = clss;
        label.textContent = name;
        par.appendChild(label);
        return label;
    };

    // Create column headers (A-J)
    const letters = charRange("A", "J");
    letters.forEach(el => {
        createLabel(el, "column-header", colHeaders);
    });

    // Create row headers and cells
    range(1, 99).forEach(number => {
        createLabel(number, "row-header", rowHeaders);
        
        // Create cells for each row
        letters.forEach(letter => {
            const cell = document.createElement("input");
            cell.className = "cell";
            cell.type = "text";
            cell.id = letter + number;
            cell.ariaLabel = letter + number;
            container.appendChild(cell);
        });
    });
}