import { DocumentRepository } from "../../domain/repositories/DocumentRepository";
import { DocumentEntity } from "../../domain/entities/DocumentEntity";
import { v4 as uuidv4 } from "uuid";

export class DocumentService {
    constructor(private documentRepository: DocumentRepository) {}

    async getAllDocuments(): Promise<DocumentEntity[]> {
        return this.documentRepository.findAll();
    }

    async getDocumentById(id: string): Promise<DocumentEntity | null> {
        return this.documentRepository.findById(id);
    }

    async createDocument(title: string, content: string): Promise<DocumentEntity> {
        const document = new DocumentEntity(uuidv4(), title, content);
        return this.documentRepository.save(document);
    }
}