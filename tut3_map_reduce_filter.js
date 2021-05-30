console.log("hello from js");


const mock_data= require('./MOCK_DATA.json');
console.log(mock_data[0].first_name);


 let first_names=[];
 mock_data.forEach((person)=>{
     first_names.push(person.first_name);
 });
 //console.log("First Names :", first_names.length)

 mock_data.map((person)=>{
     return{
         //"full_name": person.first_name + " " + person.last_name,
         "full_name": `${person.first_name} ${person.last_name}`,
         country: person.country
     }
 });
 console.log(mock_data_mapped[56]);


//filter

let mock_data_filtered = mock_data.filter((person) =>{
    if(person.last_name){
        return false;
    }
    else{
        return true;
    }
})

console.log(mock_data_filtered.length);
console.log(mock_data_filtered[24].first_name);

function reduceSum(total, currentValue)
{
    return total+currentValue;
}
console.log(strength.length);
console.log(strength);
totalStrength = strength.reduce(reduceSum);
console.log("Total Strength : ",totalStrength);
