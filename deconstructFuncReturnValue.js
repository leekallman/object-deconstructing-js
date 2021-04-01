//deconstructure function return value
const getUser = () => {
    return {
        'name': 'Alex',
        'address': '15th Park Avenue',
        'age': 43
    }
}

const { name, age } = getUser();

console.log(name, age);