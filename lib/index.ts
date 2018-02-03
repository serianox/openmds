import * as Hapi from "hapi";

export const startServer = (host?: string, port?: number) => {
    const app = new Hapi.Server();

    app.connection({ port: port || 3000, host: host || "localhost", routes: { cors: true } });

    app.route({
        method: "GET",
        path: "/",
        handler: (request, reply) => reply("Hello, world!"),
    });

    app.start(error => {
        if (error) {
            throw error;
        }

        console.log(`Server running at: ${app.info!.uri}`);
    });
};
