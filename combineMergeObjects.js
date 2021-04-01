const user = {
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
}

const department = {
    'name': 'Sales',
    'id': '001',
    'Shift': 'Morning'
}

const completeDetails = { ...user, ...department };

console.log(completeDetails);

//if there is a common property between both the objects, the property value of obj_2 will replace the property value 
//of obj_1 in the merged object.