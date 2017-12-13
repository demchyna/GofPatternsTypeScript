export abstract class Shape {
    private id: number;
    private type: string;

    constructor(type: string) {
        this.type = type;
    }

    getType(): string{
        return this.type;
    }

    getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }

    abstract draw(): void;

    abstract clone(): Shape;
}