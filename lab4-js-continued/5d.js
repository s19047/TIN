//ُMethod #1
function Student(id, firstName, lastName, grades){

    this.getGrades = function(){
        return  grades.reduce((a, b) => a + b) / grades.length;
    }
    this.getFullName = function(){
        return firstName + " " + lastName;
    }
    this.getId = function(){
        return id;
    }

    this.setFullName = function(fullName){
        let fullNameArr = fullName.split(/(\s+)/);
        firstName = fullNameArr[0];
        lastName  =  fullNameArr[fullNameArr.length -1];
    }
}

const student = new Student(1,"Ahmad","Alaziz",[97,95,98,100,92,94]);
student.setFullName("Max Turner MoeFo");
console.log(student.getId(),student.getFullName(),student.getGrades());


// Method #2

function Student2(id, firstName, lastName, grades){

    Object.defineProperty(this, 'id', {
        get: function(){
            return id;
        }
    })
    Object.defineProperty(this, 'avgGrades', {
        get: function(){
            return grades.reduce((a, b) => a + b) / grades.length;
        }
    })
    Object.defineProperty(this, 'fullName', {
        get: function(){
           return firstName + " " + lastName;
        },
        set: function(fullName){
            fullNameArr = fullName.split(/(\s+)/);
            firstName = fullNameArr[0];
            lastName  =  fullNameArr[fullNameArr.length -1];
        }
    })
    
}

const student2 = new Student2(2,"Max","Moefo",[97,95,98,100,92,94]);
student2.fullName = "Ahmad Alaziz";
console.log(student2.id,student2.fullName,student2.avgGrades);