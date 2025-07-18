# Checkout 51 Server

This is the backend API for the **Checkout 51** offers app, built with ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?flat&logo=node.js&logoColor=white) and ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?flat&logo=express&logoColor=%2361DAFB).

## Postman Test
Following are two examples of testing the API with `sort` values, i.e., `name` and `cashback`:

>  1. **sort=name**

![image](https://github.com/user-attachments/assets/3088ef48-6332-4cf5-a314-c5ed706f667e)
---
>  2. **sort=cashback**

![image](https://github.com/user-attachments/assets/4aa0ca81-8cdc-4f65-a847-7eeb8cda37c2)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Navigate to the `server` directory:
   ```sh
   cd server
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Running the Server

Start the server with:

```sh
npm start
```

The server will run on the port specified in the `.env` file (default: `5000`).

### Development Mode

For automatic restarts on file changes, use:

```sh
npm run dev
```

## API Endpoints

- `GET /api/offers`  
  Returns a list of available offers as a JSON array.

  - Optional query parameter:  
    - `sort=name` — Returns offers sorted alphabetically by name  
    - `sort=cashback` — Returns offers sorted by cashback (descending)  
    - Any other value for `sort` returns a 400 error with `{ error: "Invalid sort parameter" }`

  - If no `sort` parameter is provided, offers are returned in their original order.

## Project Structure

- `app.js` – Main Express app entry point.
- `routes/offers.js` – Offers API route.
- `data/c51.json` – Offers data source.

## Environment Variables

- `PORT` – The port number for the server (set in `.env`).

## Running Tests

Tests are located in the `tests` directory.  
To run tests:

```sh
npm test
```

## License

MIT
