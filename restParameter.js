const user = {
    'first_name': 'Alex',
    'last_name': 'Brandos',
}

const { first_name, ...rest } = user
console.log(first_name, rest);