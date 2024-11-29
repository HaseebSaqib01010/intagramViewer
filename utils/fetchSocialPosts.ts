import { GET } from "@/app/api/network-manager";
import { request_urls, RequestUrls } from "@/data";

type SelectedTab = keyof RequestUrls;

export const fetchSocialPosts = async (
  selectedTab: SelectedTab,
  username: string
) => {
  const req_url: string = request_urls[selectedTab](username);
  const response = await GET(req_url);

  const data = await response.json();
  if (data.data && data.data.items) {
    return data.data.items;
  }
};
