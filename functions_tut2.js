console.log("hello from javascript");
//function sum(number1, number2)
//{
//    return number1+number2;
//}

sum = (number1, number2)=>{
    return number1+number2;
}

let result= sum(30, 40);
console.log(result);

class car{
    name;
    model;
    enginePower;
    constructor(name, model, enginePower)
    {
        console.log("inside the constructor");
        console.log(this);
        this.name=name;
        this.model=model;
        this.enginePower=enginePower;
    }
    age()
    {
        console.log("inside age function");
        let date=new Date();
        return date.getFullYear() - this.model;
    }
}

//creating object for the above class

let myFord = new car("FordMustang", 1995, "2500cc");
console.log(myFord.age());


//JSON

var myDetails = {
    name: "shivangi",
    age: 20,
    bloodGroup: "O+"
}

//JSON.parse();
JSON.stringify(myDetails);

console.log(myDetails);
console.log(myDetails.age);
console.log(myDetails['bloodGroup']);
