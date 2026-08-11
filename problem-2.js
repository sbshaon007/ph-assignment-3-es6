
const filterActiveUsers = users => {

    if (
        !Array.isArray(users)
        || users.length === 0
    ) {
        return `Invalid`;
    }

    for (const user of users) {

        if (
             !Object.hasOwn(user, `isActive`)
            || typeof user !== `object`
            || Array.isArray(user)
            || user === null
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

// console.log(filterActiveUsers([{name:"A", isActive:true},{name:"B", isActive:false}]));
