var KeyValuePair = /** @class */ (function () {
    function KeyValuePair() {
    }
    Object.defineProperty(KeyValuePair.prototype, "key", {
        get: function () {
            return this._key;
        },
        set: function (value) {
            if (value == null || value == undefined) {
                throw new Error("Значение value не может быть пустым.");
            }
            this._key = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyValuePair.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            if (value == null || value == undefined) {
                throw new Error("Значение value не может быть пустым.");
            }
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    return KeyValuePair;
}());
var strAndNum = new KeyValuePair();
strAndNum.key = "key1";
strAndNum.value = 123;
//strAndNum.value = "123";
strAndNum.key = null;
//# sourceMappingURL=app1.js.map