/**
 * Created by pabloweremczuk on 9/17/17.
 */

var GameObject = require('../../core/GameObject');
var inherits = require('inherits');

var MovingBackground = function(pSprite){
    GameObject.call(this, new global.app.PIXI.Sprite(global.app.PIXI.loader.resources["assets/GameBackground0.jpg"].texture));

    this.timeStamp = new Date();
};

inherits(MovingBackground, GameObject);

MovingBackground.prototype.update = function(){
    var currentTimeStamp = new Date();
    GameObject.prototype.update.apply(this);
    // this.x = Math.sin((currentTimeStamp - this.timeStamp) / 100) * 10;
    // this.y = Math.cos((currentTimeStamp - this.timeStamp) / 100) * 10;
};

module.exports = MovingBackground;