import { GET } from "@/app/api/network-manager";
import { request_urls, RequestUrls } from "@/data";

type SelectedTab = keyof RequestUrls;

export const fetchSocialPosts = async (
  selectedTab: SelectedTab,
  username: string
) => {
  const req_url: string = request_urls[selectedTab](username);
  const response = await GET(req_url);
  if (response.data && response.data.items) {
    return response.data.items;
  }
};
