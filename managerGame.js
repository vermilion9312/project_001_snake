import {
    Apple
} from "./apple.js";
import {
    Board
} from "./board.js";
import {
    Node
} from "./node.js";

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
    }

    draw() {
        Board.getInstance().draw();
        Apple.getInstance().draw();
    }
}