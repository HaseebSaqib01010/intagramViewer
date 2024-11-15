import { useState } from "react";

const InstagramStoryViewer = () => {
  const [username, setUsername] = useState("");
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchStories = async () => {
    if (!username) return;

    setLoading(true);
    setError(null);
    setStories([]);

    try {
      const response = await fetch(
        `https://instagram-scraper-api2.p.rapidapi.com/v1/stories?username_or_id_or_url=${username}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
            "x-rapidapi-key": "f70b14a6a5mshfac7225b7a79cf6p10675cjsn3e71dfbc7127",
          },
        }
      );

      const data = await response.json();
      if (data.data && data.data.items) {
        setStories(data.data.items);
      } else {
        setError("No stories found or an error occurred.");
      }
    } catch (error) {
      setError("Failed to fetch stories. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
console.log('stories: ', stories)
  return (
    <div className="w-full p-5 z-1 bg-gray-900 text-white rounded-md">
      <h2 className="text-2xl mb-4">Instagram Story Viewerrrrrr</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter Instagram Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
        />
      </div>
      <button
        onClick={fetchStories}
        className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
      >
        Fetch Stories
      </button>

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {stories.length > 0 && (
        <div className="mt-4">
          <h3 className="text-xl mb-2">Stories:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stories.map((story, index) => (
             <div key={index} className="p-2 bg-gray-800 rounded">
  {story.media_type === 2 ? (
    <video
      controls
      // src={`app/api/proxy?url=${encodeURIComponent(story.image_versions.items[0].url)}`}
      src={story.video_url}
      className="w-full h-auto rounded"
    />
  ) : (
    <img
      src={`app/api/proxy?url=${encodeURIComponent(story.image_versions.items[0].url)}`}
      alt={`Story ${index}`}
      className="w-full h-auto rounded"
    />
  )}
</div>

            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InstagramStoryViewer;
