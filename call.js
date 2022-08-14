let name={
    firstName:"SmrutiRanjan",
    LastName:"Rout"
}
let printfullName=function(name1,name2){
    console.log(this.firstName + " " + this.LastName +" "+name1+" "+name2);
}
// call method........
// printfullName.call(name);

let name2={
    firstName:"Monalisa",
    LastName:"Rout"
}
// printfullName.call(name2)
// apply method..........
var arr=["monu","chinu"];
printfullName.apply(name,arr);
// bind method..........
let finalName=printfullName.bind(name2,"monu1","chinu1");
console.log(finalName());

let student={
    age:"20"
}
let age1=function(age){
    console.log(this.age);
}
let age2=age1.bind(student);
console.log(age2());

