import * as http from "http";

import {
  getFilterEpisodes,
  getListEpisodes,
} from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";

const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    // query string
    // http://localhost:3333/api/episode?p=flow
    const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""];

    // listar podcasts
    if (req.method === "GET" && baseUrl === Routes.LIST) {
      await getListEpisodes(req, res);
    }

    if (req.method === "GET" && baseUrl === Routes.EPISODE) {
      await getFilterEpisodes(req, res);
    }
  }
);

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Server initialized in port ${port}`);
});
