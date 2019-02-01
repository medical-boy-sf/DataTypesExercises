function reversedChars(ch1, ch2, ch3) {
    let str = ch1 + ch2 + ch3;
    str = str.split('');
    let reversedStr = "";

    for (let i = 0; i < str.length; i++) {
        reversedStr += str[str.length - i - 1] + " ";
    }

    console.log(reversedStr);
}