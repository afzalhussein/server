# Checkout 51 Server

This is the backend API for the Checkout 51 offers app, built with Node.js and Express.

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

## Project Structure

- `app.js` – Main Express app entry point.
- `routes/offers.js` – Offers API route.
- `data/c51.json` – Offers data source.

## Environment Variables

- `PORT` – The port number for the server (set in `.env`).

## License

MIT