function door1Enter(player, Door1E) {
    if (Entered == true) {
        newRoom()
        Entered = false;
    }
}
function door2Enter(player, Door2E) {
    if (Entered == true) {
        newRoom()
        Entered = false;
    }
}
function door3Enter(player, Door3E) {
    if (Entered == true) {
        newRoom()
        Entered = false;
    }
}
function door4Enter(player, Door4E) {
    if (Entered == true) {
        newRoom()
        Entered = false;
    }
}
function newRoom() {
    var RandomRoom = Math.round(Math.random() * 10)
    waveAt75 = false;
    waveAt50 = false;
    waveAt25 = false;
    if (addSoulHearts == true) {
        if (currentHP == 1) {
            currentSouls++;
            SoulText.setText('Soul Hearts: ' + currentSouls)
        }
    }
    if (Entered == true) {
        if (RandomRoom <= 7) {
            normalRoom = true;
            console.log('Regular Room!');
            RoomReset();
            setTimeout(function() {
                PreSetRoom();
            }, 100);
            BossChance++;
        } else if (RandomRoom == 8) {
            if (getTroom == true) {
                normalRoom = false;
                RoomReset();
                setTimeout(function() {
                    treasureRoom();
                }, 100);
                console.log('Treasure Room!');
                getTroom = false;
                BossChance++;
            } else if (getTroom == false) {
                normalRoom = true;
                console.log('Already got treasure!');
                RoomReset();
                setTimeout(function() {
                    PreSetRoom();
                }, 100);
                BossChance++;
            }
        } else if (RandomRoom == 9) {
            normalRoom = false;
            RoomReset();
            setTimeout(function() {
                shopRoom();
            }, 100);
            console.log('Shop Room!');
            BossChance++;
        } else if (RandomRoom == 10) {
            if (BossChance > 3) {
                RoomReset();
                setTimeout(function() {
                    BossRoom();
                }, 100);
                console.log('Boss TIME!');
            } else {
                normalRoom = true;
                console.log('Too Early for a Boss!');
                RoomReset();
                setTimeout(function() {
                    PreSetRoom();
                }, 100);
                BossChance++;
            }
        }
    }
}
function door1Leave(player, Door1L) {
    if (door == true) {
        Entered = true;
        player.x = 400;
        player.y = 550;
        door = false;
    }
}
function door2Leave(player, Door2L) {
    if (door == true) {
        Entered = true;
        player.x = 30;
        player.y = 300;
        door = false;
    }
}
function door3Leave(player, Door3L) {
    if (door == true) {
        Entered = true;
        player.x = 400;
        player.y = 80;
        door = false;
    }
}
function door4Leave(player, Door4L) {
    if (door == true) {
        Entered = true;
        player.x = 750;
        player.y = 300;
        door = false;
    }
}
//-----------------------------------------------------------
function treasureRoom() {
    killsLeft -= 6;
    killsneeded -= 6;
    killText.setText('KillsLeft: ' + killsLeft);
    var noomber = Math.round(Math.random() * 6);
    if (noomber == 0) {
        brimstone.create(400, 300, 'peper');
    } else if (noomber == 1) {
        breakfast.create(400, 300, 'breakfast');
    } else if (noomber == 2) {
        quarter.create(400, 300, 'quarter');
    } else if (noomber == 3) {
        heart.create(400, 300, 'heart');
    } else if (noomber == 4) {
        pact.create(400, 300, 'pact');
    } else if (noomber == 5) {
        scapular.create(400, 300, 'scapular');
    } else if (noomber == 6) {
        TriShot.create(400, 300, 'tri-shot');
    }
}
function shopRoom() {
    spawnHP();
    spawnBOMB();
    killsLeft -= 6;
    killsneeded -= 6;
    killText.setText('KillsLeft: ' + killsLeft);
}
function BossRoom() {
    FloorBoss();
    killsLeft += 10000;
    killsneeded += 10000;
    killText.setText('KillsLeft: ' + killsLeft);
}
function RoomReset() {
    ResetZone.create(400, 300, 'space')
    setTimeout(function () {
        player.setDepth(1)
        ResetZone.setActive(false).setVisible(false);
        console.log('delete zone bye bye')
    }, 10);
}