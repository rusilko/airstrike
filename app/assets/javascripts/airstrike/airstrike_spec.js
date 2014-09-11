describe("Airstrike! the game", function () {
    "use strict";
    var game = null;
    beforeEach(function() {
        game = new Airstrike;
    });

    it ("fires shots", function () {
        expect(game.fire("A1")).toBe(game);

    });

    describe("Status", function () {
        it ("boilerplate before first shot", function () {
            expect(game.status()).toBe("You may fire when ready.");
        });

        it("hit or miss after a shot", function () {
            expect(game.fire("A1").status()).toMatch(/Hit!|Miss./);
        });
    });
});
