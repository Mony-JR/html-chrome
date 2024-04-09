function countVowels(txt) {
    const txtLowerCase = txt.toLowerCase();
    let vowelCount = 0;

    for (const char of txtLowerCase) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            vowelCount++;
        }
    }
    return vowelCount;
}

const text = "Apple";
console.log("Number of vowels:", countVowels(text));
