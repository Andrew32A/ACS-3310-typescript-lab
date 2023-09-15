// Giant Robot class
var GiantRobot = /** @class */ (function () {
    function GiantRobot(name, power, type) {
        this.name = name;
        this.power = power;
        this.type = type;
    }
    GiantRobot.prototype.describe = function () {
        console.log("Name: ".concat(this.name, ", Type: ").concat(this.type, ", Power: ").concat(this.power));
    };
    return GiantRobot;
}());
var robot = new GiantRobot("MechaGodzilla", 1000, "Kaiju");
robot.describe();
