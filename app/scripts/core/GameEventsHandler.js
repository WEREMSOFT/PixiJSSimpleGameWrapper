/**
 * Created by pabloweremczuk on 9/18/17.
 */

var EventEmitter = require('eventemitter3');
var inherits = require('inherits');

var GameEventsHandler = function(){
  EventEmitter.call(this);
};

inherits(GameEventsHandler, EventEmitter);

module.exports = EventEmitter;