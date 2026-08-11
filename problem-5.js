const generateLeaderboard = (students) => {

    if (!Array.isArray(students) || students.length === 0) {
        return "Invalid";
    }

    for (const student of students) {

        if (
            typeof student !== `object`
            || !Object.hasOwn(student, `name`)
            || !Object.hasOwn(student, `score`)
            || typeof student.score !== `number`
        ) {
            return `Invalid`;
        }
    }

    const qualified = students.filter(student => {

        return student.score >= 70;
    });

    const names = qualified.map(student => {
        const { name } = student;
        return name.toUpperCase();
    });

    return names.slice(0, 3);
}

// console.log(generateLeaderboard([{name:"Rafi",score:90},{name:"Sadia",score:65},{name:"Karim",score:85},{name:"Nafis",score:75}]));
// console.log(generateLeaderboard([{name:"A",score:70},{name:"B",score:71}]));
// console.log(generateLeaderboard([]));
// console.log(generateLeaderboard([{name:"Rafi"}]));
// console.log(generateLeaderboard([{name:"Rafi",score:"90"}]));
