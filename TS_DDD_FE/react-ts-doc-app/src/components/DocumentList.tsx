import React from 'react';
import '../styles/DocumentList.module.css'
import { Document } from '../types';

interface DocumentListProps {
    documents: Document[];
    onSelectDocument: (id: string) => void;
}

const DocumentList: React.FC<DocumentListProps> = ({ documents, onSelectDocument }) => (
    <ul className="list">
        {documents.map((doc) => (
            <li key={doc.id} onClick={() => onSelectDocument(doc.id)}>
                {doc.title}
            </li>
        ))}
    </ul>
);

export default DocumentList;