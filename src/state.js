class State {
    constructor() {
        window['check'] = this;
    }
    squares = Array(9).fill(1);
    diamonds = Array(9).fill(2);
    name = 'test';
}
var state = new State();
export { state };