class Pet {
    constructor(name, hunger, thirst, happiness, health) {
        this.name = name;
        this.hunger = 50;
        this.thirst = 50;
        this.happiness = 50;
        this.health = 50;
    }
}
class Dog extends Pet {
    constructor(name, lovesMeat) {
        super(name, hunger, thirst, happiness, health);
        this.lovesMeat = lovesMeat;
    }
}
class Cat extends Pet {
    constructor(name, lovesFish) {
        super(name, hunger, thirst, happiness, health);
        this.lovesFish = lovesFish;
    }
}
class Rabbit extends Pet {
    constructor(name, lovesVeg) {
        super(name, hunger, thirst, happiness, health);
        this.lovesVeg = lovesVeg;
    }
}

const dog1 = steph