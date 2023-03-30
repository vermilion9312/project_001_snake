export class Key {
    static instance = new Key();
    static getInstance() {
        return Key.instance;
    }

    start() {
        console.log(document.onkeydown.prototype)
    }

}