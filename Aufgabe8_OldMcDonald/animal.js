var L09_OldMcDonaldsFarm;
(function (L09_OldMcDonaldsFarm) {
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
    L09_OldMcDonaldsFarm.Animal = Animal;
})(L09_OldMcDonaldsFarm || (L09_OldMcDonaldsFarm = {}));
//# sourceMappingURL=animal.js.map