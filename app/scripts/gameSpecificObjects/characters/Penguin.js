/**
 * Created by pabloweremczuk on 9/19/17.
 */
var inherits = require('inherits');
var GameObject = require('../../core/GameObject');


var Penguin = function(){
    GameObject.call(this);

    var penguinSpine = new global.app.PIXI.spine.Spine(global.app.PIXI.loader.resources.pinguin.spineData);

    penguinSpine.state.setAnimation(0, 'animation', true);

    this.sprite.addChild(penguinSpine);
    //this.sprite.scale.set(0.1, 0.1);
};
inherits(Penguin, GameObject);


module.exports = Penguin;
