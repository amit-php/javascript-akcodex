const arr = ["amit","sumit","ajit","rahul"];

// arr.forEach(function ak(params) {
//     console.log(params);
// });

// arr.forEach((item,intx,ar)=>{
//      console.log(item,intx,ar);
// })
// function print(item,i,ar){
//  console.log(item,i,ar);
// }

// arr.forEach(print)
//for object
const MobailStoreList = [
    {
        brand:'samsung',
        mobail:'A50',
        price:12000,
    },
    {
        brand:'vivo',
        mobail:'v50',
        price:18000,
    },
    {
        brand:'Apple',
        mobail:'iPhone 15',
        price:112000,
    },
    {
        brand:'sigmatel',
        mobail:'A50',
        price:2000,
    }
];

MobailStoreList.forEach((item)=>{
     console.log(`My mobail is ${item.mobail} and brand name is ${item.brand} and price is ${item.price}`);
})

