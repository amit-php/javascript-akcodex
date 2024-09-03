// primitive and non-primitive 

//primitive() - call by value

//string , number , boolen , null , undefined , symbol ,bigint

//non primitive(refrence type)
//array,object,function

//is js is dynamicaly type or static type
//dynamicaly typed 

const score = 100; // return type number
const scoreValue = 100.333; // retunr type number
const isLogin = false ; //return type boolen
let   outsideTem = null; //retun type object
let   userEmail ; 
let id = Symbol('123'); //return type symbol
let anotherId = Symbol('123');
const bigint = 556556565656565656n; //bigint
//console.log(id == anotherId);
const arr = ['saktiman','jaykal','juniorji']; //return type object
const myObj = 
{
'name':'amit',
'age':31
} //return type object

const myfun = function(){
    console.log('hello world'); //return type function,
}
console.log(typeof myfun);
