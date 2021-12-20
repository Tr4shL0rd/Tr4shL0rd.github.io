let debug = true;
function removeDup(Arr) {
    let uniqArr = [...new Set(Arr)];
    return uniqArr
}

function generatePlan() {
    const foods = ["oksekød med ris", "pizza med stuff", "speghetti kødsovs", "hestemad", "rundstykker", "kødsovs med ris"]
    const days  = ["Mandag: ", "Tirsdag:", "Onsdag: ", "Torsdag:", "Fredag: ", "Lørdag: "]

    let foodTable = "<tr>";
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
    
    let uniqFoods = removeDup(foodArray);
    if (foodArray.length != uniqFoods.length) {
        console.error("DEBUG MESSAGE!");
        generatePlan();
    }
    foodTable += "</tr></table>";
    document.getElementById("foodPlacement").innerHTML = foodTable;
}







if (debug) {
    generatePlan();
}