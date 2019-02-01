function sumDigits(number) {
    number = Number(number);
    let sum = 0;

    while (number > 0) {
        sum += Math.trunc(number % 10);
        number /= 10;
    }
    console.log(sum);
}

sumDigits(17);