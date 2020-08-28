  
function powerUpH(player, Hpup) {
    Hpup.setCollideWorldBounds(true);
    var picked = this.sound.add('pickup');
    if (currentHP <= 5) {
        currentHP += 1;
        HPText.setText('Current Hp:' + currentHP);
        Hpup.disableBody(true, true)
        picked.play();
    } else if (currentHP >= 6) {
        if (keyW.isDown) {
            Hpup.setVelocityY(-120);
            setTimeout(function () {
                Hpup.setVelocityY(-90);
            }, 200);
            setTimeout(function () {
                Hpup.setVelocityY(-50);
            }, 400);
            setTimeout(function () {
                Hpup.setVelocityY(-25);
            }, 600);
            setTimeout(function () {
                Hpup.setVelocityY(0);
            }, 700);
        } else if (keyA.isDown) {
            Hpup.setVelocityX(-120);
            setTimeout(function () {
                Hpup.setVelocityX(-90);
            }, 200);
            setTimeout(function () {
                Hpup.setVelocityX(-50);
            }, 400);
            setTimeout(function () {
                Hpup.setVelocityX(-25);
            }, 600);
            setTimeout(function () {
                Hpup.setVelocityX(0);
            }, 700);
        } else if (keyS.isDown) {
            Hpup.setVelocityY(120);
            setTimeout(function () {
                Hpup.setVelocityY(90);
            }, 200);
            setTimeout(function () {
                Hpup.setVelocityY(50);
            }, 400);
            setTimeout(function () {
                Hpup.setVelocityY(25);
            }, 600);
            setTimeout(function () {
                Hpup.setVelocityY(0);
            }, 700);
        } else if (keyD.isDown) {
            Hpup.setVelocityX(120);
            setTimeout(function () {
                Hpup.setVelocityX(90);
            }, 200);
            setTimeout(function () {
                Hpup.setVelocityX(50);
            }, 400);
            setTimeout(function () {
                Hpup.setVelocityX(25);
            }, 600);
            setTimeout(function () {
                Hpup.setVelocityX(0);
            }, 700);
        } else {
            Hpup.setVelocityX(0);
            Hpup.setVelocity(0);
        }
        Hpup.setBounce(0.1);
    }
}
function powerUpD(player, Dmgup) {
    if (powerUpD = true) {
        BulletDMG += 1;
        const picked = this.sound.add('pickup');
        Dmgup.disableBody(true, true);
        picked.play();
        setTimeout(function () {
            BulletDMG = 1;
        }, 20000);
        var dmgup = this.add.text(300, 250, 'DMG boost for 20 seconds!', { fontSize: '16px', fill: '#000' });
        dmgup
        setTimeout(function () {
            dmgup.setVisible(false);
        }, 1000);
    }
}
function powerupB(player, bombE) {
    const picked = this.sound.add('pickup');
    bombE.disableBody(true, true);
    picked.play();
    console.log('+1 bomb!')
    currentBombs++;
    BombText.setText('Bombs: ' + currentBombs);
}
function powerupSH(player, SoulHP) {
    const picked = this.sound.add('pickup');
    SoulHP.disableBody(true, true);
    picked.play();
    console.log('+1 Soul Heart!')
    currentSouls++;
    SoulText.setText('Soul Hearts: ' + currentSouls);
}
function fE(bombF, diamonds) {
    const explode = this.sound.add('boom');
    bombF.disableBody(true, true);
    diamonds.disableBody(true, true);
    explode.play();
    killsLeft -= 1;
    killsneeded -= 1;
    killText.setText('KillsLeft: ' + killsLeft);
}
function fE(bombF, patrols) {
    const explode = this.sound.add('boom');
    bombF.disableBody(true, true);
    patrols.disableBody(true, true);
    explode.play();
    killsLeft -= 1;
    killsneeded -= 1;
    killText.setText('KillsLeft: ' + killsLeft);
}
function fE(bombF, mines) {
    const explode = this.sound.add('boom');
    bombF.disableBody(true, true);
    mines.disableBody(true, true);
    explode.play();
    killsLeft -= 1;
    killsneeded -= 1;
    killText.setText('KillsLeft: ' + killsLeft);
}
function fE(bombF, rocks) {
    const explode = this.sound.add('boom');
    bombF.disableBody(true, true);
    rocks.disableBody(true, true);
    explode.play();
    killsLeft -= 1;
    killsneeded -= 1;
    killText.setText('KillsLeft: ' + killsLeft);
}