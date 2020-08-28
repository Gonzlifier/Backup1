var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false,
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};
var game = new Phaser.Game(config);
let keyA;
let keyS;
let keyD;
let keyW;
var gameOver = false;
var player;
var rocks;
var mines;
var patrols;
var diamonds;
var enemy;
var stars1;
var stars2;
var stars3;
var stars4;
var cursors;
var text;
var Hpup;
var Dmgup;
var killsLeft = 6;
var killText;
var currentLevel = 1;
var levelText;
var currentHP = 6;
var HPText;
var titleT;
var BrimCharge = 0;
var BrimCharger = 100;
var helpme = false;
var spawn;
var spawnDelay;
var Down = 400;
var Up = -400;
var Left = -400;
var Right = 400;
var EnemyHPD;
var EnemyHPR;
var EnemyHPM;
var EnemyHPP;
var EnemyHPS;
var EnemyHPF;
var EnemyHPFS;
var BossHP;
var BulletDMG = 1;
var BulletFire = 1;
var Door1L;
var Door2L;
var Door3L;
var Door4L;
var Door1L;
var Door2L;
var Door3L;
var Door4L;
var doorOpened;
var Entered = false;
var killsneeded = 6;
var door = false;
var currentBombs = 0;
var BombText;
var BombF;
var ButtonEdown = false;
var U = false;
var D = false;
var L = false;
var R = false;
var directX;
var directY;
var brimstone;
var brimstoneActive = false;
var laserfire = false;
var brimstoneCharge;
var Acess = false
var playes;
var playez;
var beamActive = false;
var beamDown = false;
var beamUp = false;
var beamLeft = false;
var beamRight = false;
var brimstonelaser = false;
var lazerbeam;
var BR = false;
var BL = false;
var BU = false;
var BD = false;
var LazerDMG = 5;
var lazerbeams;
var switch1 = false;
var getTroom = true;
var MaxHp = 6;
var SoulText;
var currentSouls = 0;
var scapularActive = false;
var addSoulHearts = false;
var BossChance = 0;
var BossMinions = false;
var waveAt75 = false;
var waveAt50 = false;
var waveAt25 = false;
var KeyText;
var currentKeys = 0;
var EnemyBullet;
var bullet;
var EnemyAlive = true;
var EnemyShootAngle;
var TriShotActive = false;
var ShotTimer = true;
var ShotReady = true;
var FireRate = 500;
var wall1;
var Pit;
var Reset = false;
var ResetZone;
var FlyingBullet;
var FlyAlive = true;
var SpectralActive = false;
var FlyingActive = false;
function preload() {
    this.load.image('wall', 'http://labs.phaser.io/assets/sprites/gem.png')
    this.load.image('pit', 'http://labs.phaser.io/assets/sprites/loop.png')
    //-----------------------------------------------------------
    this.load.image('sky', 'http://labs.phaser.io/src/games/firstgame/assets/sky.png');
    this.load.image('space', 'http://labs.phaser.io/assets/skies/space.jpg');
    this.load.image('bomb', 'http://labs.phaser.io/src/games/firstgame/assets/bomb.png');
    this.load.image('Spec', 'http://labs.phaser.io/assets/sprites/rain.png');
    this.load.image('menutext', 'http://labs.phaser.io/assets/sprites/button-text.png');
    this.load.image('friendlyBOMB', 'http://labs.phaser.io/assets/sprites/red_ball.png')
    this.load.image('activeBOMB', 'http://labs.phaser.io/assets/sprites/shinyball.png')
    //-----------------------------------------------------------
    this.load.image('diamond', 'http://labs.phaser.io/assets/sprites/diamond.png');
    this.load.image('bullet', 'http://labs.phaser.io/assets/sprites/bullets/bullet7.png');
    this.load.image('Wabbit', 'http://labs.phaser.io/assets/sprites/wabbit.png');
    this.load.image('mine', 'http://labs.phaser.io/assets/sprites/mine.png');
    this.load.image('Slime', 'http://labs.phaser.io/assets/sprites/slime.png');
    this.load.image('Gun', 'http://labs.phaser.io/assets/sprites/player_handgun.png'),
        this.load.image('fly', 'http://labs.phaser.io/assets/sprites/wasp.png');
    this.load.image('flyshoot', 'http://labs.phaser.io/assets/sprites/wasp.png'),
        this.load.image('Boss', 'http://labs.phaser.io/assets/sprites/hotdog.png');
    //-----------------------------------------------------------
    this.load.image('HPup', 'http://labs.phaser.io/assets/sprites/firstaid.png');
    this.load.image('DMGup', 'http://labs.phaser.io/assets/sprites/orb-red.png');
    this.load.image('SoulH', 'http://labs.phaser.io/assets/sprites/orb-blue.png');
    this.load.image('star', 'http://labs.phaser.io/src/games/firstgame/assets/star.png');
    this.load.image('Coin', 'http://labs.phaser.io/assets/sprites/melon.png');
    this.load.image('Key', 'http://labs.phaser.io/assets/sprites/pineapple.png');
    //-----------------------------------------------------------
    this.load.image('peper', 'http://labs.phaser.io/assets/sprites/pepper.png');
    this.load.image('Blaser', 'http://labs.phaser.io/assets/sprites/rgblaser.png');
    this.load.image('breakfast', 'http://labs.phaser.io/assets/sprites/apple.png');
    this.load.image('quarter', 'http://labs.phaser.io/assets/sprites/purple_ball.png');
    this.load.image('heart', 'http://labs.phaser.io/assets/sprites/tomato.png');
    this.load.image('pact', 'http://labs.phaser.io/assets/sprites/default.png');
    this.load.image('scapular', 'http://labs.phaser.io/assets/sprites/yellow_ball.png');
    this.load.image('tri-shot', 'http://labs.phaser.io/assets/sprites/crate32.png');
    this.load.image('Hangman', 'http://labs.phaser.io/assets/sprites/onion.png');
    this.load.image('spec', 'http://labs.phaser.io/assets/sprites/bullets/bullet9.png');
    //-----------------------------------------------------------
    this.load.audio('BC', 'http://labs.phaser.io/assets/audio/SoundEffects/boss_hit.wav');
    this.load.audio('boom', 'http://labs.phaser.io/assets/audio/SoundEffects/explosion.mp3');
    this.load.audio('playerded', 'http://labs.phaser.io/assets/audio/SoundEffects/player_death.wav')
    this.load.audio('pickup', 'http://labs.phaser.io/assets/audio/SoundEffects/pickup.wav');
    this.load.audio('bump', 'http://labs.phaser.io/assets/audio/SoundEffects/need_cells.wav');
    this.load.audio('coingathered', 'http://labs.phaser.io/assets/audio/SoundEffects/key.wav');
    this.load.audio('bossded', 'http://labs.phaser.io/assets/audio/SoundEffects/sentry_explode.wav');
    this.load.audio('pew', 'http://labs.phaser.io/assets/audio/SoundEffects/pistol.wav');
    this.load.audio('pewpewpew', 'http://labs.phaser.io/assets/audio/SoundEffects/shotgun.wav');
    this.load.spritesheet('dude', 'http://labs.phaser.io/src/games/firstgame/assets/dude.png', { frameWidth: 32, frameHeight: 48 });
};
function create() {
    this.physics.world.setBounds(0, 0, 800, 600);
    titleT = this.add.image(400, 300, 'menutext').setInteractive();
    titleT.setDepth(1);
    spawn = titleT.on('pointerdown', function () {
        helpme = true;
        window.setTimeout(function () {
            killsneeded -= 6;
            killsLeft -= 6;
            killText.setText('KillsLeft: ' + killsLeft)
        });
    });
    //-----------------------------------------------------------
    this.add.image(400, 300, 'sky');
    this.physics.pause();
    killText = this.add.text(16, 16, 'KillsLeft: 6', { fontSize: '32px', fill: '#000' });
    levelText = this.add.text(16, 48, 'Level: 1', { fontSize: '32px', fill: '#000' });
    HPText = this.add.text(16, 72, 'Current Hp: 6', { fontSize: '16px', fill: '#000' });
    SoulText = this.add.text(16, 84, 'Soul Hearts: 0', { fontSize: '16px', fill: '#000' });
    CoinText = this.add.text(16, 96, 'Coins : 0', { fontSize: '16px', fill: '#000' });
    BombText = this.add.text(16, 108, 'Bombs: 0', { fontSize: '16px', fill: '#000' });
    KeyText = this.add.text(16, 120, 'Keys: 0', { fontSize: '16px', fill: '#000' });
    //-----------------------------------------------------------
    keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
    //-----------------------------------------------------------
    cursors = this.input.keyboard.createCursorKeys();
    player = this.physics.add.sprite(400, 300, 'dude');
    player.setCollideWorldBounds(true);
    killText.setDepth(2);
    levelText.setDepth(2);
    HPText.setDepth(2);
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'turn',
        frames: [{ key: 'dude', frame: 4 }],
        frameRate: 20
    });
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'up',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'down',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });
    //-----------------------------------------------------------
    wall1 = this.physics.add.staticGroup();
    Pit = this.physics.add.staticGroup();
    patrols = this.physics.add.group();
    mines = this.physics.add.group();
    diamonds = this.physics.add.group();
    Boss = this.physics.add.group();
    enemy = this.physics.add.group();
    fly = this.physics.add.group();
    flyshoot = this.physics.add.group();
    EnemyBullet = this.physics.add.group();
    FlyingBullet = this.physics.add.group();
    bombs1 = this.physics.add.group();
    bombs2 = this.physics.add.group();
    bombs3 = this.physics.add.group();
    bombs4 = this.physics.add.group();
    bomb1s = this.physics.add.group();
    bomb2s = this.physics.add.group();
    bomb3s = this.physics.add.group();
    bomb4s = this.physics.add.group();
    b1s = this.physics.add.group();
    b2s = this.physics.add.group();
    b3s = this.physics.add.group();
    b4s = this.physics.add.group();
    Specs1 = this.physics.add.group();
    Specs2 = this.physics.add.group();
    Specs3 = this.physics.add.group();
    Specs4 = this.physics.add.group();
    Spec1s = this.physics.add.group();
    Spec2s = this.physics.add.group();
    Spec3s = this.physics.add.group();
    Spec4s = this.physics.add.group();
    S1s = this.physics.add.group();
    S2s = this.physics.add.group();
    S3s = this.physics.add.group();
    S4s = this.physics.add.group();
    bombE = this.physics.add.group();
    bombF = this.physics.add.group();
    melons = this.physics.add.group();
    pineapples = this.physics.add.group();
    SoulHP = this.physics.add.group();
    //-----------------------------------------------------------
    Door1L = this.add.zone(400, 70).setSize(100, 10);
    Door2L = this.add.zone(750, 300).setSize(10, 100);
    Door3L = this.add.zone(400, 530).setSize(100, 10);
    Door4L = this.add.zone(50, 300).setSize(10, 100);
    Door1E = this.add.zone(400, 10).setSize(100, 10);
    Door2E = this.add.zone(790, 300).setSize(10, 100);
    Door3E = this.add.zone(400, 590).setSize(100, 10);
    Door4E = this.add.zone(20, 300).setSize(10, 100);
    ResetZone = this.physics.add.group();
    this.add.image(400, 10, 'star');
    this.add.image(790, 300, 'star');
    this.add.image(400, 590, 'star');
    this.add.image(10, 300, 'star');
    this.physics.world.enable(Door1L);
    this.physics.world.enable(Door2L);
    this.physics.world.enable(Door3L);
    this.physics.world.enable(Door4L);
    this.physics.world.enable(Door1E);
    this.physics.world.enable(Door2E);
    this.physics.world.enable(Door3E);
    this.physics.world.enable(Door4E);
    //-----------------------------------------------------------
    rocks = this.physics.add.group();
    Hpup = this.physics.add.group();
    HpShop = this.physics.add.group();
    BombFShop = this.physics.add.group();
    player.setDrag(500);
    Dmgup = this.physics.add.group();
    //-----------------------------------------------------------
    lazerbeam = this.physics.add.group();
    brimstone = this.physics.add.group();
    breakfast = this.physics.add.group();
    quarter = this.physics.add.group();
    heart = this.physics.add.group();
    pact = this.physics.add.group();
    scapular = this.physics.add.group();
    TriShot = this.physics.add.group();
    Hanged = this.physics.add.group();
    Spectral = this.physics.add.group();
    //-----------------------------------------------------------
    this.physics.add.collider(bombs1, wall1, WallHit);
    this.physics.add.collider(bombs2, wall1, WallHit);
    this.physics.add.collider(bombs3, wall1, WallHit);
    this.physics.add.collider(bombs4, wall1, WallHit);
    this.physics.add.collider(bomb1s, wall1, WallHit);
    this.physics.add.collider(bomb2s, wall1, WallHit);
    this.physics.add.collider(bomb3s, wall1, WallHit);
    this.physics.add.collider(bomb4s, wall1, WallHit);
    this.physics.add.collider(b1s, wall1, WallHit);
    this.physics.add.collider(b2s, wall1, WallHit);
    this.physics.add.collider(b3s, wall1, WallHit);
    this.physics.add.collider(b4s, wall1, WallHit);
    //-----------------------------------------------------
    this.physics.add.collider(rocks, diamonds);
    this.physics.add.collider(rocks, patrols);
    this.physics.add.collider(rocks, rocks);
    this.physics.add.collider(player, Hpup, powerUpH, null, this);
    this.physics.add.collider(Hpup, Dmgup);
    this.physics.add.collider(melons, Dmgup);
    this.physics.add.collider(melons, Hpup);
    this.physics.add.collider(Hpup, Hpup);
    this.physics.add.collider(Dmgup, Dmgup);
    this.physics.add.collider(brimstone, melons);
    this.physics.add.collider(brimstone, Dmgup);
    this.physics.add.collider(brimstone, Hpup);
    this.physics.add.collider(player, enemy);
    this.physics.add.collider(enemy, enemy);
    this.physics.add.collider(enemy, mines);
    this.physics.add.collider(player, Boss, BossHitPlayer, null, this);;
    this.physics.add.collider(wall1, diamonds);
    this.physics.add.collider(wall1, patrols);
    this.physics.add.collider(wall1, rocks);
    this.physics.add.collider(wall1, mines);
    this.physics.add.collider(wall1, enemy);
    this.physics.add.overlap(wall1, player, CheckFly, null, this);
    this.physics.add.collider(wall1, EnemyBullet, Deleto);
    this.physics.add.collider(wall1, FlyingBullet, Deleto);
    this.physics.add.collider(Pit, diamonds);
    this.physics.add.collider(Pit, patrols);
    this.physics.add.collider(Pit, rocks);
    this.physics.add.collider(Pit, mines);
    this.physics.add.collider(Pit, enemy);
    this.physics.add.overlap(Pit, player, CheckFly, null, this);
    //-----------------------------------------------------------
    this.physics.add.overlap(bombs1, diamonds, targetHitD, null, this);
    this.physics.add.overlap(bombs2, diamonds, targetHitD, null, this);
    this.physics.add.overlap(bombs3, diamonds, targetHitD, null, this);
    this.physics.add.overlap(bombs4, diamonds, targetHitD, null, this);
    this.physics.add.overlap(bombs1, rocks, targetHitR, null, this);
    this.physics.add.overlap(bombs2, rocks, targetHitR, null, this);
    this.physics.add.overlap(bombs3, rocks, targetHitR, null, this);
    this.physics.add.overlap(bombs4, rocks, targetHitR, null, this);
    this.physics.add.overlap(bombs1, mines, targetHitM, null, this);
    this.physics.add.overlap(bombs2, mines, targetHitM, null, this);
    this.physics.add.overlap(bombs3, mines, targetHitM, null, this);
    this.physics.add.overlap(bombs4, mines, targetHitM, null, this);
    this.physics.add.overlap(bombs1, patrols, targetHitP, null, this);
    this.physics.add.overlap(bombs2, patrols, targetHitP, null, this);
    this.physics.add.overlap(bombs3, patrols, targetHitP, null, this);
    this.physics.add.overlap(bombs4, patrols, targetHitP, null, this);
    this.physics.add.overlap(bombs1, Boss, bossHit, null, this);
    this.physics.add.overlap(bombs2, Boss, bossHit, null, this);
    this.physics.add.overlap(bombs3, Boss, bossHit, null, this);
    this.physics.add.overlap(bombs4, Boss, bossHit, null, this);
    this.physics.add.overlap(bombs1, enemy, targetHitS, null, this);
    this.physics.add.overlap(bombs2, enemy, targetHitS, null, this);
    this.physics.add.overlap(bombs3, enemy, targetHitS, null, this);
    this.physics.add.overlap(bombs4, enemy, targetHitS, null, this);
    this.physics.add.overlap(bombs1, fly, targetHitF, null, this);
    this.physics.add.overlap(bombs2, fly, targetHitF, null, this);
    this.physics.add.overlap(bombs3, fly, targetHitF, null, this);
    this.physics.add.overlap(bombs4, fly, targetHitF, null, this);
    this.physics.add.overlap(bombs1, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(bombs2, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(bombs3, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(bombs4, flyshoot, targetHitFS, null, this);
    // ------------------------------------------------------------------------
    this.physics.add.overlap(bomb1s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(bomb2s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(bomb3s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(bomb4s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(bomb1s, rocks, targetHitR, null, this);
    this.physics.add.overlap(bomb2s, rocks, targetHitR, null, this);
    this.physics.add.overlap(bomb3s, rocks, targetHitR, null, this);
    this.physics.add.overlap(bomb4s, rocks, targetHitR, null, this);
    this.physics.add.overlap(bomb1s, mines, targetHitM, null, this);
    this.physics.add.overlap(bomb2s, mines, targetHitM, null, this);
    this.physics.add.overlap(bomb3s, mines, targetHitM, null, this);
    this.physics.add.overlap(bomb4s, mines, targetHitM, null, this);
    this.physics.add.overlap(bomb1s, patrols, targetHitP, null, this);
    this.physics.add.overlap(bomb2s, patrols, targetHitP, null, this);
    this.physics.add.overlap(bomb3s, patrols, targetHitP, null, this);
    this.physics.add.overlap(bomb4s, patrols, targetHitP, null, this);
    this.physics.add.overlap(bomb1s, Boss, bossHit, null, this);
    this.physics.add.overlap(bomb2s, Boss, bossHit, null, this);
    this.physics.add.overlap(bomb3s, Boss, bossHit, null, this);
    this.physics.add.overlap(bomb4s, Boss, bossHit, null, this);
    this.physics.add.overlap(bomb1s, enemy, targetHitS, null, this);
    this.physics.add.overlap(bomb2s, enemy, targetHitS, null, this);
    this.physics.add.overlap(bomb3s, enemy, targetHitS, null, this);
    this.physics.add.overlap(bomb4s, enemy, targetHitS, null, this);
    this.physics.add.overlap(bomb1s, fly, targetHitF, null, this);
    this.physics.add.overlap(bomb2s, fly, targetHitF, null, this);
    this.physics.add.overlap(bomb3s, fly, targetHitF, null, this);
    this.physics.add.overlap(bomb4s, fly, targetHitF, null, this);
    this.physics.add.overlap(bomb1s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(bomb2s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(bomb3s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(bomb4s, flyshoot, targetHitFS, null, this);
    // ------------------------------------------------------------------------
    this.physics.add.overlap(b1s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(b2s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(b3s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(b4s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(b1s, rocks, targetHitR, null, this);
    this.physics.add.overlap(b2s, rocks, targetHitR, null, this);
    this.physics.add.overlap(b3s, rocks, targetHitR, null, this);
    this.physics.add.overlap(b4s, rocks, targetHitR, null, this);
    this.physics.add.overlap(b1s, mines, targetHitM, null, this);
    this.physics.add.overlap(b2s, mines, targetHitM, null, this);
    this.physics.add.overlap(b3s, mines, targetHitM, null, this);
    this.physics.add.overlap(b4s, mines, targetHitM, null, this);
    this.physics.add.overlap(b1s, patrols, targetHitP, null, this);
    this.physics.add.overlap(b2s, patrols, targetHitP, null, this);
    this.physics.add.overlap(b3s, patrols, targetHitP, null, this);
    this.physics.add.overlap(b4s, patrols, targetHitP, null, this);
    this.physics.add.overlap(b1s, Boss, bossHit, null, this);
    this.physics.add.overlap(b2s, Boss, bossHit, null, this);
    this.physics.add.overlap(b3s, Boss, bossHit, null, this);
    this.physics.add.overlap(b4s, Boss, bossHit, null, this);
    this.physics.add.overlap(b1s, enemy, targetHitS, null, this);
    this.physics.add.overlap(b2s, enemy, targetHitS, null, this);
    this.physics.add.overlap(b3s, enemy, targetHitS, null, this);
    this.physics.add.overlap(b4s, enemy, targetHitS, null, this);
    this.physics.add.overlap(b1s, fly, targetHitF, null, this);
    this.physics.add.overlap(b2s, fly, targetHitF, null, this);
    this.physics.add.overlap(b3s, fly, targetHitF, null, this);
    this.physics.add.overlap(b4s, fly, targetHitF, null, this);
    this.physics.add.overlap(b1s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(b2s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(b3s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(b4s, flyshoot, targetHitFS, null, this);
    // ------------------------------------------------------------------------
    this.physics.add.overlap(bombs1, bombs1, NoOverlap, null, this);
    this.physics.add.overlap(bombs2, bombs2, NoOverlap, null, this);
    this.physics.add.overlap(bombs3, bombs3, NoOverlap, null, this);
    this.physics.add.overlap(bombs4, bombs4, NoOverlap, null, this);
    this.physics.add.overlap(bomb1s, bomb1s, NoOverlap, null, this);
    this.physics.add.overlap(bomb2s, bomb2s, NoOverlap, null, this);
    this.physics.add.overlap(bomb3s, bomb3s, NoOverlap, null, this);
    this.physics.add.overlap(bomb4s, bomb4s, NoOverlap, null, this);
    this.physics.add.overlap(b1s, b1s, NoOverlap, null, this);
    this.physics.add.overlap(b2s, b2s, NoOverlap, null, this);
    this.physics.add.overlap(b3s, b3s, NoOverlap, null, this);
    this.physics.add.overlap(b4s, b4s, NoOverlap, null, this);
    this.physics.add.overlap(lazerbeam, lazerbeam, NoOverlap, null, this);
    // ------------------------------------------------------------------------
    //-----------------------------------------------------------
    this.physics.add.overlap(Specs1, diamonds, targetHitD, null, this);
    this.physics.add.overlap(Specs2, diamonds, targetHitD, null, this);
    this.physics.add.overlap(Specs3, diamonds, targetHitD, null, this);
    this.physics.add.overlap(Specs4, diamonds, targetHitD, null, this);
    this.physics.add.overlap(Specs1, rocks, targetHitR, null, this);
    this.physics.add.overlap(Specs2, rocks, targetHitR, null, this);
    this.physics.add.overlap(Specs3, rocks, targetHitR, null, this);
    this.physics.add.overlap(Specs4, rocks, targetHitR, null, this);
    this.physics.add.overlap(Specs1, mines, targetHitM, null, this);
    this.physics.add.overlap(Specs2, mines, targetHitM, null, this);
    this.physics.add.overlap(Specs3, mines, targetHitM, null, this);
    this.physics.add.overlap(Specs4, mines, targetHitM, null, this);
    this.physics.add.overlap(Specs1, patrols, targetHitP, null, this);
    this.physics.add.overlap(Specs2, patrols, targetHitP, null, this);
    this.physics.add.overlap(Specs3, patrols, targetHitP, null, this);
    this.physics.add.overlap(Specs4, patrols, targetHitP, null, this);
    this.physics.add.overlap(Specs1, Boss, bossHit, null, this);
    this.physics.add.overlap(Specs2, Boss, bossHit, null, this);
    this.physics.add.overlap(Specs3, Boss, bossHit, null, this);
    this.physics.add.overlap(Specs4, Boss, bossHit, null, this);
    this.physics.add.overlap(Specs1, enemy, targetHitS, null, this);
    this.physics.add.overlap(Specs2, enemy, targetHitS, null, this);
    this.physics.add.overlap(Specs3, enemy, targetHitS, null, this);
    this.physics.add.overlap(Specs4, enemy, targetHitS, null, this);
    this.physics.add.overlap(Specs1, fly, targetHitF, null, this);
    this.physics.add.overlap(Specs2, fly, targetHitF, null, this);
    this.physics.add.overlap(Specs3, fly, targetHitF, null, this);
    this.physics.add.overlap(Specs4, fly, targetHitF, null, this);
    this.physics.add.overlap(Specs1, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(Specs2, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(Specs3, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(Specs4, flyshoot, targetHitFS, null, this);
    // ------------------------------------------------------------------------
    this.physics.add.overlap(Spec1s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(Spec2s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(Spec3s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(Spec4s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(Spec1s, rocks, targetHitR, null, this);
    this.physics.add.overlap(Spec2s, rocks, targetHitR, null, this);
    this.physics.add.overlap(Spec3s, rocks, targetHitR, null, this);
    this.physics.add.overlap(Spec4s, rocks, targetHitR, null, this);
    this.physics.add.overlap(Spec1s, mines, targetHitM, null, this);
    this.physics.add.overlap(Spec2s, mines, targetHitM, null, this);
    this.physics.add.overlap(Spec3s, mines, targetHitM, null, this);
    this.physics.add.overlap(Spec4s, mines, targetHitM, null, this);
    this.physics.add.overlap(Spec1s, patrols, targetHitP, null, this);
    this.physics.add.overlap(Spec2s, patrols, targetHitP, null, this);
    this.physics.add.overlap(Spec3s, patrols, targetHitP, null, this);
    this.physics.add.overlap(Spec4s, patrols, targetHitP, null, this);
    this.physics.add.overlap(Spec1s, Boss, bossHit, null, this);
    this.physics.add.overlap(Spec2s, Boss, bossHit, null, this);
    this.physics.add.overlap(Spec3s, Boss, bossHit, null, this);
    this.physics.add.overlap(Spec4s, Boss, bossHit, null, this);
    this.physics.add.overlap(Spec1s, enemy, targetHitS, null, this);
    this.physics.add.overlap(Spec2s, enemy, targetHitS, null, this);
    this.physics.add.overlap(Spec3s, enemy, targetHitS, null, this);
    this.physics.add.overlap(Spec4s, enemy, targetHitS, null, this);
    this.physics.add.overlap(Spec1s, fly, targetHitF, null, this);
    this.physics.add.overlap(Spec2s, fly, targetHitF, null, this);
    this.physics.add.overlap(Spec3s, fly, targetHitF, null, this);
    this.physics.add.overlap(Spec4s, fly, targetHitF, null, this);
    this.physics.add.overlap(Spec1s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(Spec2s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(Spec3s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(Spec4s, flyshoot, targetHitFS, null, this);
    // ------------------------------------------------------------------------
    this.physics.add.overlap(S1s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(S2s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(S3s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(S4s, diamonds, targetHitD, null, this);
    this.physics.add.overlap(S1s, rocks, targetHitR, null, this);
    this.physics.add.overlap(S2s, rocks, targetHitR, null, this);
    this.physics.add.overlap(S3s, rocks, targetHitR, null, this);
    this.physics.add.overlap(S4s, rocks, targetHitR, null, this);
    this.physics.add.overlap(S1s, mines, targetHitM, null, this);
    this.physics.add.overlap(S2s, mines, targetHitM, null, this);
    this.physics.add.overlap(S3s, mines, targetHitM, null, this);
    this.physics.add.overlap(S4s, mines, targetHitM, null, this);
    this.physics.add.overlap(S1s, patrols, targetHitP, null, this);
    this.physics.add.overlap(S2s, patrols, targetHitP, null, this);
    this.physics.add.overlap(S3s, patrols, targetHitP, null, this);
    this.physics.add.overlap(S4s, patrols, targetHitP, null, this);
    this.physics.add.overlap(S1s, Boss, bossHit, null, this);
    this.physics.add.overlap(S2s, Boss, bossHit, null, this);
    this.physics.add.overlap(S3s, Boss, bossHit, null, this);
    this.physics.add.overlap(S4s, Boss, bossHit, null, this);
    this.physics.add.overlap(S1s, enemy, targetHitS, null, this);
    this.physics.add.overlap(S2s, enemy, targetHitS, null, this);
    this.physics.add.overlap(S3s, enemy, targetHitS, null, this);
    this.physics.add.overlap(S4s, enemy, targetHitS, null, this);
    this.physics.add.overlap(S1s, fly, targetHitF, null, this);
    this.physics.add.overlap(S2s, fly, targetHitF, null, this);
    this.physics.add.overlap(S3s, fly, targetHitF, null, this);
    this.physics.add.overlap(S4s, fly, targetHitF, null, this);
    this.physics.add.overlap(S1s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(S2s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(S3s, flyshoot, targetHitFS, null, this);
    this.physics.add.overlap(S4s, flyshoot, targetHitFS, null, this);
    // ------------------------------------------------------------------------
    this.physics.add.overlap(Specs1, Specs1, NoOverlap, null, this);
    this.physics.add.overlap(Specs2, Specs2, NoOverlap, null, this);
    this.physics.add.overlap(Specs3, Specs3, NoOverlap, null, this);
    this.physics.add.overlap(Specs4, Specs4, NoOverlap, null, this);
    this.physics.add.overlap(Spec1s, Spec1s, NoOverlap, null, this);
    this.physics.add.overlap(Spec2s, Spec2s, NoOverlap, null, this);
    this.physics.add.overlap(Spec3s, Spec3s, NoOverlap, null, this);
    this.physics.add.overlap(Spec4s, Spec4s, NoOverlap, null, this);
    this.physics.add.overlap(S1s, b1s, NoOverlap, null, this);
    this.physics.add.overlap(S2s, b2s, NoOverlap, null, this);
    this.physics.add.overlap(S3s, b3s, NoOverlap, null, this);
    this.physics.add.overlap(S4s, b4s, NoOverlap, null, this);
    this.physics.add.overlap(player, mines, youHit, null, this);
    this.physics.add.overlap(player, diamonds, youHit, null, this);
    this.physics.add.overlap(player, patrols, youHit, null, this);
    this.physics.add.overlap(player, fly, youHit, null, this);
    this.physics.add.collider(player, flyshoot);
    this.physics.add.overlap(player, EnemyBullet, BulletOw, null, this);
    this.physics.add.overlap(player, FlyingBullet, BulletOw, null, this);
    // ------------------------------------------------------------------------
    this.physics.add.overlap(player, Hpup, powerUpH, null, this);
    this.physics.add.overlap(player, Dmgup, powerUpD, null, this);
    this.physics.add.overlap(player, bombE, powerupB, null, this);
    this.physics.add.overlap(player, SoulHP, powerupSH, null, this);
    this.physics.add.overlap(player, brimstone, itemBrimstone, null, this);
    this.physics.add.overlap(player, melons, pickupC, null, this);
    this.physics.add.overlap(player, pineapples, pickupK, null, this);
    this.physics.add.overlap(player, breakfast, breakFast, null, this);
    this.physics.add.overlap(player, quarter, AQuarter, null, this);
    this.physics.add.overlap(player, heart, v3, null, this);
    this.physics.add.overlap(player, pact, ThePact, null, this);
    this.physics.add.overlap(player, scapular, Scapular, null, this);
    this.physics.add.overlap(player, TriShot, TripleShot, null, this);
    this.physics.add.overlap(player, Hanged, HangMan, null, this);
    this.physics.add.overlap(player, Spectral, SpectralTear, null, this);
    // ------------------------------------------------------------------------
    this.physics.add.overlap(player, Door1L, door1Enter, null, this);
    this.physics.add.overlap(player, Door2L, door2Enter, null, this);
    this.physics.add.overlap(player, Door3L, door3Enter, null, this);
    this.physics.add.overlap(player, Door4L, door4Enter, null, this);
    this.physics.add.overlap(player, Door1E, door1Leave, null, this);
    this.physics.add.overlap(player, Door2E, door2Leave, null, this);
    this.physics.add.overlap(player, Door3E, door3Leave, null, this);
    this.physics.add.overlap(player, Door4E, door4Leave, null, this);
    // ------------------------------------------------------------------------
    this.physics.add.overlap(bombs1, EnemyBullet, BulletCollide, null, this);
    this.physics.add.overlap(bombs2, EnemyBullet, BulletCollide, null, this);
    this.physics.add.overlap(bombs3, EnemyBullet, BulletCollide, null, this);
    this.physics.add.overlap(bombs4, EnemyBullet, BulletCollide, null, this);
    this.physics.add.overlap(bomb1s, EnemyBullet, BulletCollide, null, this);
    this.physics.add.overlap(bomb2s, EnemyBullet, BulletCollide, null, this);
    this.physics.add.overlap(bomb3s, EnemyBullet, BulletCollide, null, this);
    this.physics.add.overlap(bomb4s, EnemyBullet, BulletCollide, null, this);
    this.physics.add.overlap(S1s, EnemyBullet, BulletCollide, null, this);
    this.physics.add.overlap(S2s, EnemyBullet, BulletCollide, null, this);
    this.physics.add.overlap(S3s, EnemyBullet, BulletCollide, null, this);
    this.physics.add.overlap(S4s, EnemyBullet, BulletCollide, null, this);
    // ------------------------------------------------------------------------
    this.physics.add.overlap(mines, patrols, mineHitP, null, this);
    this.physics.add.overlap(mines, rocks, mineHitR, null, this);
    this.physics.add.overlap(mines, diamonds, mineHitD, null, this);
    // ------------------------------------------------------------------------
    this.physics.add.overlap(bombF, diamonds, fE, null, this);
    this.physics.add.overlap(bombF, patrols, fE, null, this);
    this.physics.add.overlap(bombF, rocks, fE, null, this);
    this.physics.add.overlap(bombF, mines, fE, null, this);
    this.physics.add.overlap(bombF, enemy, fE, null, this);
    // ------------------------------------------------------------------------
    this.physics.add.overlap(lazerbeam, diamonds, fb, null, this);
    this.physics.add.overlap(lazerbeam, patrols, fb, null, this);
    this.physics.add.overlap(lazerbeam, rocks, fb, null, this);
    this.physics.add.overlap(lazerbeam, mines, fb, null, this);
    this.physics.add.overlap(lazerbeam, enemy, fb, null, this);
    // ------------------------------------------------------------------------
    this.physics.add.overlap(player, HpShop, buyHP, null, this);
    this.physics.add.overlap(player, BombFShop, buyBOMB, null, this);
    // ------------------------------------------------------------------------
    this.physics.add.overlap(ResetZone, wall1, Restart, null, this);
    this.physics.add.overlap(ResetZone, Pit, Restart, null, this);
};
function IntervalClearer() {
    clearInterval
    clearTimeout
}
function update() {
    if (Reset == true) {
    }
    ShootingFunction();
    if (ShotReady == false) {
        ShotReady = true
        if (TriShotActive == false) {
            var Pew = this.sound.add('pew');
            Pew.play();
        } else if (TriShotActive == true) {
            var bigPEW = this.sound.add('pewpewpew');
            bigPEW.play();
        }
        setTimeout(function () {
            ShotTimer = true
        }, FireRate);
    }
    if (EnemyHPS == 0) {
        EnemyAlive == false;
    } else {
        EnemyAlive == true;
    }
    if (scapularActive == true) {
        addSoulHearts = true;
    }
    if (brimstoneActive == true) {
        playes = player.y - 30;
        playez = player.x - 50;
        if (Acess == true) {
            brimstoneCharge = this.add.text(playez, playes, 'Charge: 0', { fontSize: '16px', fill: '#000' });
        }
        setInterval(function () {
            brimstoneCharge.setVisible(false);
            brimstoneCharge.setActive(false);
        }, 1);
    }
    if (killsneeded == 0) {
        if (normalRoom == true) {
            spawnPickup();
            door = true;
            killsneeded = 6;
        } else {
            door = true;
            killsneeded = 6;
        }
    }
    if (helpme == true) {
        titleT.setVisible(false);
        this.physics.resume();
        spawn = true;
        helpme = false;
    }
    if (keyA.isDown) {
        player.setVelocityX(-250);
        player.anims.play('left', true);
    } else if (keyD.isDown) {
        player.setVelocityX(250);
        player.anims.play('right', true);
    } else if (keyS.isDown) {
        player.setVelocityY(250);
        player.anims.play('down', true);
    } else if (keyW.isDown) {
        player.setVelocityY(-250);
        player.anims.play('up', true);
    } else if (keyE.isDown) {
        if (currentBombs >= 1) {
            currentBombs -= 1;
            BombText.setText('Bombs: ' + currentBombs);
            var bombsF = bombF.create(player.x, player.y, 'activeBOMB');
            bombsF.setCollideWorldBounds(true);
        }
    } else {
        player.setVelocityX(0);
        player.setVelocityY(0);
        player.anims.play('turn');
        U = false;
        D = false;
        L = false;
        R = false;
    }
    if (killsLeft <= 0) {
        killsLeft = 6;
        currentLevel += 1;
        levelText.setText('Level: ' + currentLevel);
        killText.setText('KillsLeft: ' + killsLeft);
        return;
    } else {
    }
    if (currentHP > MaxHp) {
        currentHP--;
        HPText.setText('Current Hp: ' + currentHP);
    }
}