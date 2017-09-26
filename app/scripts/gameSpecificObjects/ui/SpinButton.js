/**
 * Created by pabloweremczuk on 9/19/17.
 */
var GameEvents = require('../events/GameEvents');
var GameObject = require('../../core/GameObject');
var inherits = require('inherits');

var SpinButton = function () {

    this.textureButton = global.app.PIXI.loader.resources["assets/button/button.png"].texture;
    this.textureButtonDown = global.app.PIXI.loader.resources["assets/button/buttonDown.png"].texture;
    this.textureButtonOver = global.app.PIXI.loader.resources["assets/button/buttonOver.png"].texture;

    var button = new global.app.PIXI.Sprite(this.textureButton);

    button.interactive = true;
    button.buttonMode = true;
    button.anchor.set(0.5);

    GameObject.call(this, button);

    this.sprite.on('pointerdown', this.onButtonDown, this)
        .on('pointerup', this.onButtonUp, this)
        .on('pointerupoutside', this.onButtonUp, this)
        .on('pointerover', this.onButtonOver, this)
        .on('pointerout', this.onButtonOut, this);

};

inherits(SpinButton, GameObject);

SpinButton.prototype.textureButton = null;
SpinButton.prototype.textureButtonDown = null;
SpinButton.prototype.textureButtonOver = null;

SpinButton.prototype.onButtonDown = function(){
    global.app.gameEventHandler.emit(GameEvents.EVT_BUTON_SPIN_CLICK);
    this.sprite.isdown = true;
    this.sprite.texture = this.textureButtonDown;
    this.sprite.alpha = 1;
};

SpinButton.prototype.onButtonUp = function() {
    this.sprite.isdown = false;
    if (this.sprite.isOver) {
        this.sprite.texture = this.textureButtonOver;
    }
    else {
        this.sprite.texture = this.textureButton;
    }
};

SpinButton.prototype.onButtonOver = function() {
    this.sprite.isOver = true;
    if (this.sprite.isdown) {
        return;
    }
    this.sprite.texture = this.textureButtonOver;
};

SpinButton.prototype.onButtonOut = function() {
    this.sprite.isOver = false;
    if (this.sprite.isdown) {
        return;
    }
    this.sprite.texture = this.textureButton;
};

module.exports = SpinButton;