
const human = {
    firstName: "Ahmad",
    lastName: "Alaziz",
    dob: new Date('2000-09-15'),

    caluclateAge: function () { 
        let today = new Date();
        let age = today.getFullYear() - this.dob.getFullYear(); 
        let month = today.getMonth() - this.dob.getMonth();
        let day = today.getDate() - this.dob.getDate();
        if(month<0){
              console.log(`${this.firstName} is ${--age} years old!`);
        }else if(month === 0){
            if(day>0){
                console.log(`${this.firstName}'s ${age} birthday was ${day} days ago`);
            }else if(day < 0){
                console.log(`${this.firstName}'s ${age} birthday is in ${-day} days!`);
            }else{
                console.log(`${this.firstName}'s ${age} birthday is today!!`);
            }
        }else{
             console.log(`${this.firstName} is ${age} years old!`);
        }},

    goToSleep: function(){
        console.log("sleeping")
    },

    eat: function(){
        console.log("eating")
    }
};

human.caluclateAge();

console.log("\n\n----Printing properties and methods----")
function printHumanProperties(human){
    let propValue;
    for(let propName in human){
        propValue = human[propName]
        console.log(propName,propValue,typeof(propValue));
    }
}
printHumanProperties(human)

console.log("\n\n----Printing properties without methods----")
function printHumanProperties2(human){
    let propValue, propType;
    for(let propName in human){
        propValue = human[propName];
        propType = typeof(propValue);
        if(propType != "function"){
            console.log(propName,propValue,propType)
        };
    }
}
printHumanProperties2(human)
