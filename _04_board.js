import { Node } from "./_03_node.js";

export class Board {
    static instance = new Board();
    static getInstance() {
        return Board.instance;
    }

    start() {
        this.tileSize = Node.getInstane().nodeSize;
        console.log(Node.getInstane());
        this.tileCount = 17;
        this.boardSize = this.tileCount * this.tileSize;
    }

    draw() {
        let k = 0;
        for (let i = 0; i < this.tileCount; i++) {
            for (let j = 0; j < this.tileCount; j++) {
                if (k % 2 == 0) {
                    Node.getInstane().draw(i, j, "rgb(170,215,81)");
                } else {
                    Node.getInstane().draw(i, j, "rgb(162,209,73)");
                }
                k++;
            }
        }
    }
}