// Enums : They allow you to declare a collection of related values that can be numeric or string-based. Enums make it easier to work with a fixed set of values within your code.
// In enum's we can access both key and value. By-default the key value start from 0 in Enums.
var color;
(function (color) {
    color[color["green"] = 0] = "green";
    color[color["red"] = 1] = "red";
    color[color["yellow"] = 2] = "yellow";
})(color || (color = {}));
;
console.log(color.red);
(function (color) {
    color[color["Red"] = 1] = "Red";
    color[color["Blue"] = 23] = "Blue";
    color[color["Yellow"] = 24] = "Yellow";
})(color || (color = {}));
; // they increase by 1
let c = color.Yellow;
console.log(c);
(function (color) {
    color[color["orange"] = 1] = "orange";
    color[color["bringht"] = 12] = "bringht";
    color["name"] = "ali";
})(color || (color = {}));
;
let colorindex = color[12];
console.log(colorindex);
;
console.log(1 /* Color.pink */);
export {};
