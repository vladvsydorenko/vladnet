export declare namespace CliHelpers {
    interface IParseArgvOption {
        name: string;
        type: string;
        short?: string;
        description?: string;
        example?: string;
    }
    const parseArgv: (options: IParseArgvOption[], argv?: string[]) => void;
}
