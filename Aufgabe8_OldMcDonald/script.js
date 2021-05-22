var L09_OldMcDonaldsFarm;
(function (L09_OldMcDonaldsFarm) {
    /*
    Aufgabe: L09_OldMcDonaldsFarm
    Name: Maximilian Buckel
    Matrikel: 266830
    Datum: 22.05.2021
    Quellen: Larissa Gaede, Eva Breuninger
    */
    var foodStorage = new L09_OldMcDonaldsFarm.FoodStorage(5, 18, 27, 10, 25);
    var animalArr = [];
    makeAnimals();
    var i = 0;
    var dayCounter = 1;
    var hasBought = false;
    var nextBtn = document.getElementById("next");
    nextBtn.innerHTML = "Start";
    nextBtn.addEventListener("click", function () {
        if (i < animalArr.length) {
            var img = document.getElementById("img");
            img.setAttribute("src", "./" + animalArr[i].type + ".jpg");
            hasBought = false;
            nextBtn.innerHTML = "Next";
            animalArr[i].sing();
            animalArr[i].eat();
            inventory();
            i++;
        }
        else {
            buyFood();
            nextBtn.innerHTML = "Next Day";
            alert("Day " + dayCounter + " is over" + "\n" +
                ((hasBought) ? "Bought food, because some food was running low" : "Hasn't bought any food because there is still enough left") + "\n" +
                "Current Food Storage: " + "\n" +
                "Meat: " + foodStorage.meat + "\n" +
                "Weed: " + foodStorage.weed + "\n" +
                "Sweets: " + foodStorage.sweets + "\n" +
                "Sushi: " + foodStorage.sushi + "\n" +
                "Carrot: " + foodStorage.carrot);
            i = 0;
            dayCounter++;
        }
    });
    function inventory() {
        var inventoryDiv = document.getElementById("inventory");
        inventoryDiv.innerHTML = "<b> Inventory: </b> " + "<br>" +
            "Meat: " + foodStorage.meat + "<br>" +
            "Weed: " + foodStorage.weed + "<br>" +
            "Sweets: " + foodStorage.sweets + "<br>" +
            "Sushi: " + foodStorage.sushi + "<br>" +
            "Carrot: " + foodStorage.carrot;
    }
    function makeAnimals() {
        animalArr.push(new L09_OldMcDonaldsFarm.Animal("Bella", "cat", "meat", 2, "meow", foodStorage));
        animalArr.push(new L09_OldMcDonaldsFarm.Animal("Niko", "dog", "meat", 3, "niko-niko-nii", foodStorage));
        animalArr.push(new L09_OldMcDonaldsFarm.Animal("Shiro", "catgirl", "sweets", 10, "nya~", foodStorage));
        animalArr.push(new L09_OldMcDonaldsFarm.Animal("Pfote", "rabbit", "carrot", 3, "nom-nom", foodStorage));
        animalArr.push(new L09_OldMcDonaldsFarm.Animal("Daily", "horse", "weed", 5, "wheeeaaa", foodStorage));
        animalArr.push(new L09_OldMcDonaldsFarm.Animal("Eva", "human", "sushi", 5, "omae wa mo shindeiru", foodStorage));
    }
    function foodNeeded() {
        var foodDesired = { meat: 0, weed: 0, sweets: 0, sushi: 0, carrot: 0 };
        for (var i_1 = 0; i_1 < animalArr.length; i_1++) {
            if (animalArr[i_1].food == "meat")
                foodDesired.meat += animalArr[i_1].foodAmount;
            if (animalArr[i_1].food == "weed")
                foodDesired.weed += animalArr[i_1].foodAmount;
            if (animalArr[i_1].food == "sweets")
                foodDesired.sweets += animalArr[i_1].foodAmount;
            if (animalArr[i_1].food == "sushi")
                foodDesired.sushi += animalArr[i_1].foodAmount;
            if (animalArr[i_1].food == "carrot")
                foodDesired.carrot += animalArr[i_1].foodAmount;
        }
        return foodDesired;
    }
    function buyFood() {
        if (foodStorage.meat < foodNeeded().meat) {
            foodStorage.meat += Math.round(foodNeeded().meat * 2 * Math.random() + foodNeeded().meat);
            hasBought = true;
            console.log("bought meat");
        }
        if (foodStorage.weed < foodNeeded().weed) {
            foodStorage.weed += Math.round(foodNeeded().weed * 2 * Math.random() + foodNeeded().weed);
            hasBought = true;
            console.log("bought weed");
        }
        if (foodStorage.sweets < foodNeeded().sweets) {
            foodStorage.sweets += Math.round(foodNeeded().sweets * 2 * Math.random() + foodNeeded().sweets);
            hasBought = true;
            console.log("bought sweets");
        }
        if (foodStorage.sushi < foodNeeded().sushi) {
            foodStorage.sushi += Math.round(foodNeeded().sushi * 2 * Math.random() + foodNeeded().sushi);
            hasBought = true;
            console.log("bought sushi");
        }
        if (foodStorage.carrot < foodNeeded().carrot) {
            foodStorage.carrot += Math.round(foodNeeded().carrot * 2 * Math.random() + foodNeeded().carrot);
            hasBought = true;
            console.log("bought carrots");
        }
    }
})(L09_OldMcDonaldsFarm || (L09_OldMcDonaldsFarm = {}));
//# sourceMappingURL=script.js.map