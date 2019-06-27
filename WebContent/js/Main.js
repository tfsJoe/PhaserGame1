window.onload = function () {
	var game = new Phaser.Game(1080, 1920, Phaser.AUTO, '', null, false, true, {"ninja":true});
    // Add the States your game has.
    // game.state.add("Boot", Boot);
    // game.state.add("Menu", Menu);
    // game.state.add("Preload", Preload);
    game.state.add("Level", Level);
    game.state.start("Level");
};
