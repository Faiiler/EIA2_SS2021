namespace L09_OldMcDonaldsFarm {

    /*
    Aufgabe: L09_OldMcDonaldsFarm
    Name: Maximilian Buckel
    Matrikel: 266830
    Datum: 22.05.2021
    Quellen: Larissa Gaede, Eva Breuninger
    */


    interface FoodDesired {
        meat: number;
        weed: number;
        sweets: number;
        sushi: number;
        carrot: number;
    }

    let foodStorage: FoodStorage = new FoodStorage(5, 18, 27, 10, 25);
    let animalArr: Animal[] = [];
    makeAnimals();



    let i: number = 0;
    let dayCounter: number = 1;
    let hasBought: boolean = false;
    let nextBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("next");
    nextBtn.innerHTML = "Start";
    nextBtn.addEventListener("click", function (): void {
        if (i < animalArr.length) {
            let img: HTMLImageElement = <HTMLImageElement>document.getElementById("img");
            img.setAttribute("src", "./" + animalArr[i].type + ".jpg");
            hasBought = false;
            nextBtn.innerHTML = "Next";
            animalArr[i].sing();
            animalArr[i].eat();
            inventory();
            i++;
        } else {
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

    function inventory(): void {
        let inventoryDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("inventory");
        inventoryDiv.innerHTML = "<b> Inventory: </b> " + "<br>" +
            "Meat: " + foodStorage.meat + "<br>" +
            "Weed: " + foodStorage.weed + "<br>" +
            "Sweets: " + foodStorage.sweets + "<br>" +
            "Sushi: " + foodStorage.sushi + "<br>" +
            "Carrot: " + foodStorage.carrot;
    }


    function makeAnimals(): void {
        animalArr.push(new Animal("Bella", "cat", "meat", 2, "meow", foodStorage));
        animalArr.push(new Animal("Niko", "dog", "meat", 3, "niko-niko-nii", foodStorage));
        animalArr.push(new Animal("Shiro", "catgirl", "sweets", 10, "nya~", foodStorage));
        animalArr.push(new Animal("Pfote", "rabbit", "carrot", 3, "nom-nom", foodStorage));
        animalArr.push(new Animal("Daily", "horse", "weed", 5, "wheeeaaa", foodStorage));
        animalArr.push(new Animal("Eva", "human", "sushi", 5, "omae wa mo shindeiru", foodStorage));
    }

    function foodNeeded(): FoodDesired {
        let foodDesired: FoodDesired = {meat: 0, weed: 0, sweets: 0, sushi: 0, carrot: 0};
        for (let i: number = 0; i < animalArr.length; i++) {
            if (animalArr[i].food == "meat") foodDesired.meat += animalArr[i].foodAmount;
            if (animalArr[i].food == "weed") foodDesired.weed += animalArr[i].foodAmount;
            if (animalArr[i].food == "sweets") foodDesired.sweets += animalArr[i].foodAmount;
            if (animalArr[i].food == "sushi") foodDesired.sushi += animalArr[i].foodAmount;
            if (animalArr[i].food == "carrot") foodDesired.carrot += animalArr[i].foodAmount;
        }
        return foodDesired;
    }

    function buyFood(): void {
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
}
