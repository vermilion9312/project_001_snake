import { Board } from "./_04_board.js";
import { ManagerGame } from "./_02_managerGame.js";

export class Node {
    static instance = new Node();
    static getInstane() {
        return Node.instance;
    }

    start() {
        this.nodeSize = 30;
    }

    draw(x, y, color) {
        this.tileSize = Board.getInstance().tileSize;
        this.ctx = ManagerGame.getInstance().ctx;
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * this.tileSize, y * this.tileSize, this.nodeSize, this.nodeSize);
    }
}