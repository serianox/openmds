import * as Hapi from "hapi";

export const createServer = (host?: string, port?: number): Hapi.Server => {
    const app = new Hapi.Server();

    app.connection({ port: port || 3000, host: host || "localhost", routes: { cors: true } });

    app.route({
        method: "GET",
        path: "/",
        handler: (request, reply) => reply("Hello, world!"),
    });

    return app;
};
