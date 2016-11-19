/**
 *
 * This is a simple state template to use for getting a Phaser game up
 * and running quickly. Simply add your own game logic to the default
 * state object or delete it and make your own.
 *
 */


var gesturesEngine;
var state = {
    init: function() {
        // Delete this init block or replace with your own logic.

        // Create simple text display for current Phaser version
        var text = "Phaser Version "+Phaser.VERSION + " works!";
        var style = { font: "24px Arial", fill: "#fff", align: "center" };
        var t = game.add.text(this.world.centerX, this.world.centerY, text, style);
        t.anchor.setTo(0.5, 0.5);

    },
    preload: function() {
        gesturesEngine = new GesturesEngine(game,100,5);
    },
    create: function(){
        gesturesEngine.setCanvas(game.add.graphics(0,0));
    },
    update: function() {
        gesturesEngine.update(game);
    }
};

var game = new Phaser.Game(
    window.screen.availWidth * window.devicePixelRatio,
    window.screen.availHeight * window.devicePixelRatio,
    Phaser.AUTO,
    'game',
    state
);
