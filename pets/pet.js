// Pet Object Setup 
class Pet {
    constructor(name, play, hunger, thirst, happiness, toilet) {
        // underscore used to keep origional values
        this._name = name;
        this._hunger = 50;
        this._thirst = 50;
        this._happiness = 50;
        this._health = 50;
        this._play = 50;
        this._toilet = 0;
    }
    // getters used (I think) to create adjustable values of properites 
    get name() {
        return this._name;
    }
    get hunger() {
        return this._hunger;
    }
    get happiness() {
        return this._happiness;
    }
    get play() {
        return this._play;
    }
    get health() {
        return this._health;
    }
    get toilet() {
        return this._toilet;
    }

    // Functions/ Interactions with pet and the impacts they have
    
    giveFood() {
        this.hunger -= 50;
        this.thirst += 25;
        this.happiness += 15;
        this.toilet += 50;
    }

    giveDrink() {
        this.hunger += 25;
        this.thirst -= 50;
        this.happiness += 15;
        this.toilet += 35;
    }

    playTime() {
        this.hunger -= 50;
        this.thirst -= 50;
        this.happiness += 50;
        this.toilet += 10;
        this.health += 20; 
    }
    ignorePet() {
        this.hunger += 15;
        this.thirst += 20;
        this.happiness -= 20;
        this.toilet += 20;
        this.health -= 15;
    }
}

// Subclass of pet types creation 

class Dog extends Pet {
    constructor(name, throwStick) {
        super(name);
        this._throwStick = throwStick;
    }
    throwStick() {
        this.throwStick ++;
        this.hunger += 10;
        this.thirst += 10;
        this.happiness += 25;
        this.toilet += 10;
        this.health += 15;
    }
}

class Cat extends Pet {
    constructor(name, bellyRub) {
        super(name, bellyRub);
        this._bellyRub = bellyRub;
    }
    bellyRub() {
        this.bellyRub ++;
        this.happiness += 20;
        this.health += 5;
        this.hunger += 5;
        this.thirst += 5;
        this.toilet += 15;
    }
}

class Rabbit extends Pet {
    constructor(name, stress) {
        super(name);
        this._stress = 10;
    }
    pickUp() {
        this.stress += 50;
        this.health += 10;
        return console.log(`${this.name} has crapped itself from the stress`);
    }
}

How to test?

// const dog1 = steph