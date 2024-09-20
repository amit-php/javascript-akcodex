const marvalhero = ["thor","spidermen","ironman"];
const dcheros = ["superman","batmen","flash"];
// marvalhero.push(dcheros);
// console.log(marvalhero);
//[ 'thor', 'spidermen', 'ironman', [ 'superman', 'batmen', 'flash' ] ]
const allHero = marvalhero.concat(dcheros);
console.log(allHero)
//[ 'thor', 'spidermen', 'ironman', 'superman', 'batmen', 'flash' ]
const allNewHero = [...marvalhero,...dcheros];
console.log(allNewHero);
//[ 'thor', 'spidermen', 'ironman', 'superman', 'batmen', 'flash' ]
const anotherArr = [1,2,3,4,[5,6,7],[1,2,3]];
const newAnotherArr = anotherArr.flat(Infinity);
console.log(newAnotherArr);
//[
    1, 2, 3, 4, 5,
    6, 7, 1, 2, 3
  ]