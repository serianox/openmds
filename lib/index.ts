import * as Hapi from 'hapi';

const app = new Hapi.Server();

app.connection({ port: 3000, host: 'localhost', routes: { cors: true } });

app.start(error => {
    if (error) {
        throw error;
    }

    console.log(`Server running at: ${app.info!.uri}`);
});
