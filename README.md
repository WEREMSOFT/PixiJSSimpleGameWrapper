# PIXI Game Boilerplate
 
 This is a boilerplate that helps to make games with pixiJS. 
 
 ## Philosophy
 
 The main idea is set a folder structure and a baseline to implement a game based on pixiejs using simple building blocks.
 
 Personally, I don't like overcomplicated structures, so simple building blocks is the main phylosofy of this code.
 
 Dennis Ritchie once said:
 
 _"A language that doesn’t have everything is actually easier to program in than some that do."_



Some other guy also said

_"Keep it simple, stupid"_

I have a lot of phrases stolen from the internet, but I' sure you get the idea.

## The basic building block: The GameObject class

The GameObject class is the main class. Over this, everything is constructed.

## Childs
The principal feature of this class is that it can have other gameObjects as childs(in the childs property, that is an array).

## Update Method 
The objects created from this class can update themselves. This class updates itself and, by calling it superclass's update method, it updates it's childs by calling their update methods. If the property "enabled" is set to false, the gameobject will not update, also, their childs will not update even if they are enabled. This is used to handle complex hierarchies(like levels in a game or different stages or screens).
 
## Encapsulation and the update method

 Every GameObject must update itself using the update function. 
 If you want to implement a finite state machine, you can do it simply by adding a switch/case block or, if the logic is too complex, you can use a class that updates the GameObject.
 
 There are some exceptions to this rule, like when you want to create a particle system, you should update the sprites with a loop, becuse is more eficient.
  
 
## Messaging System
 
 The messaging system is handled by the GameEventsHandler class. The single instance of this class can be accessed through global.app.gameEventHandler. This allows you to comunicate two objects that does not have a reference to each other. This is good for encapsulation(a button can be inside a folder without any dependence with other parts of the project and can be easily used in another project by simply copy the folder.
 
 Also, you can unit test every component independently by faking event triggering. The same way frameworks like reactJS do.
 
 Another benefit is that you can listen the game events and trigger some network logic that allows you to comunicate with a backend. Also, this allows you to simulate a this backend calls without installing the full server.
 
  
## Getting up and running

1. Clone this repo from `https://github.com/WEREMSOFT/PixiJSSimpleGameWrapper.git`
2. Run `npm install` from the root directory
3. Run `gulp`
4. Your browser will automatically be opened and directed to the browser-sync proxy address

### Aditional Gulp Commands
* gulp doc: generates JSDocumentation.
* gulp lint: check for formatting errors.
* gulp script: transpiles al JS files.


 # TODO
 * Add JSDoc for all files
 * Enhance Main.js and core/app.js
 * Create Network base code
 