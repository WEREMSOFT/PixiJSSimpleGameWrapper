/**
 * Created by pabloweremczuk on 9/19/17.
 */
var inherits = require('inherits');
var GameObject = require('../../core/GameObject');


var Coin = function(){
    GameObject.call(this);

    var coinSpine = new global.app.PIXI.spine.Spine(global.app.PIXI.loader.resources.coin.spineData);

    coinSpine.state.setAnimation(0, 'rotate', true);

    this.sprite.addChild(coinSpine);
    this.sprite.scale.set(0.1, 0.1);
};
inherits(Coin, GameObject);


module.exports = Coin;
