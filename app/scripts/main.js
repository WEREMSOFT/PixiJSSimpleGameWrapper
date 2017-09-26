/**
 * Created by pabloweremczuk on 9/15/17.
 */
var PIXI = require('pixi.js');
var ResourceLoader = require('./gameSpecificObjects/resourceHandling/resourceLoader.js');
var App = require('./core/App');
var MovingBackground = require('./gameSpecificObjects/background/MovingBackground');
var WheelBox = require('./gameSpecificObjects/wheelBox/WheelBox');
var GameEvents = require('./gameSpecificObjects/events/GameEvents');
var PixiSpine = require('pixi-spine');
var Stats = require('stats.js');
var Dragon = require('./gameSpecificObjects/characters/Dragon');
var Coin = require('./gameSpecificObjects/characters/Coin');
var Penguin = require('./gameSpecificObjects/characters/Penguin');
var SpinButon = require('./gameSpecificObjects/ui/SpinButton');
var GameEvents = require('./gameSpecificObjects/events/GameEvents');
var PsychodelicBackground = require('./gameSpecificObjects/background/PsychodelicBackground');

global.app = new App();

ResourceLoader(global.app.PIXI, resourcesReady);

global.stats = new Stats();


document.body.appendChild( stats.domElement );
global.stats.domElement.style.position = "absolute";
global.stats.domElement.style.top = "0px";

function resourcesReady() {
    var animatedSprite = null;


    var backGround = new PsychodelicBackground();
    global.app.addChild(backGround);

    var pg = new Dragon();
    pg.angle = -10;

    pg.x = 150;
    pg.y = 400;

    global.app.addChild(pg);

    pg = new Dragon();
    pg.angle = -10;

    pg.scaleX *= -1;

    pg.x = 1150;
    pg.y = 400;

    global.app.addChild(pg);

    var wheelBox = new WheelBox();

    global.app.addChild(wheelBox);


    //var squareWidth = new Dragon().width;



    // for(var j = 0; j < 20; j++) {
    //     for (var i = 0; i < 30; i++) {
    //         var dragon = /*( i + j ) % 2 == 0?new Dragon():*/ new Penguin();
    //         dragon.sprite.y = squareWidth  * j;
    //         dragon.sprite.x = squareWidth  * i;
    //         global.app.addChild(dragon);
    //     }
    // }

    var spinButton = new SpinButon();
    spinButton.x = 900;
    spinButton.y = 650;
    global.app.gameEventHandler.on(GameEvents.EVT_BUTON_SPIN_CLICK, onSpinButtonClick, this);
    global.app.addChild(spinButton);

    global.app.startUpdate();

    //Render the stage to see the animation
    global.app.renderer.render(global.app.stage);
}

function onSpinButtonClick(evt){
    console.log('spin clicked!!!');
}
