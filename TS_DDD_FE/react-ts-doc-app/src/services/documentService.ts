const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchDocuments = async () => {
    const response = await fetch(`${API_BASE_URL}/documents`);
    if (!response.ok) throw new Error('Failed to fetch documents');
    return response.json();
};

export const fetchDocumentById = async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/documents/${id}`);
    if (!response.ok) throw new Error('Failed to fetch document');
    return response.json();
};

export const createDocument = async (document: { title: string; content: string }) => {
    const response = await fetch(`${API_BASE_URL}/documents`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(document),
    });
    if (!response.ok) throw new Error('Failed to create document');
    return response.json();
};