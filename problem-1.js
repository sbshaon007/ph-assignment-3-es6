const studentIntroduction = (obj) => {

    if (
        typeof obj !== `object`

        || (!Object.hasOwn(obj, `name`)
            || !Object.hasOwn(obj, `age`)
            || !Object.hasOwn(obj, `course`))
    ) {
        return `Invalid`
    }

    const {name, age, course } = obj;
    
    return `My name is ${name}. I am ${age} years old. I am learning ${course}.`;
}

console.log(studentIntroduction({name:"Rafi",age:18,course:"JavaScript"}));
