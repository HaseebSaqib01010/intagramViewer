import { GET } from "@/app/api/network-manager";
import { request_urls } from "@/data";

export const fetchSocialHighlights = async (id: string) => {
  const highlightId = id.split(":")[1];
  const req_url: string = request_urls.highlightsById(highlightId);
  const response = await GET(req_url);

  if (response.data && response.data.items) {
    return response.data.items;
  }
};
