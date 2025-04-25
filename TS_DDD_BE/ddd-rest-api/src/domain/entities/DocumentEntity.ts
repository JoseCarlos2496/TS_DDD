export class DocumentEntity {
    private id: string;
    private title: string;
    private content: string;

    constructor(id: string, title: string, content: string) {
        this.id = id;
        this.title = title;
        this.content = content;
    }

    public getId(): string {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getContent(): string {
        return this.content;
    }
}