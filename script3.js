//OBJECT CREATION USING OBJECT LITERAL

class Bird{
    constructor(name, wingspan){
        this.name = name;
        this.wingspan = wingspan;
    }
   static fly(distance){
        console.log(`${this.name} can fly ${distance} miles...`);
    }
}

//let bird1 = name Bird("Eagle", 1.5);
Bird.fly(1000);
