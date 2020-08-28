function LaserFired() {
    if (beamActive = true) {
        Acess = false;
        beamActive = false;
        brimstonelaser = true;
        setTimeout(function () {
            beamDown = false;
            BU = false;
            BD = false;
            BL = false;
            BR = false;
            brimstonelaser = false;
        }, 1000);
    }
}
function LaserPrepared() {
    beamDown = true;
}
function fb(lazerbeam, diamonds) {
    var explode = this.sound.add('boom');
    EnemyHPD -= LazerDMG;
    if (EnemyHPD <= 0) {
        diamonds.disableBody(true, true);
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPD = 10;
    } else {
        var collide = this.sound.add('BC');
        collide.play();
    }
}
function fb(lazerbeam, patrols) {
    var explode = this.sound.add('boom');
    EnemyHPP -= LazerDMG;
    if (EnemyHPP <= 0) {
        patrols.disableBody(true, true);
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPP = 50;
    } else {
        var collide = this.sound.add('BC');
        collide.play();
    }
}
function fb(lazerbeam, mines) {
    var explode = this.sound.add('boom');
    EnemyHPM -= LazerDMG;
    if (EnemyHPM <= 0) {
        mine.disableBody(true, true);
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPM = 1;
    } else {
        var collide = this.sound.add('BC');
        collide.play();
    }
}
function fb(lazerbeam, rocks) {
    var explode = this.sound.add('boom');
    EnemyHPR -= LazerDMG;
    if (EnemyHPR <= 0) {
        rocks.disableBody(true, true);
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPR = 5;
    } else {
        var collide = this.sound.add('BC');
        collide.play();
    }
}
//-----------------------------------------------------------
function pickupC(player, melons) {
    var picked = this.sound.add('coingathered');
    picked.play();
    console.log('+1 Coin!')
    currentCoins++;
    CoinText.setText('Coins: ' + currentCoins);
    melons.disableBody(true, true);
}
function pickupK(player, pineapples) {
    var picked = this.sound.add('coingathered');
    picked.play();
    console.log('+1 Key!')
    currentKeys++;
    KeyText.setText('Keys: ' + currentKeys);
    pineapples.disableBody(true, true);
}
function spawnHP() {
    HpShop.create(450, 400, 'HPup');
}
function spawnBOMB() {
    BombFShop.create(350, 400, 'friendlyBOMB');
}
function buyHP(player, HpShop) {
    if (currentHP < 6) {
        if (currentCoins >= 5) {
            currentHP += 1;
            HPText.setText('Current Hp:' + currentHP);
            HpShop.disableBody(true, true)
            var picked = this.sound.add('pickup');
            picked.play();
            currentCoins -= 5;
            CoinText.setText('Coins: ' + currentCoins);
        }
    }
}
function buyBOMB(player, BombFShop) {
    if (currentCoins >= 5) {
        var picked = this.sound.add('pickup');
        BombFShop.disableBody(true, true);
        picked.play();
        console.log('+1 bomb!')
        currentBombs++;
        BombText.setText('Bombs: ' + currentBombs);
        currentCoins -= 5;
        CoinText.setText('Coins: ' + currentCoins);
    }
}