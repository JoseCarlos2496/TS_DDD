# React TypeScript Document Application

This is a simple React application built with TypeScript that allows users to create, list, and view documents. The application is designed to be responsive and user-friendly, utilizing hooks for state management and CSS modules for styling.

## Features

- **Create Document**: Users can create a new document by providing a title and content.
- **List Documents**: All created documents are listed for easy access.
- **View Document**: Users can click on a document to view its content.
- **Error Handling**: The application includes error boundaries to catch and display errors gracefully.
- **Responsive Design**: The application is styled to be responsive across different devices.

## Project Structure

```
react-ts-doc-app
├── public
│   ├── index.html
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── DocumentForm.tsx
│   │   ├── DocumentList.tsx
│   │   ├── DocumentView.tsx
│   │   └── ErrorBoundary.tsx
│   ├── hooks
│   │   └── useDocuments.ts
│   ├── styles
│   │   ├── DocumentForm.module.css
│   │   ├── DocumentList.module.css
│   │   └── DocumentView.module.css
│   ├── utils
│   │   └── errorHandler.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
├── README.md
└── .gitignore
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd react-ts-doc-app
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```
This will launch the application in your default web browser.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License.