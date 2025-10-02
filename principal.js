var juego = new Phaser.Game(370, 550, Phaser.CANVAS, 'juego2d');
var tecladoArriba;
var tecladoAbajo;
var tecladoDerecha;
var tecladoIzquierda;
var persona;
var fondo;

var estadoPrincipal = {
    preload: function () {
        juego.load.image('fondo','img/fondo.jpg');
        juego.load.spritesheet('persona','img/personaje1.png', 50, 64);
    },
    create: function () {
        fondo = juego.add.tileSprite(0, 0, 370, 550, 'fondo');
        persona = juego.add.sprite(juego.width / 2, juego.height / 2, 'persona');
        persona.anchor.setTo(0.5);
        persona.animations.add('arriba', [12,13,14,15], 10, true);
        persona.animations.add('abajo', [0,1,2,3], 10, true);
        persona.animations.add('derecha', [8,9,10,11], 10, true);
        persona.animations.add('izquierda', [4,5,6,7], 10, true);

        tecladoArriba = juego.input.keyboard.addKey(Phaser.Keyboard.UP);
        tecladoAbajo = juego.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        tecladoDerecha = juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        tecladoIzquierda = juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    },
    update: function () {
        fondo.tilePosition.x -= 1;

        if (tecladoArriba.isDown) {
            persona.position.y -= 2;
            persona.animations.play('arriba');
        } else if (tecladoAbajo.isDown) {
            persona.position.y += 2;
            persona.animations.play('abajo');
        } else if (tecladoDerecha.isDown) {
            persona.position.x += 2;
            persona.animations.play('derecha');
        } else if (tecladoIzquierda.isDown) {
            persona.position.x -= 2;
            persona.animations.play('izquierda');
        } else {
            persona.animations.stop();
        }
    }
};

juego.state.add('principal', estadoPrincipal);
juego.state.start('principal');
