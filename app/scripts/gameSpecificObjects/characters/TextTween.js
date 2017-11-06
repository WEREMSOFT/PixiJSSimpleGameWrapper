/**
 * Created by pabloweremczuk on 9/19/17.
 */
var inherits = require('inherits');
var GameObject = require('../../core/GameObject');
var GameEvents = require('../events/GameEvents');

var TextTween = function(){
    GameObject.call(this);

    var dragonSpine = new global.app.PIXI.spine.Spine(global.app.PIXI.loader.resources.textTween.spineData);


    dragonSpine.state.setAnimation(0, 'animtion0', true);

    dragonSpine.state.addListener({
        event: function(entry, event) {
            console.log('event fired '+event.data+' at track' + entry.trackIndex) },
        complete: function(entry) { console.log('track '+entry.trackIndex+' completed '+entry.loopsCount()+' times') },
        start: function(entry) { console.log('animation is set at '+entry.trackIndex) },
        end: function(entry) { console.log('animation was ended at '+entry.trackIndex) },


        dispose: function(entry) { console.log('animation was disposed at '+entry.trackIndex) },
        interrupted: function(entry) { console.log('animation was interrupted at '+entry.trackIndex) }
    });

    this.sprite.addChild(dragonSpine);
    this.scaleX = this.scaleY = 0.5;

    global.app.gameEventHandler.on(GameEvents.EVT_BUTON_SPIN_CLICK, this.onSpinButtonClicks, this);

};
inherits(TextTween, GameObject);

TextTween.prototype.onSpinButtonClicks = function(evt){
    console.log('dragon flip!!');
  this.scaleX *= -1;
};

module.exports = TextTween;
