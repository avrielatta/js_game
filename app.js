// Application
import Player from './js/Player.js';
    
var canvas = document.querySelector('#game-window');

if (canvas.getContext) {
    
    var ctx = canvas.getContext('2d');
    var playerImg = new Image();
    var keys = [0, 0, 0, 0, 0];
    var player = new Player("OnionSoap", playerImg, 0, 0);

    playerImg.addEventListener('load', () => {
        
        gameLoop();

    });
    
    playerImg.src = "./img/sprites/player_01.png";

} else {
    // canvas not supported in browser
}

const changeKey = (key, to) => {
    switch (key) {
        // left
        case 65:
        case 37:
            keys[0] = to;
            break;
        // up
        case 87:
        case 38:
            keys[2] = to;
            break;
        // right
        case 68:
        case 39:
            keys[1] = to;
            break;
        // down
        case 83:
        case 40:
            keys[3] = to;
            break;
        // space
        case 32:
            keys[4] = to;
            break;
    }
};

document.addEventListener('keydown', (e) => {
    changeKey(e.key, 1);

});

document.addEventListener('keyup', (e) => {
    changeKey(e.key, 0);
});

const init = () => {

};

const gameLoop = () => {
    while (true) {

        ctx.drawImage(player.character, player.x, player.y);
        return;

    }
};

// function updateLoop(time) {
//     if (lastTime == null) {
//         lastTime = time;
//         window.requestAnimationFrame(updateLoop);
//         return;
//     }
//     const delta = time - lastTime;
//     updateBird(delta);
//     updatePipes(delta);
//     if (checkLose()) return handleLose();
//     lastTime = time;
//     window.requestAnimationFrame(updateLoop);
// }