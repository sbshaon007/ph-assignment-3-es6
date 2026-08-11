
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
