const checkPalindrome = (string) => {
    return string.split("").join() == string.split("").reverse().join();
};

console.log(checkPalindrome("cat"));
console.log(checkPalindrome("toot"));
console.log(checkPalindrome("harah"));
console.log(checkPalindrome("cooooc"));
