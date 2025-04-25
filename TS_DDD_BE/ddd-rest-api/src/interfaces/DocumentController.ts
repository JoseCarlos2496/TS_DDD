import { Request, Response } from "express";
import { DocumentService } from "../application/services/DocumentService";

export class DocumentController {
    constructor(private documentService: DocumentService) {}

    async getAllDocuments(req: Request, res: Response): Promise<void> {
        const documents = await this.documentService.getAllDocuments();
        res.json(documents);
    }

    async getDocumentById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const document = await this.documentService.getDocumentById(id);

        if (!document) {
            res.status(404).json({ message: "Document not found" });
            return;
        }

        res.json(document);
    }

    async createDocument(req: Request, res: Response): Promise<void> {
        const { title, content } = req.body;

        if (!title || !content) {
            res.status(400).json({ message: "Title and content are required" });
            return;
        }

        const document = await this.documentService.createDocument(title, content);
        res.status(201).json(document);
    }
}