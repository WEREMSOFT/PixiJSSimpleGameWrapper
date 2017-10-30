/**
 * Created by pabloweremczuk on 9/19/17.
 */
var inherits = require('inherits');
var GameObject = require('../../core/GameObject');
var GameEvents = require('../events/GameEvents');

var DragonBones = function(){
    GameObject.call(this);

    var dragonSpine = new global.app.PIXI.spine.Spine(global.app.PIXI.loader.resources.dragonBones.spineData);

    dragonSpine.state.setAnimation(0, 'stand', true);

    this.sprite.addChild(dragonSpine);
    this.scaleX = this.scaleY = 0.5;

    global.app.gameEventHandler.on(GameEvents.EVT_BUTON_SPIN_CLICK, this.onSpinButtonClicks, this);

};
inherits(Dragon, GameObject);

DragonBones.prototype.onSpinButtonClicks = function(evt){
    console.log('dragon flip!!');
  this.scaleX *= -1;
};

module.exports = DragonBones;
