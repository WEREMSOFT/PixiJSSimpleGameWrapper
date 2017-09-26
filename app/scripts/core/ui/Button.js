/**
 * Created by pabloweremczuk on 9/26/17.
 */

var GameObject = require('../GameObject');
var inherits = require('inherits');

/**
 * Represents a button, it needs the textures to display in order to react to the mouse and the event to trigger in
 * the general message system.
 * @constructor
 * @param {Texture} pTextureNormal - The texture used when the button is in it's resting state.
 * @param {Texture} pTextureButtonDown - The texture used when the button clicked or touched, but not released.
 * @param {Texture} pTextureButtonOver - The texture used when the button over by the mouse pointer(not used in mobile).
 * @param {string} pEventDispatchedOnClick - The event to dispatch when the button is clicked.
 */
var Button = function (pTextureNormal, pTextureButtonDown, pTextureButtonOver, pEventDispatchedOnClick) {

    this.textureButton = pTextureNormal;
    this.textureButtonDown = pTextureButtonDown;
    this.textureButtonOver = pTextureButtonOver;

    this.eventToTriggerOnClick = pEventDispatchedOnClick;

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

inherits(Button, GameObject);

Button.prototype.textureButton = null;
Button.prototype.textureButtonDown = null;
Button.prototype.textureButtonOver = null;

Button.prototype.eventToTriggerOnClick = null;

Button.prototype.onButtonDown = function(){
    global.app.gameEventHandler.emit(this.eventToTriggerOnClick);
    this.sprite.isdown = true;
    this.sprite.texture = this.textureButtonDown;
    this.sprite.alpha = 1;
};

Button.prototype.onButtonUp = function() {
    this.sprite.isdown = false;
    if (this.sprite.isOver) {
        this.sprite.texture = this.textureButtonOver;
    }
    else {
        this.sprite.texture = this.textureButton;
    }
};

Button.prototype.onButtonOver = function() {
    this.sprite.isOver = true;
    if (this.sprite.isdown) {
        return;
    }
    this.sprite.texture = this.textureButtonOver;
};

Button.prototype.onButtonOut = function() {
    this.sprite.isOver = false;
    if (this.sprite.isdown) {
        return;
    }
    this.sprite.texture = this.textureButton;
};

module.exports = Button;