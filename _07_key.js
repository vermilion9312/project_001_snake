export class Key {
    static instance = new Key();
    static getInstance() {
        return Key.instance;
    }

    start() {
        document.onkeydown = (e) => {
            console.log(e);
        }
    }
}