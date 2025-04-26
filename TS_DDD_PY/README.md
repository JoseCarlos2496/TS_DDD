# TS_DDD_PY Project

This project is a Flask web application that provides an endpoint to convert JSON content into a PDF file. The application listens for POST requests at the `/convert` endpoint and returns a PDF file containing the provided content.

## Project Structure

```
TS_DDD_PY
├── app.py               # Main application code
├── Dockerfile           # Dockerfile to build the application image
├── requirements.txt     # Python dependencies
└── README.md            # Project documentation
```

## Requirements

- Python 3.x
- Docker

## Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd TS_DDD_PY
   ```

2. Build the Docker image:

   ```
   docker build -t ts_ddd_py .
   ```

## Running the Application

To run the application, use the following command:

```
docker run -p 6000:6000 ts_ddd_py
```

The application will be accessible at `http://localhost:6000`.

## Usage

To convert content to PDF, send a POST request to the `/convert` endpoint with a JSON body containing the `content` field:

```json
{
    "content": "Your text here"
}
```

The response will be a PDF file containing the provided content.