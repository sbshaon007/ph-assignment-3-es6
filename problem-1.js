const studentIntroduction = student => {

    if (
        typeof student !== `object`
        || student === null
        || Array.isArray(student)
        || Object.keys(student).length === 0
        || !Object.hasOwn(student, `name`)
        || !Object.hasOwn(student, `age`)
        || !Object.hasOwn(student, `course`)
    ) {
        return `Invalid`;
    }

    const { name, age, course } = student;

    return `My name is ${name}. I am ${age} years old. I am learning ${course}.`;
};
