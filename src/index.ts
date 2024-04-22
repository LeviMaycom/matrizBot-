import { ExtendedClient } from "./structs/extendedClient";
export * from "colors";
import config from "./config.json";

const client = new ExtendedClient();
client.start();

export { client, config }
