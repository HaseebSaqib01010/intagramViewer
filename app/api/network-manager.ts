export const GET = async (url: string) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
      "x-rapidapi-key": "f70b14a6a5mshfac7225b7a79cf6p10675cjsn3e71dfbc7127",
    },
  });
  return response;
};
