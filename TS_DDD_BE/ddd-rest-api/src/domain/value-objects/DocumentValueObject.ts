export class DocumentValueObject {
    private readonly value: string;

    constructor(value: string) {
        this.validate(value);
        this.value = value;
    }

    private validate(value: string): void {
        if (!value || value.length === 0) {
            throw new Error('Value cannot be empty');
        }
        // Additional validation logic can be added here
    }

    public getValue(): string {
        return this.value;
    }

    public equals(other: DocumentValueObject): boolean {
        return this.value === other.getValue();
    }
}