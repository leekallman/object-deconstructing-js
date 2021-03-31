"use strict";

// const user = {
//     'name': 'Alex',
//     'address': '15th Park Avenue',
//     'age': 43
// }

// const { name } = user;

// console.log(name);

//works same as above
// let name;

// ({ name } = user);

// console.log(name)

// const { name, age, salary = 123455 } = user;

// console.log(name, age, salary);


const user = {
    'first_name': 'Alex',
    'last_name': 'Brandos',
}
const { first_name, last_name, full_name = `${first_name} ${last_name}` } = user;

console.log(full_name);