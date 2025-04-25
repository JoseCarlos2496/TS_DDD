import React, { useState } from 'react';
import styles from '../styles/DocumentForm.module.css';
import { createDocument } from '../services/documentService';

interface DocumentFormProps {
    onDocumentCreated: () => void;
}

const DocumentForm: React.FC<DocumentFormProps> = ({ onDocumentCreated }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createDocument({ title, content });
            setTitle('');
            setContent('');
            setError(null);
            onDocumentCreated();
        } catch (err) {
            setError((err as Error).message);
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h2>Create Document</h2>
            {error && <p className={styles.error}>{error}</p>}
            <div>
                <label>Title:</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Content:</label>
                <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
            </div>
            <button type="submit">Create</button>
        </form>
    );
};

export default DocumentForm;