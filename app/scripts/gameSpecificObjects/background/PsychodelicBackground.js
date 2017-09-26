/**
 * Created by pabloweremczuk on 9/25/17.
 */

var GameObject = require('../../core/GameObject');
var inherits = require('inherits');

var PsychodelicBackground = function(pSprite){
    GameObject.call(this, new global.app.PIXI.Sprite(global.app.PIXI.loader.resources["assets/GameBackground0.jpg"].texture));


    // create two render textures... these dynamic textures will be used to draw the scene into itself
    this.renderTexture = global.app.PIXI.RenderTexture.create(
        global.app.renderer.width,
        global.app.renderer.height
    );
    this.renderTexture2 = global.app.PIXI.RenderTexture.create(
        global.app.renderer.width,
        global.app.renderer.height
    );
    this.currentTexture = this.renderTexture;

    // create a new sprite that uses the render texture we created above
    this.outputSprite = new global.app.PIXI.Sprite(this.currentTexture);
    this.sprite.addChild(this.outputSprite);
    // align the sprite
    this.outputSprite.x = global.app.renderer.width / 2;
    this.outputSprite.y = global.app.renderer.height / 2;
    this.outputSprite.anchor.set(0.5);
    this.count = 0;
};

inherits(PsychodelicBackground, GameObject);

PsychodelicBackground.prototype.currentTexture = null;
PsychodelicBackground.prototype.renderTexture = null;
PsychodelicBackground.prototype.renderTexture2 = null;
PsychodelicBackground.prototype.outputSprite = null;
PsychodelicBackground.prototype.count = null;


PsychodelicBackground.prototype.update = function(){
    this.count += 0.01;
    GameObject.prototype.update.apply(this);
    // swap the buffers ...
    var temp = this.renderTexture;
    this.renderTexture = this.renderTexture2;
    this.renderTexture2 = temp;

    // set the new texture
    this.outputSprite.texture = this.renderTexture;

    // twist this up!
    this.outputSprite.scale.set(1 + Math.sin(this.count) * 0.2);

    global.app.renderer.render(global.app.stage, this.renderTexture2, false);
};

module.exports = PsychodelicBackground;