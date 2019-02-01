function gladiatorExpenses(lostfights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    lostfights = Number(lostfights);
    helmetPrice = Number(helmetPrice);
    swordPrice = Number(swordPrice);
    shieldPrice = Number(shieldPrice);
    armorPrice = Number(armorPrice);
    let counter = 0;
    let counterShields = 0;
    let brokenHelmets = 0;
    let brokenSwords = 0;
    let brokenShields = 0;
    let brokenArmors = 0;

    for (let i = 0; i < lostfights; i++) {
        counter += 1;
        if (counter % 2 === 0) {
            brokenHelmets += 1;
        }

        if (counter % 3 === 0) {
            brokenSwords += 1;
        }

        if (counter % 6 === 0) {
            counterShields += 1;
            brokenShields += 1;
            if (counterShields % 2 === 0) {
                brokenArmors += 1;
            }
        }
    }

    let expenses = brokenHelmets * helmetPrice + brokenSwords * swordPrice + brokenShields * shieldPrice + brokenArmors * armorPrice;
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}