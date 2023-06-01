export class Language {
    code: string | undefined;
    name: string | undefined;
    targets: string[] | undefined;

    constructor(code: string, name: string, targets: string[]) {
        this.code = code;
        this.name = name;
        this.targets = targets;
    }
}