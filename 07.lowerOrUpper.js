function lowerOrUpper(letter) {
    let letterNumeric = letter.charCodeAt(0);
    if (letterNumeric >= 65 && letterNumeric <= 90) {
        console.log("upper-case");
    } else {
        console.log("lower-case")
    }
}