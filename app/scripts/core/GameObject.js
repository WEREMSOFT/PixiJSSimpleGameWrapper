/**
 * Created by pabloweremczuk on 9/16/17.
 */
require('./App');

/**
 * This is the main building blog for the application. Basically it' a pixijs wrapper to develop games.
 * @param pSprite
 * @constructor
 */
var GameObject = function (pSprite) {
    this.childs = [];
    if (pSprite != null)
        this.sprite = pSprite;
    else
        this.sprite = new global.app.PIXI.Container();
};

/**
 * It's the relation between radians and angles, is used to work with the angle setter in angles instead of radians
 * @type {number}
 */
GameObject.prototype.PI_RELATION = Math.PI / 180;

/**
 * The childs that the gameobject can contain
 * @type {Array}
 */
GameObject.prototype.childs = null;

/**
 * The gameobject have the reference to its parent
 * @type {GameObject}
 */
GameObject.prototype.parent = null;

/**
 * The gameobject has a graphic asset related to it.
 * @type {Sprite}
 */
GameObject.prototype.sprite = null;

/**
 * You can disable a game object to avoid updates.
 * @type {boolean}
 */
GameObject.prototype.enabled = true;

/**
 * the update function updates the childs, and execute the logic for the gameObject
 */
GameObject.prototype.update = function () {
    for (var i = 0; i < this.childs.length; i++) {
        if (this.childs[i].enabled) {
            this.childs[i].update();
        }
    }
};
/**
 * adds a child to the childs array and to the container(sprite)
 * @param pChild
 */
GameObject.prototype.addChild = function (pChild) {
    if (this.childs.indexOf(pChild) == -1) {
        this.childs.push(pChild);
        this.sprite.addChild(pChild.sprite);
    }
};

// === Getters and Setters ===
/**
 * gameobject.x and gameobject.sprite.x are the same
 * @param y
 */
Object.defineProperty(GameObject.prototype, 'x', {
    get: function () {
        return this.sprite.x
    },
    set: function (pValue) {
        this.sprite.x = pValue;
    }
});

/**
 * Get colour of object
 * @returns {mixed}
 *//**
 * Set colour of object
 * @param {mixed} val
 * @returns {this}
 */
Object.defineProperty(GameObject.prototype , 'y', {
    get: function () {
        return this.sprite.y
    },
    set: function (pValue) {
        this.sprite.y = pValue;
    }
});
/**
 * gameobject.width and gameobject.sprite.width are the same
 * @param width
 */
Object.defineProperty(GameObject.prototype, 'width', {
    get: function () {
        return this.sprite.width
    },
    set: function (pValue) {
        this.sprite.width = pValue;
    }
});

/**
 * gameobject.height and gameobject.sprite.height are the same
 * @param height
 */
Object.defineProperty(GameObject.prototype , 'height', {
    get: function () {
        return this.sprite.height
    },
    set: function (pValue) {
        this.sprite.height = pValue;
    }
});

/**
 * gameobject.scaleX and gameobject.sprite.scale.x are the same
 * @param scaleX
 */
Object.defineProperty(GameObject.prototype, 'scaleX', {
    get: function () {
        return this.sprite.scale.x
    },
    set: function (pValue) {
        this.sprite.scale.x = pValue;
    }
});

Object.defineProperty(GameObject.prototype , 'scaleY', {
    get: function () {
        return this.sprite.scale.y;
    },
    set: function (pValue) {
        this.sprite.scale.y = pValue;
    }
});

// rotation and angle
Object.defineProperty(GameObject.prototype, 'rotation', {
    get: function () {
        return this.sprite.rotation;
    },
    set: function (pValue) {
        this.sprite.rotation = pValue;
    }
});

Object.defineProperty(GameObject.prototype , 'angle', {
    get: function () {
        return this.sprite.rotation / this.PI_RELATION;
    },
    set: function (pValue) {
        this.sprite.rotation = pValue * this.PI_RELATION;
    }
});

module.exports = GameObject;