function spiceMustFlow(startingYield) {
    startingYield = Number(startingYield);
    let totalSpice = 0;
    let daysCounter = 0;

    while (startingYield >= 100) {
        totalSpice += startingYield;
        totalSpice -= 26;
        startingYield -= 10;
        daysCounter += 1;
    }

    if (totalSpice >= 26) {
        totalSpice -= 26;
    } else {
        totalSpice = 0;
    }
    console.log(daysCounter);
    console.log(totalSpice);
}