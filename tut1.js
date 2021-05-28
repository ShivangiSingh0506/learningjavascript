console.log("hello from javascript");
var personName = "Global: Dave"
{
    let personName="Scoped: Philip";
    personMarks = 10;
    personMarks=personMarks+20;
    const personBloodGroup= "O+";
    //personBloodGroup= "A+";
    console.log("inside block");
    console.log("Scoped name:" personName);
    console.log("scoped marks:" personMarks);
    console.log("scoped BloodGroup:" personBloodGroup);
}
console.log("global blood group:" personBloodGroup);
console.log("global", personName);
function printName()
{
    console.log("Inside function", personName);
}
printName();
