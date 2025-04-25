import { useState, useEffect } from 'react';
import { Document } from '../types';
import { fetchDocuments } from '../services/documentService';

export const useDocuments = () => {
    const [documents, setDocuments] = useState<Document[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadDocuments = async () => {
            try {
                const data = await fetchDocuments();
                setDocuments(data);
            } catch (err) {
                setError((err as Error).message);
            }
        };
        loadDocuments();
    }, []);

    return { documents, error };
};

// const useDocuments = () => {
//     const [documents, setDocuments] = useState<Document[]>([]);
//     const [error, setError] = useState<string | null>(null);

//     const addDocument = (newDocument: Document) => {
//         try {
//             setDocuments((prevDocuments) => [...prevDocuments, newDocument]);
//             setError(null);
//         } catch (err) {
//             setError('Failed to add document');
//         }
//     };

//     const getDocuments = () => {
//         return documents;
//     };

//     const getDocumentById = (id: string) => {
//         return documents.find(doc => doc.id === id) || null;
//     };

//     const clearError = () => {
//         setError(null);
//     };

//     return {
//         documents,
//         addDocument,
//         getDocuments,
//         getDocumentById,
//         error,
//         clearError,
//     };
// };

export default useDocuments;