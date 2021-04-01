// object destructuring to function parameter
const user = {
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
}
function logDetails({ name, age }) {
    console.log(`${name} is ${age} year(s) old!`)
}
logDetails(user);