import {
    Board
} from "./board.js";
import {
    Node
} from "./node.js";

export class Apple {
    static instance = new Apple();
    static getInstance() {
        return Apple.instance;
    }

    start() {
        this.tileCount = Board.getInstance().tileCount;
        this.x = Math.floor(Math.random() * this.tileCount);
        this.y = Math.floor(Math.random() * this.tileCount);
    }

    update() {

    }

    draw() {
        this.tileSize = Board.getInstance().tileSize;
        Node.getInstane().draw(this.x * this.tileSize, this.y * this.tileSize, "red");
    }
}