import { GET } from "@/app/api/network-manager";
import { request_urls } from "@/data";

export const fetchUserProfile = async (username: string) => {
  const req_url: string = request_urls.userProfile(username);
  console.log("req_url", req_url);
  const response = await GET(req_url);
  console.log("response: ", response);

  const data = await response.json();

  console.log("data: ", data.data);
  if (data.data) {
    return data.data;
  }
};
