# Simple Node App

A small Express.js application with a health-style root endpoint and Jest/Supertest tests.

## Requirements

- Node.js 22 or newer
- npm
- Docker and Docker Compose (optional)

## Install

```bash
npm install
```

## Run locally

Start the server on port `6000` by default:

```bash
npm start
```

The server is available at <http://localhost:6000>.

To use another port, set `PORT` before starting the app:

```bash
PORT=3000 npm start
```

On PowerShell:

```powershell
$env:PORT=3000; npm start
```

## API

### `GET /`

Returns a successful response when the server is running:

```json
{
  "message": "Server is running"
}
```

## Development

Run the application with the development script:

```bash
npm run dev
```

Run the test suite:

```bash
npm test
```

Generate a coverage report:

```bash
npm run test:coverage
```

## Docker

Build and run the service with Docker Compose on port `4200`:

```bash
PORT=4200 docker compose up --build
```

On PowerShell:

```powershell
$env:PORT=4200; docker compose up --build
```

The API is then available at <http://localhost:4200>.

Stop the service with:

```bash
docker compose down
```
