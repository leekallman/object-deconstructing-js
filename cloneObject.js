const user = {
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
}

const clone = { ...user } // Output, {name: "Alex", address: "15th Park Avenue", age: 43}

console.log(clone, user)
clone === user; // Output, false