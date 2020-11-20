//constructor function
function Student(id, firstName, lastName, grades){
    this.id = id,
    this.firstName = firstName,
    this.lastName = lastName,
    this.grades = grades,
    this.printGrades = function(){
        let gradeAvg = (grades) => grades.reduce((a, b) => a + b) / grades.length;
        console.log(firstName,lastName,gradeAvg(grades))
    }
}

// factory function
function createStudent(id, firstName, lastName, grades){
    return{
        //id = id, 
        id,
        firstName,
        lastName,
        grades,
        printGrades: function(){
            let gradeAvg = (grades) => grades.reduce((a, b) => a + b) / grades.length;
            console.log(firstName,lastName,gradeAvg(grades))
        }
    }

}

const student1 = new Student(1,"Ahmad","Alaziz",[97,95,98,100,92,94]);
const student2 = createStudent(2,"Max","Turner",[87,85,88,90,82,84]);
student1.printGrades();
student2.printGrades();