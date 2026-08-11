//Problem-01: Student Introduction Generator
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

//Problem-02: Active User Filter

const filterActiveUsers = users => {

    if (
        !Array.isArray(users)
        || users.length === 0
    ) {
        return `Invalid`;
    }

    for (const user of users) {

        if (
            user === null
            || !Object.hasOwn(user, `isActive`)
            || typeof user !== `object`
            || Array.isArray(user)
        ) {
            return `Invalid`;
        }

    }

    const activeUsers = users.filter(user => {

        if (user.isActive === true) {

            return true;

        } else {

            return false;
        }

    });

    return activeUsers;
};


//Problem-03: Trending Hashtag Counter
const countHashtags = caption => {

    if (typeof caption !== `string`) {

        return `Invalid`
    }

    const wordArray = caption.split(" ");

    const wordsWithHashtag = wordArray.filter(word => {

        if (word.startsWith("#")) {

            return true;

        } else {

            return false;
        }
    });

    const wordsWithNoHashtag = wordsWithHashtag.map(word => {

        const removeHashtag = word.slice(1);

        return removeHashtag;

    });

    let longestWord = '';

    for (const word of wordsWithNoHashtag) {

        if (word.length > longestWord.length) {

            longestWord = word;
        }
    }

    return {

        hashtagCount: wordsWithHashtag.length,
        longestTag: longestWord
    };

}

//Problem-04: Bonus Score Calculator
const bonusScore = (scores) => {

    if (
        !Array.isArray(scores)
        || scores.length === 0
    ) {
        return `Invalid`;
    }

    for (const number of scores) {

        if (typeof number !== `number`) {
            return `Invalid`;
        }
    }

    const updatedScores = scores.map(currentItem => {

        return currentItem + 10;

    });

    const total = updatedScores.reduce((sum, currentItem) => {

        return currentItem + sum;

    }, 0);

    return total;

}

//Problem-05: Debugging Challenge - AI Leaderboard Generator
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