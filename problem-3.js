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

