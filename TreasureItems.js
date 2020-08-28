  
function breakFast(player, breakfast) {
    const explode = this.sound.add('bump');
    explode.play();
    breakfast.disableBody(true, true);
    MaxHp ++;
    currentHP ++;
    HPText.setText('Current Hp: ' + currentHP);
}
function AQuarter(player, quarter) {
    const explode = this.sound.add('coingathered');
    explode.play();
    quarter.disableBody(true, true);
    currentCoins += 25;
    CoinText.setText('Coins: ' + currentCoins);
}
function v3(player, heart) {
    const explode = this.sound.add('bump');
    explode.play();
    heart.disableBody(true, true);
    MaxHp += 1;
    currentHP += 7;
    HPText.setText('Current Hp: ' + currentHP);
}
function ThePact(player, pact) {
    const explode = this.sound.add('bump');
    explode.play();
    pact.disableBody(true, true);
    BulletDMG += 0.5;
    currentSouls += 2;
    FireRate = FireRate - 200;
    SoulText.setText('Soul Hearts: ' + currentSouls);
}
function Scapular(player, scapular) {
    const explode = this.sound.add('bump');
    explode.play();
    scapular.disableBody(true, true);
    scapularActive = true;
}
function itemBrimstone(player, brimstone) {
    brimstoneActive = true;
    const explode = this.sound.add('bump');
    explode.play();
    player.setTint(0xff0000);
    brimstone.disableBody(true, true)
}
function TripleShot(player, TriShot) {
    const explode = this.sound.add('pickup');
    explode.play();
    TriShot.disableBody(true, true);
    TriShotActive = true;
    FireRate = FireRate * 1.5;
}
function HangMan(player, Hanged) {
    const explode = this.sound.add('pickup');
    explode.play();
    Hanged.disableBody(true, true);
    FlyingActive = true;
    FireRate = FireRate * 1.5;
}
function SpectralTear(player, Spectral) {
    const explode = this.sound.add('pickup');
    explode.play();
    player.setTint(0xff0000)
    Spectral.disableBody(true, true);
    SpectralActive = true;
}