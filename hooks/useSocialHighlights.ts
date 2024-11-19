import { GET } from "@/app/api/network-manager";
import { request_urls } from "@/data";

export const useSocialHighlights = async (id: string) => {
  const highlightId = id.split(":")[1];
  const req_url: string = request_urls.highlightsById(highlightId);
  const response = await GET(req_url);

  const data = await response.json();
  if (data.data && data.data.items) {
    return data.data.items;
  }
};
