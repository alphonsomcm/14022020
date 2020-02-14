//OBJECT CREATION USING OBJECT LITERAL

function Student(name, section){
    this.name = name;
    this.section = section;
    this.speak = function(language){
        document.write(`${this.name} can speak ${language}`);
    }
}

let stud1 = new Student("juan dela cruz", "bobo");
stud1.speak("tagalog");