//OBJECT CREATION USING OBJECT LITERAL

function Student(name, section){

    this.name = name;
    this.section = section;
}

Student.prototype.fullname = function(){
    return(this.name + " is enrolled in section" + this.section + "<br>");
}

Student.prototype.school = "UST";
let stud1 = new Student("Alphonso Mariano", "2ITH");
let stud2 = new Student("Isidro Cruz", "2ITH");

document.write(stud2.fullname());
document.write(`${stud2.name} is studying in ${stud2.school}`);