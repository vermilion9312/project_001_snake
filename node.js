import {
    ManagerGame
} from "./managerGame.js";

export class Node {
    static instance = new Node();
    static getInstane() {
        return Node.instance;
    }

    start() {
        this.nodeSize = 30;
    }

    draw(x, y, color) {
        this.ctx = ManagerGame.getInstance().ctx;
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, this.nodeSize, this.nodeSize);
    }
}