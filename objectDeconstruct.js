const user = {
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
}

// const { name } = user;

// console.log(name);


//works same as above, but remember to decalre(let/const)
let name;

({ name } = user);

console.log(name);