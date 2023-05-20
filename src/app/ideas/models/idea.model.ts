export class Idea {
    id: string | undefined;
    name: string | undefined;
    description: string | undefined;
    votes: number | undefined;

    constructor(id: string, name: string, description: string, votes: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.votes = votes;
    }
}