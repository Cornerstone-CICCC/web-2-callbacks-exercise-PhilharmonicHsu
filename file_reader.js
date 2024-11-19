const fs = require("fs");

fs.readFile("./firstname.txt", "utf-8", (err, firstName) => {
    fs.readFile('./lastname.txt', 'utf-8', (err, lastName) => {
        fs.readFile('./age.txt', 'utf-8', (err, age) => {
            fs.readFile('./hobbies.txt', 'utf-8', (err, hobbiesString) => {
                const hobbies = JSON.parse(hobbiesString);

                console.log(
                    `${firstName} ${lastName} is ${age} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}`
                );
            })
        })
    })
})