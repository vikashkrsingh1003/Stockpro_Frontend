# StockPro Angular Frontend

Angular conversion of the StockPro React frontend.

It reads the backend API base URL from `.env`:

```txt
http://localhost:8080/api/v1
```

Copy `.env.example` to `.env` if needed, then update values for your local backend.

## Run

Use Node 22 LTS (Angular 18 does not support Node 24):

```bash
nvm use
```

```bash
npm install
npm start
```

## Build

```bash
npm run build
```
