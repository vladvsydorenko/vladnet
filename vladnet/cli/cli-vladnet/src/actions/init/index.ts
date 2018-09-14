import * as fs from "fs";
import * as path from "path";
import nativeRequire from "../../nativeRequire";

export interface IInitOptions {
    name: string;
}

const DEFAULT_ACTION_PKG = "@vladnet/cli-infrastructure";

export default {
    options: [
        {
            name: "name",
            short: "n",
            type: "string",
            description: "Name of package",
            example: "init -o vladnet -g com -n helpers"
        },
    ],
    run: (options: IInitOptions) => {
        console.log("So, start init action :)", options.name);
        const configPath = path.join(process.cwd(), "vladnet.json");
        let config;

        if (!fs.existsSync(configPath)) {
            config = { actions: [DEFAULT_ACTION_PKG] };
            fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
        }

        console.log("config", config);
    },
};
