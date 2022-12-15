export class notificationContent {
    private readonly content: string;

    get value(): string {
        return this.content;
    }

    private validadeContent(content: string): boolean {
        return content.length >= 5 && content.length <= 240;
    }

    constructor(content: string) {
        const isValid = this.validadeContent(content);
        if(!isValid) {
            throw new Error("Content length error")
        } else {
            this.content = content;
        }

        
    }

    

}

