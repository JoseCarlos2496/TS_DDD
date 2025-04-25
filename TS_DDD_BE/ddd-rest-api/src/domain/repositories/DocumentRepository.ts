import { DocumentEntity } from "../entities/DocumentEntity";

export interface DocumentRepository {
    findById(id: string): Promise<DocumentEntity | null>;
    findAll(): Promise<DocumentEntity[]>;
    save(document: DocumentEntity): Promise<DocumentEntity>;
}