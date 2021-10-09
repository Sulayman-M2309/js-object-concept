const bottle={color:'yellow',hold:'water',price:100,isCleaned:true};

// sob gula key pawyar niom ei khane key bolte bujanu hoise color, hold, water
const keys=Object.keys(bottle);
// console.log(keys);


// value pawar niom value blte yellow water etc
const values=Object.values(bottle);
// console.log(values);


// jurai jurai pauwar NetworkInformation
const paries=Object.entries(bottle);
// console.log(paries);


// kuno kisu remove korar niom
delete bottle.color;
console.log(bottle);

// kuno kisu change korar nioom hosse
Object.seal(bottle);
bottle.price=100;
Object.freeze(bottle);