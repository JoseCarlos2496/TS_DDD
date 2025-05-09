// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const API_BASE_URL = "http://localhost:5000/api";
// const API_BASE_URL_PY = "http://localhost:6000/api";

export const fetchDocuments = async () => {
    const response = await fetch(`${API_BASE_URL}/documents`);
    if (!response.ok) throw new Error('Error al obtener los documentos');
    return response.json();
};

export const fetchDocumentById = async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/documents/${id}`);
    if (!response.ok) throw new Error('Error al obtener el documento');
    return response.json();
};

export const createDocument = async (document: { title: string; content: string }) => {
    const response = await fetch(`${API_BASE_URL}/documents`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(document)
    });

    if (!response.ok) throw new Error('Error al crear el documento');
    return response.json();
};

// export const converDocument = async (document: { title: string; content: string }) => {
//     const response = await fetch(`${API_BASE_URL_PY}/convert`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(document)
//     });

//     if (!response.ok) throw new Error('Error al crear el documento');
//     return response.json();
// };