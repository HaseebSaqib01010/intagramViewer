import dotenv from "dotenv";
dotenv.config();
export const GET = async (url: string) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.RAPID_API_KEY,
        "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
      },
    });
    console.log("Response status:", response.status);
    console.log("Response headers:", response.headers);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Data fetched successfully:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
