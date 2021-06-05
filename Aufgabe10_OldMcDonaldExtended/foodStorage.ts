namespace L10_OldMcDonaldsFarm {

   export class FoodStorage {

        meat: number;
        weed: number;
        sweets: number;
        sushi: number;
        carrot: number;

        constructor(_meat: number, _weed: number, _sweets: number, _sushi: number, _carrot: number) {
            this.meat = _meat;
            this.weed = _weed;
            this.sweets = _sweets;
            this.sushi = _sushi;
            this.carrot = _carrot;
        }

        decrease(_food: string, _foodAmount: number, _name: string): void {
            let foodDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("food");
            let newAmount = 0;
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
        }

    }
}