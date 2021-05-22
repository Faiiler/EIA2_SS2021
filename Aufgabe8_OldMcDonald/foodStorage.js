var L09_OldMcDonaldsFarm;
(function (L09_OldMcDonaldsFarm) {
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
    L09_OldMcDonaldsFarm.FoodStorage = FoodStorage;
})(L09_OldMcDonaldsFarm || (L09_OldMcDonaldsFarm = {}));
//# sourceMappingURL=foodStorage.js.map