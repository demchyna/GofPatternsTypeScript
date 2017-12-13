export class SingleObject {

    private static instance: SingleObject = null;

    private constructor() { }

    static getInstance(): SingleObject {
        if (this.instance == null) {
            this.instance = new SingleObject();
        }
        return this.instance;
    }

    private message: string;

    setMessage(message: string): void {
        this.message = message;
    }

    getMessage(): string {
        return this.message;
    }
}