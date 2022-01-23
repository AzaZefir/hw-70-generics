var Dictionary = /** @class */ (function () {
    function Dictionary() {
        this.data = [];
    }
    Dictionary.prototype.add = function (key, value) {
        var entry = new KeyValuePair();
        entry.key = key;
        entry.value = value;
        this.data.push(entry);
    };
    Dictionary.prototype.getValue = function (key) {
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].key == key) {
                return this.data[i].value;
            }
        }
        return null;
    };
    return Dictionary;
}());
var dictionary = new Dictionary();
dictionary.add("hello", "привет");
dictionary.add("book", "книга");
dictionary.add("apple", "яблоко");
console.log(dictionary.getValue("book"));
var dictionary2 = new Dictionary();
dictionary2.add(1, true);
dictionary2.add(2, false);
dictionary2.add(7, true);
console.log(dictionary2.getValue(7));
//# sourceMappingURL=app.js.map