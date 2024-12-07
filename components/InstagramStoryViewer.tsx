import { useEffect, useState } from "react";
import { Tabs } from "@mantine/core";
import { request_urls } from "@/data";
import { fetchSocialPosts } from "@/utils/fetchSocialPosts";
import { fetchSocialHighlights } from "@/utils/fetchSocialHighlights";
import { Button as UIButton } from "./ui/MovingBorders";
import MagicButton from "./MagicButton";
import { FiDownload } from "react-icons/fi";


type SelectedTab = keyof typeof request_urls;

const InstagramStoryViewer = () => {
  const [username, setUsername] = useState("");
  const [stories, setStories] = useState<PostItem[]>([]);
  const [highlights, setHighlights] = useState<HighlightItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState<SelectedTab>("posts");
  const [isDownloadingMedia, setIsDownloadingMedia] = useState<Record<number, boolean>>({});

  const fetchStories = async () => {
    if (!username) return;

    setLoading(true);
    setError(null);
    setStories([]);

    try {
      const data: any = await fetchSocialPosts(selectedTab, username);

      if (!data.length) return setError(`No ${selectedTab} found.`);
      if (selectedTab === "highlights") {
        return setHighlights(data);
      } else {
        return setStories(data);
      }
    } catch (error) {
      setError(`Failed to fetch ${selectedTab}. Please try again later.`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (username) fetchStories();
  }, [selectedTab]);

  const handleClickHighlight = async (item: any) => {
    if (!item) return;

    setLoading(true);
    setError(null);
    setStories([]);

    try {
      const data: any = await fetchSocialHighlights(item.id);

      setStories(data);
    } catch (error) {
      setError("Failed to fetch highlights. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  interface HighlightItem {
    id: string;
    cover_media: any;
    title: string;
  };
  interface PostItem {
    id: string;
    media_type: number;
    video_url: string;
    image_versions: any;
  };

  const downloadMedia = async (url: string, fileName: string, index: number) => {
    try {
      setIsDownloadingMedia((prev) => ({ ...prev, [index]: true }));
      const response = await fetch(url, { mode: 'cors' });
      if (!response.ok) {
        throw new Error(`Failed to fetch video: ${response.statusText}`);
      }
      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error("Error downloading video:", error);
    } finally {
      setIsDownloadingMedia((prev) => ({ ...prev, [index]: false }));
    }
  };


  return (
    <UIButton style={{
      width: "100%", background: "rgb(4,7,29)",
      backgroundColor:
        "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      borderRadius: `calc(1.75rem * 0.96)`,
    }}>
      <div className="w-full p-5 bg-gray-900 text-white rounded-md" style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        borderRadius: `calc(1.75rem * 0.96)`,
      }} >
        <h2 className="text-2xl mb-4">Enter Instagram username </h2>
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

        {selectedTab === "highlights" && highlights.length > 0 && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.25rem",
              flexWrap: "wrap",
              margin: "2rem 0",
              cursor: "pointer",
            }}
          >
            {highlights.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.25rem",
                }}
                onClick={() => handleClickHighlight(item)}
              >
                <img
                  style={{
                    width: "75px",
                    height: "75px",
                    borderRadius: "75px",
                    objectFit: "cover",
                  }}
                  src={`/api/proxy?url=${encodeURIComponent(
                    item.cover_media.cropped_image_version.url
                  )}`}
                />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        )}

        {stories.length > 0 && (
          <Tabs
            color="blue"
            value={selectedTab}
            onChange={(value) =>
              setSelectedTab((value ?? "posts") as SelectedTab)
            }
            mt={"lg"}
            mb={"lg"}
          >
            <Tabs.List style={{ justifyContent: "center" }}>
              <Tabs.Tab bg={"none"} value="posts" style={{ fontSize: "1.25rem" }}>
                POSTS
              </Tabs.Tab>
              <Tabs.Tab
                bg={"none"}
                value="stories"
                style={{ fontSize: "1.25rem" }}
              >
                STORIES
              </Tabs.Tab>
              <Tabs.Tab
                style={{ fontSize: "1.25rem" }}
                bg={"none"}
                value="highlights"
              >
                HIGHLIGHTS
              </Tabs.Tab>
              <Tabs.Tab bg={"none"} value="reels" style={{ fontSize: "1.25rem" }}>
                REELS
              </Tabs.Tab>
            </Tabs.List>
          </Tabs>
        )}

        {loading && <p className="mt-4">Loading...</p>}
        {error && <p className="mt-4 text-red-500">{error}</p>}

        {stories.length > 0 && (
          <div className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stories.map((story, index) => {
                const isVideo = story.media_type === 2;
                const mediaUrl = isVideo
                  ? story.video_url
                  : `/api/proxy?url=${encodeURIComponent(
                    story.image_versions.items[0].url
                  )}`;
                const fileExtension = isVideo ? 'mp4' : 'jpg';
                const fileName = `story-${index + 1}.${fileExtension}`;
                return (
                  <div key={index} className="p-2 bg-gray-800 rounded">
                    {story.media_type === 2 ? (
                      <video
                        controls
                        src={story.video_url}
                        className="w-full h-auto rounded"
                      />
                    ) : (
                      <img
                        src={`/api/proxy?url=${encodeURIComponent(
                          story.image_versions.items[0].url
                        )}`}
                        alt={`Story ${index}`}
                        className="w-full h-auto rounded"
                      />
                    )}
                    <MagicButton
                      title="Download"
                      icon={<FiDownload size={"18px"} />}
                      position="left"
                      fullWidth
                      btnClasses="md:mt-2"
                      handleClick={() => downloadMedia(mediaUrl, fileName, index)}
                      loading={isDownloadingMedia[index] || false}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </UIButton>
  );
};

export default InstagramStoryViewer