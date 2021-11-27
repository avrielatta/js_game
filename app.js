// Application
import { Player } from './js/Player.js';
    
var canvas = document.querySelector('#game-window');

if (canvas.getContext) {
    
    var ctx = canvas.getContext('2d');
    var playerImg = new Image();
    var player = new Player("OnionSoap", playerImg, 0, 0);
    var up, right, left, down = false;
    var currentKeys = [up, right, down, left];

    playerImg.addEventListener('load', () => {
        
        gameLoop();

    });
    
    playerImg.src = "./img/sprites/player_01.png";

} else {
    // canvas not supported in browser
}

document.addEventListener('keydown', (e) => {
    if (e.key == 'ArrowUp')     currentKeys[0] = true;
    if (e.key == 'ArrowRight')  currentKeys[1] = true;
    if (e.key == 'ArrowDown')   currentKeys[2] = true;
    if (e.key == 'ArrowLeft')   currentKeys[3] = true;
});

document.addEventListener('keyup', (e) => {
    if (e.key == 'ArrowUp')     currentKeys[0] = false;
    if (e.key == 'ArrowRight')  currentKeys[1] = false;
    if (e.key == 'ArrowDown')   currentKeys[2] = false;
    if (e.key == 'ArrowLeft')   currentKeys[3] = false;
});

const gameLoop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.updatePlayer(currentKeys);
    ctx.drawImage(player.character, player.x, player.y);
    window.requestAnimationFrame(gameLoop);
};