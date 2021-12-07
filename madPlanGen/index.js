
const foods = ["mad1", "mad2", "mad3", "mad4", "mad5", "mad6"]
const days  = ["Mandag: ", "Tirsdag:", "Onsdag: ", "Torsdag:", "Fredag: ", "Lørdag: "]
let mad = []
for (let i = 0; i<days.length; i++) {
    let foodRng = Math.floor(Math.random()*days.length)
    mad.push(`${days[i]} ${foods[foodRng]}`)
    // console.log(`${days[i]} ${foods[foodRng]}`);
}
let foodTable = document.getElementById("food-table");
let tables;
for (let i = 0; i<6; i++) {
    tables = document.createElement("tr");
    foodTable.appendChild(tables);
    tables.innerHTML = `<td>${mad[i]}</td>`;
}
// foodTable.innerHTML = mad
