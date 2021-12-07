// const foods = ["mad1", "mad2", "mad3", "mad4", "mad5", "mad6"]
const foods = ["oksekød med ris", "pizza med stuff", "speghetti kødsovs", "hestemad", "rundstykker", "kødsovs med ris"]
const days  = ["Mandag: ", "Tirsdag:", "Onsdag: ", "Torsdag:", "Fredag: ", "Lørdag: "]

let foodTable = "<tr>";
let dayText = "dag";
// fills the table with random food to eat for each day
// for (let _ of days) {                       // Cant decide which one to use
for (let day = 0; day < days.length; day++) {  // Cant decide which one to use
    
    // picks a random element from foods array
    rng = Math.floor(Math.random() * foods.length); 
    // adds the random element to the table
    foodTable += `<td>${foods[rng]}</td>`; 

}


foodTable += "</tr></table>";
document.getElementById("foodPlacement").innerHTML = foodTable;