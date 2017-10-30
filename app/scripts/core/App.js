/**
 * Created by pabloweremczuk on 9/16/17.
 */
var PIXI = require('pixi.js');
var GameObject = require('./GameObject');
var inherits = require('inherits');
var GameEventHandler = require('./GameEventsHandler');

var App = function(){
    this.PIXI = PIXI;
    global.app = this;

    var type = "WebGL";
    if(!PIXI.utils.isWebGLSupported()){
        type = "canvas"
    }

    this.renderer = PIXI.autoDetectRenderer(1280, 720);
    PIXI.utils.sayHello(type);

    //Create a container object called the `stage`
    this.stage = new PIXI.Container();
    GameObject.call(this, this.stage);
    this.gameEventHandler = new GameEventHandler();
    //Add the canvas to the HTML document
    document.body.appendChild(this.renderer.view);
};

inherits(App, GameObject);


App.prototype.PIXI = null;
App.prototype.stage = null;
App.prototype.renderer = null;
App.prototype.gameEventHandler = null;

App.prototype.startUpdate = function(){
    requestAnimationFrame(systemUpdate);
};

App.prototype.update = function(){
    GameObject.prototype.update.apply(this);
    global.app.renderer.render(global.app.stage);
};

function systemUpdate(){
    global.stats.begin();

    global.app.update();
    global.stats.end();

    requestAnimationFrame(systemUpdate);
}

App.prototype.loadResources = function(){

};



module.exports = App;

