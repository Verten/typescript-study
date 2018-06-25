var clock = /** @class */ (function () {
    function clock(h, m) {
    }
    clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return clock;
}());
