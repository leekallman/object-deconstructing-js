/*
Here is a Quiz for you. Please have a look at the `dark_theme` object below.
Use the object destructuring, spread syntax and the rest parameter to achieve
the following:
1. Extract the value of the `font` property and assign it to a variable.
2. Extract the value of the `font` property and assign it to a variable with the
name `myFont`.
3. Extract the value of the button text color and link opacity.
4. Create a clone of the dark_theme object and add the `border-color` attribute 
with a color value.
5. Consider a `user` object like,
const user = {
    'name': 'Alex',
    'id': 'U_001'
}
Merge the user object to the `dark_theme` object.
6. Destructure the dark_theme object and put the link colors in a separate object 
using the rest parameter.
Feel free to fork the project and submit you answers by creating a file named,
`quiz-od-<github-username>.js`
*/

const dark_theme = {
    "id": "T_002",
    "name": "Dark",
    "colors": {
        "body": "#000000",
        "text": "#FFFFFF",
        "button": {
            "text": "#000000",
            "background": "#FFFFFF"
        },
        "link": {
            "text": "teal",
            "opacity": 1
        }
    },
    "font": "Roboto"
}

// 1. Extract the value of the `font` property and assign it to a variable.
// const { font } = dark_theme
// console.log(font)

// 2. Extract the value of the `font` property and assign it to a variable with the
// name `myFont`.
// const { font, myFont = `${font}` } = dark_theme
// console.log(myFont)

// 3. Extract the value of the button text color and link opacity.
// const { colors: { button: { text }, link: { opacity } } } = dark_theme;
// console.log(text, opacity)

// 4. Create a clone of the dark_theme object and add the `border-color` attribute 
// with a color value.

// const clone = {
//     ...dark_theme,
//     colors: {
//         ...dark_theme.colors,
//         'border-color': '#767382'
//     }
// };
// console.log(clone)

//don't understand why "border-color" is saved within ''???
//example below does not save "number" within ''
// const user = {
//     'name': 'Alex',
//     'address': '15th Park Avenue',
//     'age': 43,
//     'department': {
//         'name': 'Sales',
//         'Shift': 'Morning',
//         'address': {
//             'city': 'Bangalore',
//             'street': '7th Residency Rd',
//             'zip': 560001
//         }
//     }
// }
// const updated = {
//     ...user,
//     department: {
//         ...user.department,
//         'number': 7
//     }
// };
// console.log(updated);


// 5. Consider a `user` object like,
// const user = {
//     'name': 'Alex',
//     'id': 'U_001'
// }
// // Merge the user object to the `dark_theme` object.
// const dark_themeUser = { ...dark_theme, ...user };

// console.log(dark_themeUser);


// 6. Destructure the dark_theme object and put the link colors in a separate object 
// using the rest parameter.
const { colors: { link }, ...rest } = dark_theme
console.log(link, rest);

// Feel free to fork the project and submit you answers by creating a file named,
// `quiz-od-<github-username>.js`