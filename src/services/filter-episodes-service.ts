import { repositoryPodcast } from "../repositories/podcast-repository";
import { StatusCode } from "../utils/status-code";
import { PodcastTransferModel } from "../models/filter-podcast-model";

export const serviceFilterEpisodes = async (
  podcastName: string | undefined
): Promise<PodcastTransferModel> => {
  // set the interface
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };

  // searching for the data
  const queryString = podcastName?.split("?p=")[1] || "";
  const data = await repositoryPodcast(queryString);

  // check if there is content
  responseFormat.statusCode =
    data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;

  responseFormat.body = data;

  return responseFormat;
};
