//array.reduce(function(total, currentValue, currentIndex, arr) initialValue)

// let mock_data_reduced= mock_data.reduce((tortal, currenValue, index)=>{
//     console.log(index);
//     console.log();
//     return{strength: tortal.strength + currentValue.strength
//     }
// })

// console.log("total strength");
// console.log(JSON.stringify(mock_data_reduced));




// //HOISTING
var var1="stringvalue";
var var2= "anothervalue";

//var stringArray=["1","2","3","4","5"];
var stringArray=[1,2,3,4,5];
function strcatFunc(str1, str2, str3){
    console.log(str1+str2+str3);
}strcatFunc(stringArray);


{   let scopeString="scopedstring";
    console.log(var3);
}
console.log(scopeString);
var var3="thirdvalue";


//spreadsysntax

function strcatFunc(num1, num2, num3, num4)
{
    console.log(num1+num2+num3+num4);
}

//strcatFunc(...stringArray);

let numberStore = [0,1,2];
let newNumber = [12,17,19];
numberStore= [...numberStore, ...newNumber];
//numberStore.push(newNumber);
console.log(numberStore);



//run on browser
let names=["Dave","john","philip"];
let newNames=["dane", "jack"];
names.push(newNames);
console.log(names);

let names=["Dave","john","philip"];
let newNames=["dane", "jack"];
names.push(newNames);
console.log(names);

let names=["Dave","john","philip"];
let newNames=["dane", "jack"];

names

newNames


newNames.forEach((name)=>{
    names.push(name);
});

names



//run on browser
function sumFunc(...numbers){
    console.log(numbers)

}

sumFunc(...numbers){
    total=0;
    numbers.forEach(number=>{
        total=total+number;
    })
    console.log(total);
}
//undefined
sumFunc(1,2,7,5)
//15



//Destructuring
let person={"firstname":"django","age":40,"email":"Abc@gmail.com"}

let{firstName: x, age: y}=person;
console.log(x);
console.log(y);

function logNameAndAge({firstName, age}){
    console.log(`my name is ${firstName} and i am ${age} years old`);
}

logNameAndAge(person);


//closure
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment) In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time


function outerFunction(){
    var outerVariable=1;
    function innerFunction(){
        console.log(outerVariable);
    }
    return InnerFunction();
}
//var innerFunc=outerFunction();
//innerFunc();



function makeAdder(valueToAdd){
    var baseValue=10;

    function add(parameter){
        return valueToAdd + parameter;
    }
    return add();
}
var add5= makeAdder(5);
var add10= makeAdder(10);

console.log(add5(5));
console.log(add10(10));

//callbacks, promises and async/await
function sendBackTheSumToPrint(number1, number2, callback){
    let sum =number1+number2;
    callback(sum);
}

function logTheSum(sum){
    console.log(`sum is ${sum}`)
}
sendBackTheSumToPrint(10,20, logTheSum);


//another example for callbacks
//  program that shows the delay in execution

function greet(name, sayName) {
    console.log('Hello world');
    callback(name);
}
function sayName(name) {
    console.log('Hello' + ' ' + name);
}
// calling the function
setTimeout(greet, 2000, "john", sayName);
//sayName('John');

