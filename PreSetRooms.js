function PreSetRoom() {
    var GenerateRoom = Math.round(Math.random() * 3)
    if (GenerateRoom == 0) {
        console.log('All Rounder');
        wall1.create(200, 250, 'wall');
        wall1.create(300, 250, 'wall');
        wall1.angle = 90;
        Fly();
        Gunner();
        Basic();
        Fast();
        Tank();
        Basic();
    } else if (GenerateRoom == 1) {
        console.log('Fast Tanks');
        wall1.create(300, 250, 'wall');
        wall1.create(500, 250, 'wall');
        Pit.create(400, 500, 'pit');
        Tank();
        Tank();
        Tank();
        Fast();
        Fast();
        Gunner();
    } else if (GenerateRoom == 2) {
        console.log('pew pew');
        wall1.create(300, 450, 'wall');
        wall1.create(200, 350, 'wall');
        wall1.create(100, 250, 'wall');
        Pit.create(600, 200, 'pit');
        Gunner();
        FlyGunner();
        Tank();
        Mine();
        Fly();
        Gunner();
    } else if (GenerateRoom == 3) {
        console.log('Random Room');
        wall1.create(300, 250, 'wall');
        wall1.create(300, 350, 'wall');
        Pit.create(400, 500, 'pit');
        Pit.create(300, 400, 'pit');
        Pit.create(200, 500, 'pit');
        Pit.create(700, 200, 'pit');
        RandomEnemy();
        RandomEnemy();
        RandomEnemy();
        RandomEnemy();
        RandomEnemy();
        RandomEnemy();
    }
}