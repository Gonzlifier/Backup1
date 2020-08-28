function RandomEnemy() {
    var EnemyRandom = Math.round(Math.random() * 8);
    if (EnemyRandom == 0) {
        Basic();
    } else if (EnemyRandom == 1) {
        Fast();
    } else if (EnemyRandom == 2) {
        Tank();
    } else if (EnemyRandom == 3) {
        Mine();
    } else if (EnemyRandom == 4) {
        Gunner();
    } else if (EnemyRandom == 5) {
        Basic();
    } else if (EnemyRandom == 6) {
        Tank();
    } else if (EnemyRandom == 7) {
        Fly();
    } else if (EnemyRandom == 8) {
        FlyGunner();
    }
}
function spawnPickup() {
    var numberPickup = Math.round(Math.random() * 8);
    if (numberPickup == 0) {
        hp()
        console.log('Hp Pickup!');
    } else if (numberPickup == 1) {
        coin();
    } else if (numberPickup == 2) {
        coin();
    } else if (numberPickup == 3) {
        console.log('Nothing sadly...');
    } else if (numberPickup == 4) {
        deploybomb();
        console.log('Bomb!');
    } else if (numberPickup == 5) {
        console.log('Nothing sadly...');
    } else if (numberPickup == 6) {
        key();
    } else if (numberPickup == 7) {
        soulH();
    } else if (numberPickup == 8) {
        console.log('Nothing sadly...')
    }
}
function targetHitD(bomb, diamond) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    if (EnemyHPD <= 0) {
        diamond.disableBody(true, true);
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPD = 8;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
        EnemyHPD -= BulletDMG;
    }
}
function targetHitR(bomb, Wabbit) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPR -= BulletDMG;
    if (EnemyHPR <= 0) {
        Wabbit.disableBody(true, true);
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPR = 3;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitP(bomb, Slime) {
    var explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPP -= BulletDMG;
    if (EnemyHPP <= 0) {
        Slime.disableBody(true, true);
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPP = 12;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitM(bomb, mine) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPM -= BulletDMG;
    if (EnemyHPM <= 0) {
        mine.disableBody(true, true);
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPM = 1;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitF(bomb, fly) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPF -= BulletDMG;
    if (EnemyHPF <= 0) {
        fly.disableBody(true, true);
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPF = 5;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function targetHitFS(bomb, flyshoot) {
    const explode = this.sound.add('boom');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    EnemyHPFS -= BulletDMG;
    if (EnemyHPFS <= 0) {
        flyshoot.disableBody(true, true);
        FlyAlive = false;
        explode.play();
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        EnemyHPFS = 6;
    } else {
        const collide = this.sound.add('BC');
        collide.play();
    }
}
function bossHit(bomb, Boss) {
    const collide = this.sound.add('BC');
    collide.play();
    const explode = this.sound.add('bossded');
    bomb.setActive(false).setVisible(false);
    bomb.disableBody(true, true);
    BossHP -= BulletDMG;
    if (BossHP <= 0) {
        Boss.disableBody(true, true);
        treasureRoom();
        explode.play();
        killsLeft = 0;
        killsneeded = 0;
        killText.setText('KillsLeft: ' + killsLeft);
        BossHP = 100;
    }
    if (BossHP <= 75) {
        if (waveAt75 == true) {
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            waveAt75 = false;
            waveAt50 = true;
        }
    }
    if (BossHP <= 50) {
        if (waveAt50 == true) {
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            waveAt50 = false;
            waveAt25 = true;
        }
    }
    if (BossHP <= 25) {
        if (waveAt25 == true) {
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            RandomEnemy();
            waveAt25 = false
        }
    }
}
function BulletCollide(EnemyBullet, bomb) {
    const explode = this.sound.add('pew');
    EnemyBullet.disableBody(true, true);
    bomb.disableBody(true, true);
    explode.play();
}
function mineHitD(mines, diamonds) {
    const explode = this.sound.add('boom');
    mines.disableBody(true, true);
    diamonds.disableBody(true, true);
    explode.play();
    killsLeft -= 2;
    killsneeded -= 2;
    killText.setText('KillsLeft: ' + killsLeft);
}
function mineHitR(mines, rocks) {
    const explode = this.sound.add('boom');
    mines.disableBody(true, true);
    rocks.disableBody(true, true);
    explode.play();
    killsLeft -= 2;
    killsneeded -= 2;
    killText.setText('KillsLeft: ' + killsLeft);
}
function mineHitP(mines, patrols) {
    const explode = this.sound.add('boom');
    mines.disableBody(true, true);
    patrols.disableBody(true, true);
    explode.play();
    killsLeft -= 2;
    killsneeded -= 2;
    killText.setText('KillsLeft: ' + killsLeft);
}
function NoOverlap(bombs1, bombs1) {
    bombs1.disableBody(true, true);
    bombs1.disableBody(true, true);
}
function NoOverlap(bombs2, bombs2) {
    bombs2.disableBody(true, true);
    bombs2.disableBody(true, true);
}
function NoOverlap(bombs3, bombs3) {
    bombs3.disableBody(true, true);
    bombs3.disableBody(true, true);
}
function NoOverlap(bombs4, bombs4) {
    bombs4.disableBody(true, true);
    bombs4.disableBody(true, true);
}
function NoOverlap(lazerbeam, lazerbeam) {
    lazerbeam.disableBody(true, true);
    lazerbeam.disableBody(true, true);
    lazerbeam.setVisible(false);
    lazerbeam.setActive(false);
}
function bulletHit(bullets, bullets) {
    bullets.disableBody(true, true);
    var collide = this.sound.add('BC');
    collide.play();
}
function youHit(player, patrols) {
    if (currentSouls > 0) {
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        patrols.disableBody(true, true)
        currentSouls--;
        SoulText.setText('Soul Hearts: ' + currentSouls);
        const explode = this.sound.add('BC');
        explode.play();
    } else if (currentSouls == 0) {
        killsLeft -= 1;
        killsneeded -= 1;
        killText.setText('KillsLeft: ' + killsLeft);
        patrols.disableBody(true, true)
        currentHP -= 1;
        HPText.setText('Current Hp: ' + currentHP);
        const explode = this.sound.add('BC');
        explode.play();
        if (currentHP <= 0) {
            HPText = 0;
            const collide = this.sound.add('playerded');
            collide.play();
            this.physics.pause();
            player.setTint(0xff0000);
            let gameOverText = this.add.text(game.config.width / 2.5,
                game.config.height / 3,
                'GAME OVER',
                { fontSize: '32px', fill: '#fff' });
            gameOverText.setDepth(1);
            gameOver = true;
            keyA = false;
            keyS = false;
            keyD = false;
            keyW = false;
        }
    }
}
function BossHitPlayer(player, Boss) {
    if (currentSouls > 0) {
        currentSouls--;
        SoulText.setText('Soul Hearts: ' + currentSouls);
        const explode = this.sound.add('BC');
        explode.play();
    } else if (currentSouls == 0) {
        currentHP -= 1;
        HPText.setText('Current Hp: ' + currentHP);
        const explode = this.sound.add('BC');
        explode.play();
        if (currentHP <= 0) {
            HPText = 0;
            const collide = this.sound.add('playerded');
            collide.play();
            this.physics.pause();
            player.setTint(0xff0000);
            let gameOverText = this.add.text(game.config.width / 2.5,
                game.config.height / 3,
                'GAME OVER',
                { fontSize: '32px', fill: '#fff' });
            gameOverText.setDepth(1);
            gameOver = true;
            keyA = false;
            keyS = false;
            keyD = false;
            keyW = false;
        }
    }
}
function BulletOw(player, EnemyBullet) {
    if (currentSouls > 0) {
        EnemyBullet.disableBody(true, true)
        currentSouls--;
        SoulText.setText('Soul Hearts: ' + currentSouls);
        const explode = this.sound.add('BC');
        explode.play();
    } else if (currentSouls <= 0) {
        EnemyBullet.disableBody(true, true)
        currentHP -= 1;
        HPText.setText('Current Hp: ' + currentHP);
        const explode = this.sound.add('BC');
        explode.play();
        if (currentHP <= 0) {
            EnemyBullet.disableBody(true, true)
            HPText = 0;
            const collide = this.sound.add('playerded');
            collide.play();
            this.physics.pause();
            player.setTint(0xff0000);
            let gameOverText = this.add.text(game.config.width / 2.5,
                game.config.height / 3,
                'GAME OVER',
                { fontSize: '32px', fill: '#fff' });
            gameOverText.setDepth(1);
            gameOver = true;
            keyA = false;
            keyS = false;
            keyD = false;
            keyW = false;
        }
    }
}
function Deleto(wall1, EnemyBullet) {
    EnemyBullet.disableBody(true, true)
}
function WallHit(bomb) {
    bomb.disableBody(true, true)
}
function PitHit(bomb) {
    bomb.disableBody(true, true)
}
function Restart(ResetZone, wall1) {
    wall1.disableBody(true);
    setTimeout(function () {
        ResetZone.disableBody(true, true);
        setTimeout(function () {
            wall1.enableBody(true, true);
        }, 10);
        console.log('wall active again')
    }, 1);
}
function CheckFly() {
    if (FlyingActive == true) {
        this.physics.world.removeCollider(qween);
        this.physics.world.removeCollider(king);
    } else if (FlyingActive == false) {
        var qween = this.physics.add.collider(player, wall1);
        var king = this.physics.add.collider(player, Pit);
        qween
        king
    }
}