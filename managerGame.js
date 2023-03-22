import {
    Apple
} from "./apple.js";
import {
    Board
} from "./board.js";
import {
    Node
} from "./node.js";
import {
    Snake
} from "./snake.js";

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