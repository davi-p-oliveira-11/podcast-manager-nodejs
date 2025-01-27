# Podcast Manager

## Description

**Podcast Manager** is a Netflix-style application designed to centralize video podcast episodes, categorized by themes, and provide filtering options based on podcast names.

## Domain

The application is focused on video podcasts.

## Features

- **List podcast episodes** in category sessions such as:
  - Saúde (Health)
  - Fitness
  - Mentalidade (Mindset)
  - Humor (Comedy)
- **Filter episodes** by podcast name.

---

## How It Works

### Feature: List Podcast Episodes by Category

#### Implementation Details

- **HTTP Method**: `GET`
- **Endpoint**: `/api/podcasts`
- **Response**: Returns a list of podcast episodes.

#### Example Response:

```json
[
  {
    "podcastName": "flow",
    "episodeName": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/hq720.jpg",
    "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
    "categories": ["saude", "esporte"]
  },
  {
    "podcastName": "flow",
    "episodeName": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/hq720.jpg",
    "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
    "categories": ["saude", "esporte"]
  }
]
```

---

## Code Overview

### Server Setup

The application uses Node.js to create an HTTP server that listens for specific endpoints and responds with podcast data.

#### Example Code:

```typescript
import * as http from "http";
import {
  getFilterEpisodes,
  getListEpisodes,
} from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

export const app = async (
  request: http.IncomingMessage,
  res: http.ServerResponse
) => {
  const baseUrl = request.url?.split("?")[0];

  // List podcasts
  if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
    await getListEpisodes(request, res);
  }

  // Filter episodes by podcast name
  if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
    await getFilterEpisodes(request, res);
  }
};
```

---

## How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/davi-p-oliveira-11/podcast-manager-nodejs
   cd podcast-manager
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start:dev
   ```

4. Access the API:
   - List all podcasts: `http://localhost:3333/api/podcasts`
   - Filter podcasts: `http://localhost:3333/api/episode?p=flow`

---

### Used Technologies

The project leverages the following technologies and tools:

- **[Node.js](https://nodejs.org/)**: A JavaScript runtime used to build the backend of the application.
- **[TypeScript](https://www.typescriptlang.org/)**: A strongly typed programming language that builds on JavaScript, adding static type definitions.
- **[tsx](https://github.com/esbuild-kit/tsx)**: A fast TypeScript runtime and loader, used for running and watching TypeScript files during development.
- **[tsup](https://tsup.egoist.dev/)**: A simple bundler for TypeScript projects, used to build the production-ready code.
- **[@types/node](https://www.npmjs.com/package/@types/node)**: Type definitions for Node.js, ensuring better type safety in TypeScript projects.

These technologies ensure efficient development, type safety, and optimized builds for the project.

## Dependencies

- **Node.js**
- **TypeScript**

---

## License

This project is licensed under the MIT License.
