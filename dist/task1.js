"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let isCompleted = true;
let total = 0;
let userName = "Paul";
let items = [1, 2, 3];
let tuple = ["hello", 20];
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
let dir = Direction.Up;
let randomValue = 4;
randomValue = "a string";
function logMessage() {
    console.log("No return");
}
let u = undefined;
let n = null;
