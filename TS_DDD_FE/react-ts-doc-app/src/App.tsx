import React, { useState } from 'react';
import DocumentForm from './components/DocumentForm';
import DocumentList from './components/DocumentList';
import DocumentView from './components/DocumentView';
import { useDocuments } from './hooks/useDocuments';
import { Tabs, Tab } from '@mui/material';
import './styles/App.module.css';


const App: React.FC = () => {
    const { documents, error } = useDocuments();
    const [selectedDocumentId, setSelectedDocumentId] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };

    return (
        <div>
            <h1 className='h1'>Administración de Documentos</h1>
            {error && <p className='.errorMessage'>{error}</p>}
            <div className='tabsContainer'>
                <Tabs value={activeTab} onChange={handleTabChange} aria-label="Document Tabs">
                    <Tab label="Crear Documento" />
                    <Tab label="Listar Documento(s)" />
                    <Tab label="Ver Documento" />
                </Tabs>
            </div>
            <div className='tabContent'>
                {activeTab === 0 && (
                    <DocumentForm onDocumentCreated={() => window.location.reload()} />
                )}
                {activeTab === 1 && (
                    <DocumentList
                        documents={documents}
                        onSelectDocument={setSelectedDocumentId}
                    />
                )}
                {activeTab === 2 && (
                    selectedDocumentId ? (
                        <DocumentView documentId={selectedDocumentId} />
                    ) : (
                        <p>Por favor seleccione un documento en la pestaña anterior para visualizar.</p>
                    )
                )}
            </div>
        </div>
    );
};

export default App;