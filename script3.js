//OBJECT CREATION USING OBJECT LITERAL

let animal = {kind: "mammal", type: "Dog", breed: "Doberman"};
let func = function(){
    return `${this.kind}, ${this.type}, ${this.breed}`

}

let newFunc = func.bind(animal);

document.write(newFunc());
console.log(newFunc());