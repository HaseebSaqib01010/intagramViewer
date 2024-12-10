export const GET = async (url: string) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "deb030af37msh11c99c2cead7476p1bbce9jsnce0f8d115d41",
        "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
      },
    });
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
