import * as program from "commander";
import * as path from "path";
import { startServer } from "./index";

interface Options {
    host?: string;
    port?: number;
}

program
    .version(process.env.npm_package_version!)
    .usage("[options]")
    .option("-h, --host HOST", "host")
    .option("-p, --port PORT", "port", parseInt);

program.parse(process.argv);

const options = program as Options;

startServer(options.host, options.port);
