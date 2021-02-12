// Pet Object Setup 
class Pet {
    constructor(name) {
        // underscore used to keep origional values
        this.name = name;
        this._hunger = 50;
        this._thirst = 50;
        this._happiness = 50;
        this._health = 50;
        this._play = 50;
        this._toilet = 0;
    }
    // getters used (I think) to create adjustable values of properites 
    
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
// Setters to cap the top and bottom limits of pet needs 

    set happiness (happiness) {
        if (happiness <= 0) {
            this._happiness = 0;
            console.log(`${this._name} is depressed and having bad thoughts`);
        } else if (happiness >= 100) {
                this._happiness = 100;
                console.log(`${this.name} is unbearably happy`);
        } else {
            this.happiness = this.happiness;
        }
    }

    set hunger (hunger) {
        if (hunger <= 0) {
            this._hunger = 0;
            console.log(`${this._name} is fat and overfed`);
        } else if (hunger >= 100) {
                this._hunger = 100;
                console.log(`${this.name} has starved to death`);
        } else {
            this._hunger = this.hunger;
        }
    }

    set thirst (thirst) {
        if (thirst <= 0) {
            this._thirst = 0;
            console.log(`${this._name} can't drink anymore!`);
        } else if (thirst >= 100) {
            this._thirst = 100;
            console.log(`${this._name} has died of dehydration! You shouldn't be trusted with another beings life!`)
        } else {
            this._thirst = this.thirst;
        }
    }

    set toilet (toilet) {
        if (toilet <= 0) {
            this._toilet = 0;
            console.log(`${this._name} is all crapped out!`);
        } else if (toilet >= 100) {
            this._toilet = 100;
            console.log(`${this._name} has crapped died of constapation! Be a better person`);
        } else {
            this.toilet = this.toilet;
        }
    }

    set health (health) {
        if (health <= 0) {
            this._health = 0;
            console.log(`${this._name} is dead! Well done you've done "very" well...`);
        } else if (health >= 100) {
            this._health = 100;
            console.log(`${this._name} is going to live for ever if you carry on like this!`);
        } else {
            this.health = this.health;
        }
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
        this.hunger += 30;
        this.thirst += 40;
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
    constructor(name) {
        super(name);
        this._stress = 10;
    }
    get stress() {
        return this._stress
    }
    set stress (stress) {
        if (toilet <= 0) {
            this._stress = 0;
            console.log(`${this._name} is chilling in the zengarden`);
        } else if (stress >= 100) {
            this._stress = 100;
            console.log(`${this._name} died of a stress induced heart attack! It couldn't handle your neediness...`);
        } else {
            this.stress = this.toilet;
        }
    }
    

    pickUp() {
        this.stress += 50;
        this.health += 10;
        return console.log(`${this.name} has crapped itself from the stress`);
    }
}

// How to test?

// // const dog1 = steph