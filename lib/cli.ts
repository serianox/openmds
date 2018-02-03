import * as program from "commander";
import * as path from "path";
import { createServer } from "./index";

interface Options {
    host?: string;
    port?: number;
}

program
    .version("0.1.0")
    .usage("[options]")
    .option("-h, --host HOST", "host")
    .option("-p, --port PORT", "port", parseInt);

program.parse(process.argv);

const options = program as Options;

const server = createServer(options.host, options.port);

server.start(error => {
    if (error) {
        throw error;
    }

    console.log(`Server running at: ${server.info!.uri}`);
});
