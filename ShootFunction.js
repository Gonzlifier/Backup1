function ShootingFunction() {
    if (SpectralActive == false) {
        if (ShotTimer == true) {
            if (cursors.left.isDown) {
                if (brimstoneActive == false) {
                    var leX = player.x;
                    var leY = player.y;
                    if (TriShotActive == false) {
                        bomb2z = bomb2s.create(leX, leY, 'bomb')
                        bomb2z.setCollideWorldBounds(true);
                        bomb2z.setVelocityX(Left);
                        bomb2z.body.onWorldBounds = true;
                        bomb2z.body.world.on('worldbounds', function (body) {
                            if (body.gameObject === this) {
                                this.disableBody(true, true)
                            }
                        }, bomb2z);
                        ShotReady = false;
                        ShotTimer = false;
                    } else if (TriShotActive == true) {
                        bomb2z = bomb2s.create(leX, leY, 'bomb');
                        bomb2 = bombs2.create(leX, leY, 'bomb');
                        bom2 = b2s.create(leX, leY, 'bomb');
                        bomb2z.setCollideWorldBounds(true);
                        bomb2z.setVelocityX(Left);
                        bomb2z.body.onWorldBounds = true;
                        bomb2z.body.world.on('worldbounds', function (body) {
                            if (body.gameObject === this) {
                                this.disableBody(true, true)
                            }
                        }, bomb2z);
                        bomb2.setCollideWorldBounds(true);
                        bomb2.setVelocityX(Left);
                        bomb2.setVelocityY(400);
                        bomb2.body.onWorldBounds = true;
                        bomb2.body.world.on('worldbounds', function (body) {
                            if (body.gameObject === this) {
                                this.disableBody(true, true)
                            }
                        }, bomb2);
                        bom2.setCollideWorldBounds(true);
                        bom2.setVelocityX(Left);
                        bom2.setVelocityY(-400);
                        bom2.body.onWorldBounds = true;
                        bom2.body.world.on('worldbounds', function (body) {
                            if (body.gameObject === this) {
                                this.disableBody(true, true)
                            }
                        }, bom2);
                    }
                    ShotReady = false;
                    ShotTimer = false;
                } else if (brimstoneActive == true) {
                    if (cursors.left.isDown) {
                        if (BrimCharge < 99) {
                            BrimCharge += 5;
                            brimstoneCharge.setText('Charge: ' + BrimCharge);
                        } else if (BrimCharge == 100) {
                            BrimCharge = 100;
                            brimstoneCharge.setText('Charge: ' + BrimCharge);
                            Acess = true;
                            BL = true;
                            BU = false;
                            BD = false;
                            BR = false;
                            LaserPrepared();
                        }
                    }
                }
            } else if (cursors.right.isDown) {
                if (brimstoneActive == false) {
                    var leX = player.x;
                    var leY = player.y;
                    if (TriShotActive == false) {
                        bomb1z = bomb1s.create(leX, leY, 'bomb')
                        bomb1z.setCollideWorldBounds(true);
                        bomb1z.setVelocityX(Right);
                        bomb1z.body.onWorldBounds = true;
                        bomb1z.body.world.on('worldbounds', function (body) {
                            if (body.gameObject === this) {
                                this.disableBody(true, true)
                            }
                        }, bomb1z);
                        ShotReady = false;
                        ShotTimer = false;
                    } else if (TriShotActive == true) {
                        bomb1z = bomb1s.create(leX, leY, 'bomb');
                        bomb1 = bombs1.create(leX, leY, 'bomb');
                        bom1 = b1s.create(leX, leY, 'bomb');
                        bomb1z.setCollideWorldBounds(true);
                        bomb1z.setVelocityX(Right);
                        bomb1z.body.onWorldBounds = true;
                        bomb1z.body.world.on('worldbounds', function (body) {
                            if (body.gameObject === this) {
                                this.disableBody(true, true)
                            }
                        }, bomb1z);
                        bomb1.setCollideWorldBounds(true);
                        bomb1.setVelocityX(Right);
                        bomb1.setVelocityY(400);
                        bomb1.body.onWorldBounds = true;
                        bomb1.body.world.on('worldbounds', function (body) {
                            if (body.gameObject === this) {
                                this.disableBody(true, true)
                            }
                        }, bomb1);
                        bom1.setCollideWorldBounds(true);
                        bom1.setVelocityX(Right);
                        bom1.setVelocityY(-400);
                        bom1.body.onWorldBounds = true;
                        bom1.body.world.on('worldbounds', function (body) {
                            if (body.gameObject === this) {
                                this.disableBody(true, true)
                            }
                        }, bom1);
                    }
                    ShotReady = false;
                    ShotTimer = false;
                } else if (brimstoneActive == true) {
                    if (cursors.right.isDown) {
                        if (BrimCharge < 99) {
                            BrimCharge += 5;
                            brimstoneCharge.setText('Charge: ' + BrimCharge);
                        } else if (BrimCharge == 100) {
                            BrimCharge = 100;
                            brimstoneCharge.setText('Charge: ' + BrimCharge);
                            Acess = true;
                            BR = true;
                            BU = false;
                            BD = false;
                            BL = false;
                            LaserPrepared();
                        }
                    }
                }
            }
            else if (cursors.up.isDown) {
                if (brimstoneActive == false) {
                    var leX = player.x;
                    var leY = player.y;
                    if (TriShotActive == false) {
                        bomb3z = bomb3s.create(leX, leY, 'bomb');
                        bomb3z.setCollideWorldBounds(true);
                        bomb3z.setVelocityY(Up);
                        bomb3z.body.onWorldBounds = true;
                        bomb3z.body.world.on('worldbounds', function (body) {
                            if (body.gameObject === this) {
                                this.disableBody(true, true)
                            }
                        }, bomb3z);
                        ShotReady = false;
                        ShotTimer = false;
                    } else if (TriShotActive == true) {
                        bomb3z = bomb3s.create(leX, leY, 'bomb');
                        bomb3 = bombs3.create(leX, leY, 'bomb');
                        bom3 = b3s.create(leX, leY, 'bomb');
                        bomb3z.setCollideWorldBounds(true);
                        bomb3z.setVelocityY(Up);
                        bomb3z.body.onWorldBounds = true;
                        bomb3z.body.world.on('worldbounds', function (body) {
                            if (body.gameObject === this) {
                                this.disableBody(true, true)
                            }
                        }, bomb3z);
                        bomb3.setCollideWorldBounds(true);
                        bomb3.setVelocityY(Up);
                        bomb3.setVelocityX(400);
                        bomb3.body.onWorldBounds = true;
                        bomb3.body.world.on('worldbounds', function (body) {
                            if (body.gameObject === this) {
                                this.disableBody(true, true)
                            }
                        }, bomb3);
                        bom3.setCollideWorldBounds(true);
                        bom3.setVelocityY(Up);
                        bom3.setVelocityX(-400);
                        bom3.body.onWorldBounds = true;
                        bom3.body.world.on('worldbounds', function (body) {
                            if (body.gameObject === this) {
                                this.disableBody(true, true)
                            }
                        }, bom3);
                    }
                    ShotReady = false;
                    ShotTimer = false;
                } else if (brimstoneActive == true) {
                    if (cursors.up.isDown) {
                        if (BrimCharge < 99) {
                            BrimCharge += 5;
                            brimstoneCharge.setText('Charge: ' + BrimCharge);
                        } else if (BrimCharge == 100) {
                            BrimCharge = 100;
                            brimstoneCharge.setText('Charge: ' + BrimCharge);
                            Acess = true;
                            BU = true;
                            BD = false;
                            BL = false;
                            BR = false;
                            LaserPrepared();
                        }
                    }
                }
            }
            else if (cursors.down.isDown) {
                if (brimstoneActive == false) {
                    var leX = player.x;
                    var leY = player.y;
                    if (TriShotActive == false) {
                        bomb4z = bomb4s.create(leX, leY, 'bomb');
                        bomb4z.setCollideWorldBounds(true);
                        bomb4z.setVelocityY(Down);
                        bomb4z.body.onWorldBounds = true;
                        bomb4z.body.world.on('worldbounds', function (body) {
                            if (body.gameObject === this) {
                                this.disableBody(true, true)
                            }
                        }, bomb4z);
                        ShotReady = false;
                        ShotTimer = false;
                    } else if (TriShotActive == true) {
                        bomb4z = bomb4s.create(leX, leY, 'bomb');
                        bomb4 = bombs4.create(leX, leY, 'bomb');
                        bom4 = b4s.create(leX, leY, 'bomb');
                        bomb4z.setCollideWorldBounds(true);
                        bomb4z.setVelocityY(Down);
                        bomb4z.body.onWorldBounds = true;
                        bomb4z.body.world.on('worldbounds', function (body) {
                            if (body.gameObject === this) {
                                this.disableBody(true, true)
                            }
                        }, bomb4z);
                        bomb4.setCollideWorldBounds(true);
                        bomb4.setVelocityY(Down);
                        bomb4.setVelocityX(400);
                        bomb4.body.onWorldBounds = true;
                        bom4.setCollideWorldBounds(true);
                        bom4.setVelocityY(Down);
                        bom4.setVelocityX(-400);
                        bom4.body.onWorldBounds = true;
                        bom4.body.world.on('worldbounds', function (body) {
                            if (body.gameObject === this) {
                                this.disableBody(true, true)
                            }
                        }, bom4);
                    }
                    ShotReady = false;
                    ShotTimer = false;
                } else if (brimstoneActive == true) {
                    if (cursors.down.isDown) {
                        if (BrimCharge < 99) {
                            BrimCharge += 5;
                            brimstoneCharge.setText('Charge: ' + BrimCharge);
                        } else if (BrimCharge == 100) {
                            BrimCharge = 100;
                            brimstoneCharge.setText('Charge: ' + BrimCharge);
                            Acess = true;
                            beamDown = true;
                            BD = true;
                            BU = false;
                            BL = false;
                            BR = false;
                            LaserPrepared()
                        }
                    }
                }
            } else {
                BrimCharge = 0;
                Acess = true;
                if (beamDown == true) {
                    beamActive = true;
                    LaserFired();
                }
            }
        }
        if (brimstonelaser == true) {
            if (BR == true) {
                lazerbeams = lazerbeam.create(player.x + 190, player.y, 'Blaser')
                lazerbeams
                setInterval(function () {
                    lazerbeams.setVisible(false);
                    lazerbeams.setActive(false);
                    switch1 = true;
                }, 1);
            } else if (BL == true) {
                lazerbeams = lazerbeam.create(player.x - 190, player.y, 'Blaser')
                lazerbeams
                setInterval(function () {
                    lazerbeams.setVisible(false);
                    lazerbeams.setActive(false);
                    switch1 = true;
                }, 1);
            } else if (BU == true) {
                lazerbeams = lazerbeam.create(player.x, player.y - 190, 'Blaser')
                lazerbeams
                lazerbeams.angle += 90;
                setInterval(function () {
                    lazerbeams.setVisible(false);
                    lazerbeams.setActive(false);
                    switch1 = true;
                }, 1);
            } else if (BD == true) {
                lazerbeams = lazerbeam.create(player.x, player.y + 190, 'Blaser')
                lazerbeams
                lazerbeams.angle += 90;
                setInterval(function () {
                    lazerbeams.setVisible(false);
                    lazerbeams.setActive(false);
                    switch1 = true;
                }, 1);
            }

        } else {
        }
    } else if (SpectralActive == true) {
        SpectralShooting();
    }
}
//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------
function SpectralShooting() {
    if (ShotTimer == true) {
        if (cursors.left.isDown) {
            if (brimstoneActive == false) {
                var leX = player.x;
                var leY = player.y;
                if (TriShotActive == false) {
                    Spec2z = Spec2s.create(leX, leY, 'Spec')
                    Spec2z.setCollideWorldBounds(true);
                    Spec2z.setVelocityX(Left);
                    Spec2z.body.onWorldBounds = true;
                    Spec2z.body.world.on('worldbounds', function (body) {
                        if (body.gameObject === this) {
                            this.disableBody(true, true)
                        }
                    }, Spec2z);
                    ShotReady = false;
                    ShotTimer = false;
                } else if (TriShotActive == true) {
                    Spec2z = Spec2s.create(leX, leY, 'Spec');
                    Spec2 = Specs2.create(leX, leY, 'Spec');
                    Spe2 = b2s.create(leX, leY, 'Spec');
                    Spec2z.setCollideWorldBounds(true);
                    Spec2z.setVelocityX(Left);
                    Spec2z.body.onWorldBounds = true;
                    Spec2z.body.world.on('worldbounds', function (body) {
                        if (body.gameObject === this) {
                            this.disableBody(true, true)
                        }
                    }, Spec2z);
                    Spec2.setCollideWorldBounds(true);
                    Spec2.setVelocityX(Left);
                    Spec2.setVelocityY(400);
                    Spec2.body.onWorldBounds = true;
                    Spec2.body.world.on('worldbounds', function (body) {
                        if (body.gameObject === this) {
                            this.disableBody(true, true)
                        }
                    }, Spec2);
                    Spe2.setCollideWorldBounds(true);
                    Spe2.setVelocityX(Left);
                    Spe2.setVelocityY(-400);
                    Spe2.body.onWorldBounds = true;
                    Spe2.body.world.on('worldbounds', function (body) {
                        if (body.gameObject === this) {
                            this.disableBody(true, true)
                        }
                    }, Spe2);
                }
                ShotReady = false;
                ShotTimer = false;
            } else if (brimstoneActive == true) {
                if (cursors.left.isDown) {
                    if (BrimCharge < 99) {
                        BrimCharge += 5;
                        brimstoneCharge.setText('Charge: ' + BrimCharge);
                    } else if (BrimCharge == 100) {
                        BrimCharge = 100;
                        brimstoneCharge.setText('Charge: ' + BrimCharge);
                        Acess = true;
                        BL = true;
                        BU = false;
                        BD = false;
                        BR = false;
                        LaserPrepared();
                    }
                }
            }
        } else if (cursors.right.isDown) {
            if (brimstoneActive == false) {
                var leX = player.x;
                var leY = player.y;
                if (TriShotActive == false) {
                    Spec1z = Spec1s.create(leX, leY, 'Spec')
                    Spec1z.setCollideWorldBounds(true);
                    Spec1z.setVelocityX(Right);
                    Spec1z.body.onWorldBounds = true;
                    Spec1z.body.world.on('worldbounds', function (body) {
                        if (body.gameObject === this) {
                            this.disableBody(true, true)
                        }
                    }, Spec1z);
                    ShotReady = false;
                    ShotTimer = false;
                } else if (TriShotActive == true) {
                    Spec1z = Spec1s.create(leX, leY, 'Spec');
                    Spec1 = Specs1.create(leX, leY, 'Spec');
                    Spe1 = b1s.create(leX, leY, 'Spec');
                    Spec1z.setCollideWorldBounds(true);
                    Spec1z.setVelocityX(Right);
                    Spec1z.body.onWorldBounds = true;
                    Spec1z.body.world.on('worldbounds', function (body) {
                        if (body.gameObject === this) {
                            this.disableBody(true, true)
                        }
                    }, Spec1z);
                    Spec1.setCollideWorldBounds(true);
                    Spec1.setVelocityX(Right);
                    Spec1.setVelocityY(400);
                    Spec1.body.onWorldBounds = true;
                    Spec1.body.world.on('worldbounds', function (body) {
                        if (body.gameObject === this) {
                            this.disableBody(true, true)
                        }
                    }, Spec1);
                    Spe1.setCollideWorldBounds(true);
                    Spe1.setVelocityX(Right);
                    Spe1.setVelocityY(-400);
                    Spe1.body.onWorldBounds = true;
                    Spe1.body.world.on('worldbounds', function (body) {
                        if (body.gameObject === this) {
                            this.disableBody(true, true)
                        }
                    }, Spe1);
                }
                ShotReady = false;
                ShotTimer = false;
            } else if (brimstoneActive == true) {
                if (cursors.right.isDown) {
                    if (BrimCharge < 99) {
                        BrimCharge += 5;
                        brimstoneCharge.setText('Charge: ' + BrimCharge);
                    } else if (BrimCharge == 100) {
                        BrimCharge = 100;
                        brimstoneCharge.setText('Charge: ' + BrimCharge);
                        Acess = true;
                        BR = true;
                        BU = false;
                        BD = false;
                        BL = false;
                        LaserPrepared();
                    }
                }
            }
        }
        else if (cursors.up.isDown) {
            if (brimstoneActive == false) {
                var leX = player.x;
                var leY = player.y;
                if (TriShotActive == false) {
                    Spec3z = Spec3s.create(leX, leY, 'Spec');
                    Spec3z.setCollideWorldBounds(true);
                    Spec3z.setVelocityY(Up);
                    Spec3z.body.onWorldBounds = true;
                    Spec3z.body.world.on('worldbounds', function (body) {
                        if (body.gameObject === this) {
                            this.disableBody(true, true)
                        }
                    }, Spec3z);
                    ShotReady = false;
                    ShotTimer = false;
                } else if (TriShotActive == true) {
                    Spec3z = Spec3s.create(leX, leY, 'Spec');
                    Spec3 = Specs3.create(leX, leY, 'Spec');
                    Spe3 = b3s.create(leX, leY, 'Spec');
                    Spec3z.setCollideWorldBounds(true);
                    Spec3z.setVelocityY(Up);
                    Spec3z.body.onWorldBounds = true;
                    Spec3z.body.world.on('worldbounds', function (body) {
                        if (body.gameObject === this) {
                            this.disableBody(true, true)
                        }
                    }, Spec3z);
                    Spec3.setCollideWorldBounds(true);
                    Spec3.setVelocityY(Up);
                    Spec3.setVelocityX(400);
                    Spec3.body.onWorldBounds = true;
                    Spec3.body.world.on('worldbounds', function (body) {
                        if (body.gameObject === this) {
                            this.disableBody(true, true)
                        }
                    }, Spec3);
                    Spe3.setCollideWorldBounds(true);
                    Spe3.setVelocityY(Up);
                    Spe3.setVelocityX(-400);
                    Spe3.body.onWorldBounds = true;
                    Spe3.body.world.on('worldbounds', function (body) {
                        if (body.gameObject === this) {
                            this.disableBody(true, true)
                        }
                    }, Spe3);
                }
                ShotReady = false;
                ShotTimer = false;
            } else if (brimstoneActive == true) {
                if (cursors.up.isDown) {
                    if (BrimCharge < 99) {
                        BrimCharge += 5;
                        brimstoneCharge.setText('Charge: ' + BrimCharge);
                    } else if (BrimCharge == 100) {
                        BrimCharge = 100;
                        brimstoneCharge.setText('Charge: ' + BrimCharge);
                        Acess = true;
                        BU = true;
                        BD = false;
                        BL = false;
                        BR = false;
                        LaserPrepared();
                    }
                }
            }
        }
        else if (cursors.down.isDown) {
            if (brimstoneActive == false) {
                var leX = player.x;
                var leY = player.y;
                if (TriShotActive == false) {
                    Spec4z = Spec4s.create(leX, leY, 'Spec');
                    Spec4z.setCollideWorldBounds(true);
                    Spec4z.setVelocityY(Down);
                    Spec4z.body.onWorldBounds = true;
                    Spec4z.body.world.on('worldbounds', function (body) {
                        if (body.gameObject === this) {
                            this.disableBody(true, true)
                        }
                    }, Spec4z);
                    ShotReady = false;
                    ShotTimer = false;
                } else if (TriShotActive == true) {
                    Spec4z = Spec4s.create(leX, leY, 'Spec');
                    Spec4 = Specs4.create(leX, leY, 'Spec');
                    Spe4 = b4s.create(leX, leY, 'Spec');
                    Spec4z.setCollideWorldBounds(true);
                    Spec4z.setVelocityY(Down);
                    Spec4z.body.onWorldBounds = true;
                    Spec4z.body.world.on('worldbounds', function (body) {
                        if (body.gameObject === this) {
                            this.disableBody(true, true)
                        }
                    }, Spec4z);
                    Spec4.setCollideWorldBounds(true);
                    Spec4.setVelocityY(Down);
                    Spec4.setVelocityX(400);
                    Spec4.body.onWorldBounds = true;
                    Spe4.setCollideWorldBounds(true);
                    Spe4.setVelocityY(Down);
                    Spe4.setVelocityX(-400);
                    Spe4.body.onWorldBounds = true;
                    Spe4.body.world.on('worldbounds', function (body) {
                        if (body.gameObject === this) {
                            this.disableBody(true, true)
                        }
                    }, Spe4);
                }
                ShotReady = false;
                ShotTimer = false;
            } else if (brimstoneActive == true) {
                if (cursors.down.isDown) {
                    if (BrimCharge < 99) {
                        BrimCharge += 5;
                        brimstoneCharge.setText('Charge: ' + BrimCharge);
                    } else if (BrimCharge == 100) {
                        BrimCharge = 100;
                        brimstoneCharge.setText('Charge: ' + BrimCharge);
                        Acess = true;
                        beamDown = true;
                        BD = true;
                        BU = false;
                        BL = false;
                        BR = false;
                        LaserPrepared()
                    }
                }
            }
        } else {
            BrimCharge = 0;
            Acess = true;
            if (beamDown == true) {
                beamActive = true;
                LaserFired();
            }
        }
    }
    if (brimstonelaser == true) {
        if (BR == true) {
            lazerbeams = lazerbeam.create(player.x + 190, player.y, 'Blaser')
            lazerbeams
            setInterval(function () {
                lazerbeams.setVisible(false);
                lazerbeams.setActive(false);
                switch1 = true;
            }, 1);
        } else if (BL == true) {
            lazerbeams = lazerbeam.create(player.x - 190, player.y, 'Blaser')
            lazerbeams
            setInterval(function () {
                lazerbeams.setVisible(false);
                lazerbeams.setActive(false);
                switch1 = true;
            }, 1);
        } else if (BU == true) {
            lazerbeams = lazerbeam.create(player.x, player.y - 190, 'Blaser')
            lazerbeams
            lazerbeams.angle += 90;
            setInterval(function () {
                lazerbeams.setVisible(false);
                lazerbeams.setActive(false);
                switch1 = true;
            }, 1);
        } else if (BD == true) {
            lazerbeams = lazerbeam.create(player.x, player.y + 190, 'Blaser')
            lazerbeams
            lazerbeams.angle += 90;
            setInterval(function () {
                lazerbeams.setVisible(false);
                lazerbeams.setActive(false);
                switch1 = true;
            }, 1);
        }

    } else {
    }
}