/**
 * Created by pabloweremczuk on 9/19/17.
 */
var inherits = require('inherits');
var GameObject = require('../../core/GameObject');
var GameEvents = require('../events/GameEvents');

var Dragon = function(){
    GameObject.call(this);

    var dragonSpine = new global.app.PIXI.spine.Spine(global.app.PIXI.loader.resources.dragon.spineData);

    dragonSpine.state.setAnimation(0, 'flying', true);

    this.sprite.addChild(dragonSpine);
    this.scaleX = this.scaleY = 0.5;

    global.app.gameEventHandler.on(GameEvents.EVT_BUTON_SPIN_CLICK, this.onSpinButtonClicks, this);

};
inherits(Dragon, GameObject);

Dragon.prototype.onSpinButtonClicks = function(evt){
    console.log('dragon flip!!');
  this.scaleX *= -1;
};

module.exports = Dragon;
