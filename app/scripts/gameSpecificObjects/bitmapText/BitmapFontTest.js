/**
 * Created by pabloweremczuk on 9/17/17.
 */

var GameObject = require('../../core/GameObject');
var inherits = require('inherits');

var BitmapFontTest = function(pSprite){
    GameObject.call(this);

    this.bitmapFontText = new global.app.PIXI.extras.BitmapText('1000.0000', { font: '200px Desyrel', align: 'right' });



    this.bitmapFontText.x = -this.bitmapFontText.width / 2;
    this.bitmapFontText.y = -this.bitmapFontText.height / 2;

    this.sprite.addChild(this.bitmapFontText);

    this.timeStamp = new Date();
};

inherits(BitmapFontTest, GameObject);

BitmapFontTest.prototype.bitmapFontText = null;

BitmapFontTest.prototype.update = function(){
    GameObject.prototype.update.apply(this);

    var currentTimeStamp = new Date();
    this.bitmapFontText.text = 'Hello World!!';
    this.bitmapFontText.x = -this.bitmapFontText.width / 2;
    this.bitmapFontText.y = -this.bitmapFontText.height;
    this.angle = Math.sin((currentTimeStamp - this.timeStamp) / 100) * 20;
};

module.exports = BitmapFontTest;