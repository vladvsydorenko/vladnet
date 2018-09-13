export interface IInitOptions {
    name: string;
}
declare const _default: {
    options: {
        name: string;
        short: string;
        type: string;
        description: string;
        example: string;
    }[];
    run: (options: IInitOptions) => void;
};
export default _default;
