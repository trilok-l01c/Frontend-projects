let price = 3.26;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

const btn = document.getElementById("purchase-btn");
const input = document.getElementById("cash");
const div = document.getElementById("change-due");

const DENOMS = [
  ['ONE HUNDRED', 10000],
  ['TWENTY', 2000],
  ['TEN', 1000],
  ['FIVE', 500],
  ['ONE', 100],
  ['QUARTER', 25],
  ['DIME', 10],
  ['NICKEL', 5],
  ['PENNY', 1]
];

btn.addEventListener("click", () => {
  let cash = parseFloat(input.value);
  if (!input.value || cash < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }

  if (cash === price) {
    div.textContent = "No change due - customer paid with exact cash";
    return;
  }

  let changeDue = Math.round((cash - price) * 100);
  let cidInCents = cid.map(([unit, amount]) => [unit, Math.round(amount * 100)]);
  let totalCID = cidInCents.reduce((acc, [, amt]) => acc + amt, 0);
  let changeArr = [];

  for (let [unit, value] of DENOMS) {
    let drawerAmt = cidInCents.find(d => d[0] === unit)[1];
    let used = 0;
    while (changeDue >= value && drawerAmt >= value) {
      changeDue -= value;
      drawerAmt -= value;
      used += value;
    }
    if (used > 0) {
      changeArr.push([unit, used / 100]);
    }
  }

  if (changeDue > 0) {
    div.textContent = "Status: INSUFFICIENT_FUNDS";
    return;
  }

  const formatted = changeArr
    .map(([unit, amt]) => `${unit}: $${amt.toFixed(2)}`)
    .join(" ");

  const drawerRemaining = cidInCents.reduce((acc, [, amt]) => acc + amt, 0);
  const changeTotal = Math.round((cash - price) * 100);

  if (changeTotal === totalCID) {
    div.textContent = "Status: CLOSED " + formatted;
  } else {
    div.textContent = "Status: OPEN " + formatted;
  }
});
