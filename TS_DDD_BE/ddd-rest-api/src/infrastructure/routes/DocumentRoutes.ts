import { Router } from "express";
import { DocumentController } from "./../../interfaces/DocumentController";
import { DocumentService } from "../../application/services/DocumentService";
import { DocumentRepositoryInMemory } from "./../../infrastructure/DocumentRepositoryInMemory";

const router = Router();
const documentRepository = new DocumentRepositoryInMemory();
const documentService = new DocumentService(documentRepository);
const documentController = new DocumentController(documentService);

router.get("/documents", (req, res) => documentController.getAllDocuments(req, res));
router.get("/documents/:id", (req, res) => documentController.getDocumentById(req, res));
router.post("/documents", (req, res) => documentController.createDocument(req, res));

export default router;