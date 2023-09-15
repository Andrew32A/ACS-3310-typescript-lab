// Giant Robot class

// Goal creat an interface with a methods

// All Robots have name, power and type.
// Kaiju should have a describe method that
// prints: name:<name> type:<type> power:<power>

interface Robot {
  name: string;
  power: number;
  type: string;
}

interface Kaiju extends Robot {
  describe(): void;
}

class GiantRobot implements Kaiju {
  name: string;
  power: number;
  type: string;

  constructor(name: string, power: number, type: string) {
    this.name = name;
    this.power = power;
    this.type = type;
  }

  describe(): void {
    console.log(`Name: ${this.name}, Type: ${this.type}, Power: ${this.power}`);
  }
}

const robot = new GiantRobot("MechaGodzilla", 1000, "Kaiju");
robot.describe();
