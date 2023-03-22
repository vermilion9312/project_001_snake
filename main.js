import {
    Board
} from "./board.js";
import {
    ManagerGame
} from "./managerGame.js";

function draw() {
    ManagerGame.getInstance().draw();
}

var $canvas = document.getElementById("snake");
var ctx = $canvas.getContext("2d");


ManagerGame.getInstance().start(ctx);

$canvas.width = Board.getInstance().boardSize;
$canvas.height = Board.getInstance().boardSize;

setInterval(draw, 10);