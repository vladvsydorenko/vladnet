import * as argvParser from "argv";

export namespace CliHelpers {

    export interface IParseArgvOption {
        name: string;
        type: string;
        short?: string;
        description?: string;
        example?: string;
    }

    export const parseArgv = (options: IParseArgvOption[], argv = process.argv) => {
        argvParser.option(options);
        const result = argvParser.run(argv);
    };

}
