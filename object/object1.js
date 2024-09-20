//singalton
//Object.create

//object litrals
const mykey = Symbol('key1');
const jsuser = {
    name:"amit",
    [mykey]:'key1',
    "full name":"amit choudhary",
    age:30,
    email:"ak@google.com",
    location:'kolkata',
    isLogin:['monday','tuesday']
};
// console.log(jsuser['full name']);
// console.log(jsuser.name);
// console.log(jsuser[mykey]);
//Object.freeze(jsuser);
//jsuser.name = "sumit";
jsuser.greeting = function(){
    console.log("hello world")
}
jsuser.greeting2 = function(){
    console.log("hello world")
}
console.log(jsuser.greeting());