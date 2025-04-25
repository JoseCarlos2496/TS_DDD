# ddd-rest-api

This project is a TypeScript REST API designed following Domain-Driven Design (DDD) principles. It serves as a template for building scalable and maintainable applications by organizing code into distinct layers and adhering to best practices.

## Project Structure

```
ddd-rest-api
├── src
│   ├── application
│   │   ├── services          # Business logic services
│   │   └── dtos              # Data Transfer Objects
│   ├── domain
│   │   ├── entities          # Core domain entities
│   │   ├── repositories       # Domain repositories
│   │   └── value-objects      # Value objects
│   ├── infrastructure
│   │   ├── database           # Database models
│   │   ├── repositories       # Repository implementations
│   │   └── config             # Configuration files
│   ├── interfaces
│   │   ├── controllers        # HTTP request handlers
│   │   └── routes             # Route definitions
│   └── main.ts                # Application entry point
├── package.json                # NPM package configuration
├── tsconfig.json              # TypeScript configuration
└── README.md                  # Project documentation
```

## Getting Started

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd ddd-rest-api
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

## Features

- **Domain-Driven Design:** The project is structured around DDD principles, promoting a clear separation of concerns.
- **TypeScript:** Strongly typed language that enhances code quality and maintainability.
- **RESTful API:** Implements a RESTful architecture for handling HTTP requests and responses.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you'd like to add.

## License

This project is licensed under the MIT License. See the LICENSE file for details.