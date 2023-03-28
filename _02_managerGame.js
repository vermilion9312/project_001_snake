import {
    Apple
} from "./_05_apple.js";
import {
    Board
} from "./_04_board.js";
import {
    Node
} from "./_03_node.js";
import {
    Snake
} from "./_06_snake.js";

export class ManagerGame {
    static instance = new ManagerGame();
    static getInstance() {
        return ManagerGame.instance;
    }

    start(ctx) {
        this.ctx = ctx;
        Node.getInstane().start();
        Board.getInstance().start();
        Apple.getInstance().start();
        Snake.getInstance().start();
    }

    draw() {
        Board.getInstance().draw();
        Apple.getInstance().draw();
        Snake.getInstance().draw();
    }
}