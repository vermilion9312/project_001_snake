import {
    Node
} from "./_03_node.js";

export class Snake {
    static instance = new Snake();
    static getInstance() {
        return Snake.instance;
    }

    start() {
        this.x = 2;
        this.y = 8;
        this.snakeList = [];
        this.snakeLength = 3;
        this.snake = {
            x: this.x,
            y: this.y
        }

        for (let i = 0; i < this.snakeLength; i++) {
            this.snakeList.push(this.snake);
            this.x++;
            this.snake = {
                x: this.x,
                y: this.y
            }
        }
    }

    update() {

    }

    draw() {
        for (let i = 0; i < this.snakeList.length; i++) {
            Node.getInstane().draw(this.snakeList[i].x, this.snakeList[i].y, "rgb(68, 113, 230)");
        }
    }

    left() {

    }

    right() {

    }

    up() {

    }

    down() {

    }
}