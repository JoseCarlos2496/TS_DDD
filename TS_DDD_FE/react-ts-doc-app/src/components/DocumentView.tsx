import React, { useEffect, useState } from 'react';
import '../styles/DocumentView.module.css';
import { fetchDocumentById } from '../services/documentService';
import { Document } from '../types';

interface DocumentViewProps {
    documentId: string;
}

const DocumentView: React.FC<DocumentViewProps> = ({ documentId }) => {
    const [document, setDocument] = useState<Document | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadDocument = async () => {
            try {
                const data = await fetchDocumentById(documentId);
                setDocument(data);
            } catch (err) {
                setError((err as Error).message);
            }
        };
        loadDocument();
    }, [documentId]);

    if (error) return <p className="error">{error}</p>;
    if (!document) return <p>Loading...</p>;

    return (
        <div className='view'>
            <h2 className='h2'>{document.title}</h2>
            <p className='p'>{document.content}</p>
        </div>
    );
};

export default DocumentView;