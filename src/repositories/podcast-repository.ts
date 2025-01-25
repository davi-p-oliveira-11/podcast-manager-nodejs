import fs from "fs";
import path from "path";
import { Podcast } from "../models/podcast-model";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (): Promise<Podcast[]> => {
  const rawData = fs.readFileSync(pathData, "utf-8");
  const jsonFile = JSON.parse(rawData);
  return jsonFile;
};
