let debug = true;
function removeDup(Arr) {
    let uniqArr = [...new Set(Arr)];
    return uniqArr
}

function generatePlan() {
    // const foods = ["mad1", "mad2", "mad3", "mad4", "mad5", "mad6"]
    const foods = ["oksekød med ris", "pizza med stuff", "speghetti kødsovs", "hestemad", "rundstykker", "kødsovs med ris"]
    const days  = ["Mandag: ", "Tirsdag:", "Onsdag: ", "Torsdag:", "Fredag: ", "Lørdag: "]

    let foodTable = "<tr>";
    let dayText = "dag";
    var foodArray = []
    
    
    // fills the table with random food to eat for each day
    for (let day = 0; day < days.length; day++) {  
        rng = Math.floor(Math.random() * foods.length); 
        var foodForDay = foods[rng]
        foodArray.push(foodForDay);
        // picks a random element from foods array
        if (removeDup(foodArray).length != 6){
            console.log("too short!");
        }
        // adds the random element to the table
        console.log(foodArray)
        if (foodArray.length == 6 && removeDup(foodArray).length == 6) {
            console.log(foodArray[day]);
        }
        foodTable += `<td id='foodCell'>${foodArray[day]}</td><tr>`; 
        
    }
    
    // console.log(foodArray.length);
    let uniqFoods = removeDup(foodArray);
    // console.log(uniqFoods);
    if (foodArray.length != uniqFoods.length) {
        // console.error("FUCK");
        generatePlan();
    }
    foodTable += "</tr></table>";
    document.getElementById("foodPlacement").innerHTML = foodTable;
}







if (debug) {
    generatePlan();
}