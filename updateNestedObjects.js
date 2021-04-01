const user = {
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43,
    'department': {
        'name': 'Sales',
        'Shift': 'Morning',
        'address': {
            'city': 'Bangalore',
            'street': '7th Residency Rd',
            'zip': 560001
        }
    }
}

const updated = {
    ...user,
    department: {
        ...user.department,
        'number': 7
    }
};

console.log(updated);