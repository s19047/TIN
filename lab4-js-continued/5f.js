class Person{
     constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;

         Object.defineProperty(this, 'fullName', {
            get: function(){
                return firstName + " " + lastName;
            },
            set: function(fullName){
                let fullNameArr = fullName.split(/(\s+)/);
                firstName = fullNameArr[0];
                lastName  =  fullNameArr[fullNameArr.length -1];
            }
        })
     }
}

class Student extends Person{

    constructor(id, firstName, lastName, grades){
        super(firstName,lastName);
        
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
    }
}

const s1 = new Student(2,"Max","Moefo",[97,95,98,100,92,94]);
s1.fullName = "Ahmad Alaziz";
console.log(s1.id,s1.fullName,s1.avgGrades);