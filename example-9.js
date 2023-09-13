"use strict";
// Currently the function below uses a string for
// for the type of monster. Better to use an enum
// since monsters are only: lizard, flying, or ape
Object.defineProperty(exports, "__esModule", { value: true });
// Import Kaiju and KaijuType from example-8.js
var example_8_1 = require("./example-8");
// Fix the rampage function so it makes use of the KaijuType enum
function rampage(kaiju, city) {
    var name = kaiju.name, type = kaiju.type, power = kaiju.power;
    var action;
    switch (type) {
        case example_8_1.KaijuType.Ape:
            action = "smash";
            break;
        case example_8_1.KaijuType.Lizard:
            action = "burn";
            break;
        case example_8_1.KaijuType.Flying:
            action = "flap";
            break;
    }
    var result = "".concat(name, " used ").concat(action, " over ").concat(city, " causing ").concat(power * 10000, " damage!");
    return result;
}
var gojira = new example_8_1.Kaiju("Gojira", 90, example_8_1.KaijuType.Lizard);
var kong = new example_8_1.Kaiju("Kong", 100, example_8_1.KaijuType.Ape);
var mothra = new example_8_1.Kaiju("Mothra", 80, example_8_1.KaijuType.Flying);
console.log(rampage(gojira, "tokyo"));
console.log(rampage(kong, "new york"));
console.log(rampage(mothra, "seattle"));
