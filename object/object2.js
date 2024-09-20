//const tinderUser = new Object();
const tinderUser = {};
tinderUser.id = 1;
tinderUser.name = "Amit";
tinderUser.isLogin = false;
//console.log(tinderUser);
const regularUser = {
    email:"amit@yopmail.com",
    userinfo:{unsername:{
        fullName:"amitchy",
        age:21
    }}
}
//console.log(regularUser.userinfo.unsername.age);
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
//const obj3 = {obj1,obj2}
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
const obj3 = Object.assign({},obj1,obj2);
console.log(obj3)
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const obj4 = {...obj1,...obj2};
console.log(obj4);
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//console.log(Object.keys(tinderUser))
//[ 'id', 'name', 'isLogin' ]
//console.log(Object.values(tinderUser))
console.log(tinderUser.hasOwnProperty('islogin'))