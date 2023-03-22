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
        this.x = 12;
        this.y = 8;
    }

    update() {

    }

    draw() {
        this.tileSize = Board.getInstance().tileSize;
        Node.getInstane().draw(this.x, this.y, "rgb(231, 71, 29)");
    }
}