const first = {x: 1, y: 2, z: 3};  
const second = Object.assign({x: 3, z: 4, y: 5}, first);  
console.log(second.z);
console.log(second.y);
console.log(second.x);