(function () {
    "use strict";
    function Airstrike() {
        this.lastShot = null;
    }
    Airstrike.prototype.fire = function (coordinates) {
        this.lastShot = coordinates;
        return this;
    };

    Airstrike.prototype.status = function () {
        if (this.lastShot === null) {
            return "You may fire when ready."
        } else if (this.lastShot === 'A1') {
            return "Hit!"
        } else {
            return "Miss."
        }
    };
    window.Airstrike = Airstrike;
})();
