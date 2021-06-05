var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        Animal.prototype.doSpecialAction = function () {
            var actionDiv = document.getElementById("action");
            actionDiv.innerHTML = "Does animal things";
        };
        return Animal;
    }());
    L09_OldMcDonaldsFarm.Animal = Animal;
    var Cat = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Cat.prototype.doSpecialAction = function () {
            var actionDiv = document.getElementById("action");
            actionDiv.innerHTML = "Does cat things";
        };
        return Cat;
    }(Animal));
    L09_OldMcDonaldsFarm.Cat = Cat;
    var Catgirl = /** @class */ (function (_super) {
        __extends(Catgirl, _super);
        function Catgirl() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Catgirl.prototype.doSpecialAction = function () {
            var actionDiv = document.getElementById("action");
            actionDiv.innerHTML = "*is being cute*";
        };
        return Catgirl;
    }(Animal));
    L09_OldMcDonaldsFarm.Catgirl = Catgirl;
    var Human = /** @class */ (function (_super) {
        __extends(Human, _super);
        function Human() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Human.prototype.doSpecialAction = function () {
            var actionDiv = document.getElementById("action");
            actionDiv.innerHTML = "Wants food. Now.";
        };
        return Human;
    }(Animal));
    L09_OldMcDonaldsFarm.Human = Human;
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Dog.prototype.doSpecialAction = function () {
            var actionDiv = document.getElementById("action");
            actionDiv.innerHTML = "*Is being inferior to cats*";
        };
        return Dog;
    }(Animal));
    L09_OldMcDonaldsFarm.Dog = Dog;
    var Horse = /** @class */ (function (_super) {
        __extends(Horse, _super);
        function Horse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Horse.prototype.doSpecialAction = function () {
            var actionDiv = document.getElementById("action");
            actionDiv.innerHTML = "Demands carrots";
        };
        return Horse;
    }(Animal));
    L09_OldMcDonaldsFarm.Horse = Horse;
    var Rabbit = /** @class */ (function (_super) {
        __extends(Rabbit, _super);
        function Rabbit() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Rabbit.prototype.doSpecialAction = function () {
            var actionDiv = document.getElementById("action");
            actionDiv.innerHTML = "Jumps a lot";
        };
        return Rabbit;
    }(Animal));
    L09_OldMcDonaldsFarm.Rabbit = Rabbit;
})(L09_OldMcDonaldsFarm || (L09_OldMcDonaldsFarm = {}));
//# sourceMappingURL=animal.js.map