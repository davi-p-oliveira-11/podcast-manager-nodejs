import { IncomingMessage, request, ServerResponse } from "http";

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end({
    name: "felipe",
  });
};
