/**
 * Created by pabloweremczuk on 9/16/17.
 */
require('./App');


var GameObject = function (pSprite) {
    this.childs = [];
    if (pSprite != null)
        this.sprite = pSprite;
    else
        this.sprite = new global.app.PIXI.Container();
};

// The gameobject can contains childs
GameObject.prototype.PI_RELATION = Math.PI / 180;

// The gameobject can contains childs
GameObject.prototype.childs = null;

// The gameobject have the reference to its parent
GameObject.prototype.parent = null;

// The gameobject has a graphic asset related to it.
GameObject.prototype.sprite = null;

// You can disable a game object to avoid updates.
GameObject.prototype.enabled = true;


GameObject.prototype.update = function () {
    for (var i = 0; i < this.childs.length; i++) {
        if (this.childs[i].enabled) {
            this.childs[i].update();
        }
    }
};

GameObject.prototype.addChild = function (pChild) {
    if (this.childs.indexOf(pChild) == -1) {
        this.childs.push(pChild);
        this.sprite.addChild(pChild.sprite);
    }
};

// === Getters and Setters ===
// X and Y
Object.defineProperty(GameObject.prototype, 'x', {
    get: function () {
        return this.sprite.x
    },
    set: function (pValue) {
        this.sprite.x = pValue;
    }
});

Object.defineProperty(GameObject.prototype , 'y', {
    get: function () {
        return this.sprite.y
    },
    set: function (pValue) {
        this.sprite.y = pValue;
    }
});
// width and height
Object.defineProperty(GameObject.prototype, 'width', {
    get: function () {
        return this.sprite.width
    },
    set: function (pValue) {
        this.sprite.width = pValue;
    }
});

Object.defineProperty(GameObject.prototype , 'height', {
    get: function () {
        return this.sprite.height
    },
    set: function (pValue) {
        this.sprite.height = pValue;
    }
});

// scaleX and ScaleY
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