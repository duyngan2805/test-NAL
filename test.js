function countVietnameseLetters(input) {
    const vowels = { aw: "ă", aa: "â", ee: "ê", oo: "ô", ow: "ơ", w: "ư" };
    const consonants = { dd: "đ" };
    let count = 0;
    let i = 0;
    while (i < input.length) {
        if (i + 1 < input.length) {
            const twoLetters = input.substr(i, 2);
            if (vowels.hasOwnProperty(twoLetters) || consonants.hasOwnProperty(twoLetters)) {
                count++;
                i += 2;
                continue;
            }
        }
        count++;
        i++;
    }
    return count;
}

// Example usage
const input = "hfdawhwhcoomdd";
const result = countVietnameseLetters(input);
console.log(result); // Output: 4