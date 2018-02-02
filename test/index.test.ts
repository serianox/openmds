import { assert } from "chai";
import { hello } from "../lib/index";

suite("Functional", () => {
    suite("#hello()", () => {
        test("should return `Hello world!`", () => {
            assert.equal(hello(), "Hello world!");
        });
    });
});
