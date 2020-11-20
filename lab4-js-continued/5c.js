//constructor function
function Student(id, firstName, lastName, grades){
    this.id = id,
    this.firstName = firstName,
    this.lastName = lastName,
    this.grades = grades,

    //since all students will have their grades calulated in a similar fashion
    Student.prototype.printGrades = function(){
        let gradeAvg = (grades) => grades.reduce((a, b) => a + b) / grades.length;
        console.log(firstName,lastName,gradeAvg(grades))
    }

    Student.prototype.courseList = ["calculus","physics","chemistry","foreign-languages"];
}

const s1 = new Student(1,"Ahmad","Alaziz",[97,95,98,100,92,94]);
s1.printGrades();
console.log(s1.courseList);