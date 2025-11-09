const range = (start, end) => Array(end - start + 1).fill(start).map((element, index) => element + index);
const charRange = (start, end) => range(start.charCodeAt(0), end.charCodeAt(0)).map(code => String.fromCharCode(code));

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