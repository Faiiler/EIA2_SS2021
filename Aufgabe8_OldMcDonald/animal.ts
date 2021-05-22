namespace L09_OldMcDonaldsFarm {

    export class Animal {
        name: string;
        type: string;
        food: string;
        foodAmount: number;
        sound: string;
        foodStorage: FoodStorage;

        constructor(_name: string, _type: string, _food: string, _foodAmount: number, _sound: string, _foodStorage: FoodStorage) {
            this.name = _name;
            this.type = _type;
            this.food = _food;
            this.foodAmount = _foodAmount;
            this.sound = _sound;
            this.foodStorage = _foodStorage;
        }

        sing(): void {
            let songDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("song");
            songDiv.style.display = "inherit";
            songDiv.innerHTML = "<b> " + this.name + " is now singing </b><br>" +
                "Old Mac Donald had a farm, I-A-I-A-O. <br>" +
                "And on his farm he had some " + this.type + "s" + ", I-A-I-A-O. <br>" +
                "With a " + this.sound + "-" + this.sound + " here, and a " + this.sound + "-" + this.sound + " there, <br>" +
                "here a " + this.sound + ", there a " + this.sound + " ev'rywhere a " + this.sound + "-" + this.sound;
        }

        eat(): void {
            this.foodStorage.decrease(this.food, this.foodAmount, this.name);
        }
     }
}