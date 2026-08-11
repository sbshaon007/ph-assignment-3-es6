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

        let add = currentItem + sum;

        return add;

    }, 0);

    return total;

}