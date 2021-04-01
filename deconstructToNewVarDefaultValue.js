// add a new variable while destructuring and add a default value to it
// const { name, age, salary = 123455 } = user;
// console.log(name, age, salary);


// Object with two properties, first_name and last_name. 
// Now compute the value of a non-existent full_name using these two properties.
const user = {
    'first_name': 'Alex',
    'last_name': 'Brandos',
}
const { first_name, last_name, full_name = `${first_name} ${last_name}` } = user;
console.log(full_name);

