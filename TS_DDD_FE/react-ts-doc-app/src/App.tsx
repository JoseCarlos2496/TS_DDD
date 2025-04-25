import React, { useState } from 'react';
import DocumentForm from './components/DocumentForm';
import DocumentList from './components/DocumentList';
import DocumentView from './components/DocumentView';
import { useDocuments } from './hooks/useDocuments';

const App: React.FC = () => {
    const { documents, error } = useDocuments();
    const [selectedDocumentId, setSelectedDocumentId] = useState<string | null>(null);

    return (
        <div>
            <h1>Document Management</h1>
            {error && <p>{error}</p>}
            <DocumentForm onDocumentCreated={() => window.location.reload()} />
            <DocumentList documents={documents} onSelectDocument={setSelectedDocumentId} />
            {selectedDocumentId && <DocumentView documentId={selectedDocumentId} />}
        </div>
    );
};

export default App;