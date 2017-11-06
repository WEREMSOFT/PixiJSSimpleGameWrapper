/**
 * Created by pabloweremczuk on 9/15/17.
 */
require('../../core/App');
var GameObject = require('../../core/GameObject');
var MovingBackground = require('../background/MovingBackground');

ResourceLoader = function (pPIXI, onResourcesLoadedCallback) {
    pPIXI.loader
        .add('assets/ReelMask.png')
        .add('assets/GameBackground0.jpg')
        .add('assets/spinObjects/spinObj_00.png')
        .add('assets/spinObjects/spinObj_01.png')
        .add('assets/spinObjects/spinObj_02.png')
        .add('assets/spinObjects/spinObj_03.png')
        .add('assets/spinObjects/spinObj_04.png')
        .add('assets/spinObjects/spinObj_05.png')
        .add('assets/spinObjects/spinObj_06.png')
        .add('assets/spinObjects/spinObj_07.png')
        .add('desyrel', 'assets/bitmapFont/desyrel.xml')
        .add('assets/button/button.png')
        .add('assets/button/buttonDown.png')
        .add('assets/button/buttonOver.png')

        .add('dragon', 'assets/dragon/dragon.json')
        .add('dragonBones', 'assets/dragonBones/newDragon.json')
        .add('textTween', 'assets/textTween/TextTween.json')
        .add('coin', 'assets/coin/coin-pro.json')
        .add('pinguin', 'assets/pinguin/skeleton.json')
        .load(onResourcesLoadedCallback);
};

module.exports = ResourceLoader;