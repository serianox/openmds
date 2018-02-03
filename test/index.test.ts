import { assert } from "chai";
import { createServer } from "./../lib/index";

const server = createServer();

suite("basic", () => {
    test("GET", () => {
        server.inject({
            method: "GET",
            url: "/",
        }).then(_ => {
            assert.equal(_.statusCode, 200);
        });
    });
});
