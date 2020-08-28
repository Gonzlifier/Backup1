function Basic() {
    EnemyHPD = 8;
    var sX = Math.random() * 800;
    var sY = Math.random() * 600;
    var diamond = diamonds.create(sX, sY, 'diamond');
    var directionX = Math.random() * 360 - 180;
    var directionY = Math.random() * 360 - 180;
    diamond.setVelocityX(directionX);
    diamond.setVelocityY(directionY);
    diamond.setCollideWorldBounds(true);
    diamond.setBounce(1, 1);
};
function Fast() {
    EnemyHPR = 3;
    var sX = Math.random() * 800;
    var sY = Math.random() * 600;
    var Wabbit = rocks.create(sX, sY, 'Wabbit');
    var directionX = Math.random() * 800 - 360;
    var directionY = Math.random() * 800 - 360;
    Wabbit.setVelocityX(directionX);
    Wabbit.setVelocityY(directionY);
    Wabbit.setCollideWorldBounds(true);
    Wabbit.setBounce(1, 1);
};
function Tank() {
    EnemyHPP = 12;
    var sX = Math.random() * 800;
    var sY = Math.random() * 600;
    var Slime = patrols.create(sX, sY, 'Slime');
    var directionX = Math.random() * 180 - 120;
    var directionY = Math.random() * 180 - 120;
    Slime.setVelocityX(directionX);
    Slime.setVelocityY(directionY);
    Slime.setCollideWorldBounds(true);
    Slime.setBounce(1, 1);
}
function Mine() {
    EnemyHPM = 1;
    var sX = Math.random() * 800;
    var sY = Math.random() * 600;
    var minez = mines.create(sX, sY, 'mine');
    minez.setCollideWorldBounds(true);
}
function Fly() {
    EnemyHPF = 5;
    var sX = Math.random() * 800;
    var sY = Math.random() * 600;
    var flys = fly.create(sX, sY, 'fly').setScale(0.4);
    var directionX = Math.random() * 180 - 120;
    var directionY = Math.random() * 180 - 120;
    flys.setVelocityX(directionX);
    flys.setVelocityY(directionY);
    flys.setCollideWorldBounds(true);
    flys.setBounce(1, 1);
}
function FlyGunner() {
    EnemyHPFS = 6;
    FlyAlive = true;
    var FlyingShooting = true;
    var sX = Math.random() * 800;
    var sY = Math.random() * 600;
    var flyshoots = flyshoot.create(sX, sY, 'flyshoot').setScale(0.5).setTint(0xff0000);
    var directionX = Math.random() * 180 - 120;
    var directionY = Math.random() * 180 - 120;
    flyshoots.setVelocityX(directionX);
    flyshoots.setVelocityY(directionY);
    flyshoots.setCollideWorldBounds(true);
    flyshoots.setBounce(1, 1);
    setInterval(function () {
        if (FlyAlive == false) {
            FlyingShooting = false;
        }
        if (FlyingShooting == true) {
            FlyingBullets = FlyingBullet.create(flyshoots.x, flyshoots.y, 'bullet')
            FlyingBullets.setVelocityX(player.x - flyshoots.x)
            FlyingBullets.setVelocityY(player.y - flyshoots.y)
            FlyingBullets.setVisible(false);
            FlyingBullets.setActive(false)
            FlyingBullets.setVisible(true);
            FlyingBullets.setActive(true)
        } else {   
        }
    }, 1100);
}
function FloorBoss() {
    BossHP = 100;
    killsLeft += 10000;
    killsneeded += 10000;
    waveAt75 = true;
    var Bossz = Boss.create(400, 300, 'Boss');
    var directionX = Math.random() * 360 - 180;
    var directionY = Math.random() * 360 - 180;
    Bossz.setVelocityX(directionX);
    Bossz.setVelocityY(directionY);
    Bossz.setCollideWorldBounds(true);
    Bossz.setBounce(1, 1);
}
function Gunner() {
    EnemyHPS = 5;
    EnemyAlive = true
    var Shooting = true;
    var sX = Math.random() * 800;
    var sY = Math.random() * 600;
    var enemys = enemy.create(sX, sY, 'Gun');
    var directionX = Math.random() * 180 - 120;
    var directionY = Math.random() * 180 - 120;
    enemys.setVelocityX(directionX);
    enemys.setVelocityY(directionY);
    enemys.setCollideWorldBounds(true);
    enemys.setBounce(1, 1);
    setInterval(function () {
        enemys.rotation = Phaser.Math.Angle.Between(enemys.x, enemys.y, player.x, player.y);
        }, 10);
    enemys.setDrag(500, 500)
    setInterval(function () {
        if (EnemyAlive == false) {
            Shooting = false;
        }
        if (Shooting == true) {
            EnemyBullets = EnemyBullet.create(enemys.x, enemys.y, 'bullet')
            EnemyBullets.setVelocityX(player.x - enemys.x)
            EnemyBullets.setVelocityY(player.y - enemys.y)
            EnemyBullets.setVisible(false);
            EnemyBullets.setActive(false)
            EnemyBullets.setVisible(true);
            EnemyBullets.setActive(true)
        } else { 
        }
    }, 1000);
}
function targetHitS(bomb, enemy) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPS -= BulletDMG;
    if (EnemyHPS <= 0) {
        enemy.disableBody(true, true)
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        Shooting = false;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPS = 7;
        EnemyAlive = false
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function HP() {
    var sX = Math.random() * 800;
    var sY = Math.random() * 600;
    var hpup = Hpup.create(sX, sY, 'HPup');
    hpup.setCollideWorldBounds(true);
}
function DMG() {
    var sX = Math.random() * 800;
    var sY = Math.random() * 600;
    var dmgup = Dmgup.create(sX, sY, 'DMGup');
    dmgup.setCollideWorldBounds(true);
}
function SOULHEART() {
    var sX = Math.random() * 800;
    var sY = Math.random() * 600;
    var SoulHPS = SoulHP.create(sX, sY, 'SoulH');
    SoulHPS.setCollideWorldBounds(true);
}
function COINS() {
    var sX = Math.random() * 800;
    var sY = Math.random() * 600;
    var melon = melons.create(sX, sY, 'Coin');
    melon.setCollideWorldBounds(true);
}
function FRIENDLYBOMB() {
    var sX = Math.random() * 800;
    var sY = Math.random() * 600;
    var bombsE = bombE.create(sX, sY, 'friendlyBOMB');
    bombsE.setCollideWorldBounds(true);
}
function AKEY() {
    var sX = Math.random() * 800;
    var sY = Math.random() * 600;
    var pineapple = pineapples.create(sX, sY, 'Key');
    pineapple.setCollideWorldBounds(true);
}
function LASERODOOM() {
    var sX = Math.random() * 800;
    var sY = Math.random() * 600;
    var brimstones = brimstone.create(sX, sY, 'peper');
    brimstones.setCollideWorldBounds(true);
}
function BREAKFAST() {
    var sX = Math.random() * 800;
    var sY = Math.random() * 600;
    var breakfasts = breakfast.create(sX, sY, 'breakfast');
    breakfasts.setCollideWorldBounds(true);
}
function QUARTER() {
    var sX = Math.random() * 800;
    var sY = Math.random() * 600;
    var quarters = quarter.create(sX, sY, 'quarter');
    quarters.setCollideWorldBounds(true);
}
function HEART() {
    var sX = Math.random() * 800;
    var sY = Math.random() * 600;
    var hearts = heart.create(sX, sY, 'heart');
    hearts.setCollideWorldBounds(true);
}
function THEPACT() {
    var sX = Math.random() * 800;
    var sY = Math.random() * 600;
    var pacts = pact.create(sX, sY, 'pact');
    pacts.setCollideWorldBounds(true);
}
function SCAPULAR() {
    var sX = Math.random() * 800;
    var sY = Math.random() * 600;
    var scapulars = scapular.create(sX, sY, 'scapular');
    scapulars.setCollideWorldBounds(true);
}
function TRIPLESHOT() {
    var sX = Math.random() * 800;
    var sY = Math.random() * 600;
    var TriShots = TriShot.create(sX, sY, 'tri-shot');
    TriShots.setCollideWorldBounds(true);
}
function HANGMAN() {
    var sX = Math.random() * 800;
    var sY = Math.random() * 600;
    var Hangeds = Hanged.create(sX, sY, 'Hangman');
    Hangeds.setCollideWorldBounds(true);
}
function SPEC() {
    var sX = Math.random() * 800;
    var sY = Math.random() * 600;
    var Spectrals = Spectral.create(sX, sY, 'spec');
    Spectrals.setCollideWorldBounds(true);
}
function hp() {
    Hpup.create(400, 300, 'HPup');
}
function deploybomb() {
    var bombsE = bombE.create(400, 300, 'friendlyBOMB');
    bombsE.setCollideWorldBounds(true);
}
function coin() {
    melons.create(400, 300, 'Coin');
}
function key() {
    pineapples.create(400, 300, 'Key')
}
function soulH() {
    SoulHP.create(400, 300, 'SoulH')
}