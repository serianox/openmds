import * as Hapi from "hapi";

const app = new Hapi.Server();

app.connection({ port: 8080, host: "localhost", routes: { cors: true } });

app.route({
    method: "GET",
    path: "/",
    handler: (request, reply) => reply("Hello, world!")
});

app.start(error => {
    if (error) {
        throw error;
    }

    console.log(`Server running at: ${app.info!.uri}`);
});
