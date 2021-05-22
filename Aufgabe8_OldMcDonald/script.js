var Animal = /** @class */ (function () {
    function Animal(_name, _type, _food, _foodAmount, _sound, _foodStorage) {
        this.name = _name;
        this.type = _type;
        this.food = _food;
        this.foodAmount = _foodAmount;
        this.sound = _sound;
        this.foodStorage = _foodStorage;
    }
    Animal.prototype.sing = function () {
        var songDiv = document.getElementById("song");
        songDiv.style.display = "inherit";
        songDiv.innerHTML = "<b> " + this.name + " is now singing </b><br>" +
            "Old Mac Donald had a farm, I-A-I-A-O. <br>" +
            "And on his farm he had some " + this.type + "s" + ", I-A-I-A-O. <br>" +
            "With a " + this.sound + "-" + this.sound + " here, and a " + this.sound + "-" + this.sound + " there, <br>" +
            "here a " + this.sound + ", there a " + this.sound + " ev'rywhere a " + this.sound + "-" + this.sound;
    };
    Animal.prototype.eat = function () {
        this.foodStorage.decrease(this.food, this.foodAmount, this.name);
    };
    return Animal;
}());
var FoodStorage = /** @class */ (function () {
    function FoodStorage(_meat, _weed, _sweets, _sushi, _carrot) {
        this.meat = _meat;
        this.weed = _weed;
        this.sweets = _sweets;
        this.sushi = _sushi;
        this.carrot = _carrot;
    }
    FoodStorage.prototype.decrease = function (_food, _foodAmount, _name) {
        var foodDiv = document.getElementById("food");
        var newAmount = 0;
        switch (_food) {
            case "meat":
                this.meat -= _foodAmount;
                newAmount = this.meat;
                break;
            case "weed":
                this.weed -= _foodAmount;
                newAmount = this.weed;
                break;
            case "sweets":
                this.sweets -= _foodAmount;
                newAmount = this.sweets;
                break;
            case "sushi":
                this.sushi -= _foodAmount;
                newAmount = this.sushi;
                break;
            case "carrot":
                this.carrot -= _foodAmount;
                newAmount = this.carrot;
                break;
        }
        foodDiv.innerHTML = _name + " ate " + _foodAmount + ((_foodAmount == 1) ? " piece" : " pieces") + " of " + _food + "<br> " + newAmount + ((newAmount == 1) ? " piece " : " pieces ") + "left";
    };
    return FoodStorage;
}());
var foodStorage = new FoodStorage(5, 18, 27, 10, 25);
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
    animalArr.push(new Animal("Bella", "cat", "meat", 2, "meow", foodStorage));
    animalArr.push(new Animal("Niko", "dog", "meat", 3, "niko-niko-nii", foodStorage));
    animalArr.push(new Animal("Shiro", "catgirl", "sweets", 10, "nya~", foodStorage));
    animalArr.push(new Animal("Pfote", "rabbit", "carrot", 3, "nom-nom", foodStorage));
    animalArr.push(new Animal("Daily", "horse", "weed", 5, "wheeeaaa", foodStorage));
    animalArr.push(new Animal("Eva", "human", "sushi", 5, "omae wa mo shindeiru", foodStorage));
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
//# sourceMappingURL=script.js.map