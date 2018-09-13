export interface IInitOptions {
    name: string;
}

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
    },
};
