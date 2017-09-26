/**
 * Created by pabloweremczuk on 9/16/17.
 */
var inherits = require('inherits');
var GameObject = require('../../core/GameObject');
var GameEvents = require('../events/GameEvents');

var WheelBox = function() {
    GameObject.call(this);
    this.wheelSimbols = [];

    var mask = new global.app.PIXI.Sprite(global.app.PIXI.loader.resources["assets/ReelMask.png"].texture);

    this.state = this.STATE_IDLE;

    this.sprite.addChild(mask);
    for(let j = 0; j < 5; j++){
        this.wheelSimbols[j] = [];
        for(let i = 0; i < 5; i++){
            this.wheelSimbols[j].push(new global.app.PIXI.Sprite(global.app.PIXI.loader.resources["assets/spinObjects/spinObj_0" + i + ".png"].texture));
            this.wheelSimbols[j][i].y = this.wheelSimbols[j][i].height * i;
            this.wheelSimbols[j][i].x = 227 + j * this.wheelSimbols[j][i].height;
            this.sprite.addChild(this.wheelSimbols[j][i]);
        }
    }
    this.sprite.mask = mask;
    this.speed = 20;
    global.app.gameEventHandler.on(GameEvents.EVT_BUTON_SPIN_CLICK, this.onSpinButtonClick, this);
};

inherits(WheelBox, GameObject);

WheelBox.prototype.speed = null;

// This are the symbols that are in the wheelStripes.
WheelBox.prototype.wheelSimbols = null;

WheelBox.prototype.onSpinButtonClick = function(){
  this.speed *= -1;
};

// States of the wheelbox
WheelBox.prototype.STATE_IDLE = 0;
WheelBox.prototype.STATE_SPINNING = 1;
WheelBox.prototype.state = null;

WheelBox.prototype.update = function(){
    GameObject.prototype.update.apply(this);



    for(let j = 0; j < 5; j++) {
        for (let i = 0; i < this.wheelSimbols[j].length; i++) {
            this.wheelSimbols[j][i].y -= this.speed;

            if (this.wheelSimbols[j][i].y < -this.wheelSimbols[j][i].height)
                this.wheelSimbols[j][i].y = this.wheelSimbols[j][i].height * (this.wheelSimbols[j].length - 1);

            if (this.wheelSimbols[j][i].y > this.wheelSimbols[j][i].height * (this.wheelSimbols[j].length - 1))
                this.wheelSimbols[j][i].y = -this.wheelSimbols[j][i].height
        }
    }
};








module.exports = WheelBox;
