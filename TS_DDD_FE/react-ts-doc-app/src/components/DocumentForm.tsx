import React, { useState } from 'react';
import '../styles/DocumentForm.module.css';
import { createDocument } from '../services/documentService';

interface DocumentFormProps {
    onDocumentCreated: () => void;
}

const DocumentForm: React.FC<DocumentFormProps> = ({ onDocumentCreated }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmitCreate = async (e: React.FormEvent) => {
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

    
    // const handleSubmitConverter = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     try {
    //         await converDocument({ title, content });
    //         setTitle('');
    //         setContent('');
    //         setError(null);
    //         onDocumentCreated();
    //     } catch (err) {
    //         setError((err as Error).message);
    //     }
    // };

    return (
        <form className='form' onSubmit={handleSubmitCreate}>
            <h2 className='h2'>Crear Documento</h2>
            {error && <p className='error'>{error}</p>}
            <div>
                <label className='label'>Titulo:</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Contenido:</label>
                <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
            </div>
            <button className='button' type="submit">Crear</button>
            {/* <button className='button' type="submit" onSubmit={handleSubmitConverter}>Convertir</button> */}
        </form>
    );
};

export default DocumentForm;