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


console.log(countHashtags("Loving this weather today #sunny #vibes #weekend"));
console.log(countHashtags("No hashtags here"));
console.log(countHashtags("#ai #ml data science"));
console.log(countHashtags(123));
console.log(countHashtags(["#fun"]));
