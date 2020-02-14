//OBJECT CREATION USING OBJECT LITERAL

let animal = {kind: "mammal", type: "Dog", breed: "Doberman"};
let arr = [this.kind, this.type, this.breed];
let displayAnimal = function(kind, type, breed){

    document.write(`Kind: ${this.kind}, Type: ${this.type}, Breed: ${this.breed} `);

   

}

displayAnimal.apply(animal, arr);

