import { DocumentRepository } from "../domain/repositories/DocumentRepository";
import { DocumentEntity } from "../domain/entities/DocumentEntity";

export class DocumentRepositoryInMemory implements DocumentRepository {
    private documents: DocumentEntity[] = [];

    async findById(id: string): Promise<DocumentEntity | null> {
        return this.documents.find(doc => doc.getId() === id) || null;
    }

    async findAll(): Promise<DocumentEntity[]> {
        return this.documents;
    }

    async save(document: DocumentEntity): Promise<DocumentEntity> {
        this.documents.push(document);
        return document;
    }
}