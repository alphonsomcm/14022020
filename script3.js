function createStudent(name, section){

    let stud= {};
    stud.name = name;
    stud.section = section;
    return stud;

}

let juan = createStudent("juan dela cruz", "2ITE");
let pedro = createStudent("pedro fernandez", "2ITE");

document.write(`${juan.name} is enrolled in section ${juan.section}<br>`)
document.write(`${pedro.name} is enrolled in section ${juan.section}<br>`)