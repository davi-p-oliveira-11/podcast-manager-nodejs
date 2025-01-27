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
  // query string
  // http://localhost:3333/api/episode?p=flow
  const baseUrl = request.url?.split("?")[0];

  // listar podcasts
  if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
    await getListEpisodes(request, res);
  }

  if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
    await getFilterEpisodes(request, res);
  }
};
