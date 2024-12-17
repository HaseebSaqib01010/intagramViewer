import { useEffect, useState } from "react";
import { Tabs } from "@mantine/core";
import { request_urls } from "@/data";
import { fetchSocialPosts } from "@/utils/fetchSocialPosts";
import { fetchSocialHighlights } from "@/utils/fetchSocialHighlights";
import { Button as UIButton } from "./ui/MovingBorders";
import MagicButton from "./MagicButton";
import { FiDownload } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import InstagramProfileCard from "./ui/InstagramProfileCard";
import { fetchUserProfile } from "@/utils/fetchUserProfile";
import "./components.css";
type SelectedTab = keyof typeof request_urls;

interface InstagramProfileData {
  username: string;
  fullName: string;
  biography: string;
  hd_profile_pic_url_info: {
    url: string;
  };
  media_count: number;
  follower_count: number;
  following_count: number;
  isVerified: boolean;
}

const InstagramStoryViewer = () => {
  const [username, setUsername] = useState("");
  const [stories, setStories] = useState<PostItem[] | null>(null);
  const [highlights, setHighlights] = useState<HighlightItem[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [profileLoading, setProfileLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState<SelectedTab>("posts");
  const [isDownloadingMedia, setIsDownloadingMedia] = useState<Record<number, boolean>>({});
  const [isFetchProfile, setisFetchProfile] = useState(false);

  const [profileData, setProfileData] = useState<InstagramProfileData | null>(null);

  const fetchProfile = async () => {
    try {
      setProfileLoading(true);
      const data = await fetchUserProfile(username);
      setProfileData(data);
    } catch (error) {
      console.error('Failed to fetch profile:', error);
    } finally {
      setProfileLoading(false);
    }
  };

  useEffect(() => {
    if (username && loading && isFetchProfile) fetchProfile();
  }, [username, loading, isFetchProfile]);



  const fetchStories = async (e?: any, profileFetchMode?: boolean) => {
    e?.preventDefault();
    if (!username) return;

    if (profileFetchMode) setisFetchProfile(true);
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
    } catch (error: any) {
      const errorStr: string = error.toString();
      if (errorStr.includes('status: 404')) {
        setError(`Can not fetch data from a Private Account `);
      } else {
        setError(`Failed to fetch ${selectedTab}. Please try again later.`);

      }
    } finally {
      if (profileFetchMode) setisFetchProfile(false);
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
      useEffect(() => {
       
        if (typeof document !== "undefined") {
          const blob = await response.blob();
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = fileName;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(link.href);
        }
      }, []);
 
    } catch (error) {
      console.error("Error downloading video:", error);
    } finally {
      setIsDownloadingMedia((prev) => ({ ...prev, [index]: false }));
    }
  };
  // const onKeyPressHandler = (e: any) => {
  //   if (e.key === 'Enter') {
  //     fetchStories();
  //   }
  // }

  console.log('error: ', error)

  return (
    <UIButton style={{
      cursor: "auto",
      width: "100%", background: "rgb(4,7,29)",
      backgroundColor:
        "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      borderRadius: `calc(1.75rem * 0.96)`,
      margin:" auto"
    }}>
      <div className="w-full p-5 bg-gray-900 text-white rounded-md" style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        borderRadius: `calc(1.75rem * 0.96)`,
      }} >
        <div className="mb-0 relative">
          <form onSubmit={(e) => fetchStories(e, true)}>
            <input
              type="text"
              placeholder="Enter Instagram Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="inp-sec w-full rounded bg-gray-700 text-white focus:outline-none pl-4 pr-12"
            />
            <button
              type="submit"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
                />
              </svg>
            </button>
          </form>
        </div>


        {(stories || highlights) && (
          <>
            <div className="m-0">
              <InstagramProfileCard username={username} />
            </div>
            <Tabs
              color="black"
              value={selectedTab}
              onChange={(value) =>
                setSelectedTab((value ?? "posts") as SelectedTab)
              }
              mt={"lg"}
              mb={"lg"}
            >
              <Tabs.List style={{ justifyContent: "center" }}>
                <Tabs.Tab bg={"none"} value="posts" style={{ fontSize: "1.25rem" }}>
                  <MagicButton title="POSTS" />

                </Tabs.Tab>
                <Tabs.Tab
                className="tab-sec"
                  bg={"none"}
                  value="stories"
                  style={{ fontSize: "1.25rem" }}
                >
                  <MagicButton title="STORIES" />
                </Tabs.Tab>
                <Tabs.Tab
                  style={{ fontSize: "1.25rem" }}
                  bg={"none"}
                  value="highlights"
                >
                  <MagicButton title="HIGHLIGHTS" />
                </Tabs.Tab>
                <Tabs.Tab bg={"none"} value="reels" style={{ fontSize: "1.25rem" }}>
                  <MagicButton title="REELS" />
                </Tabs.Tab>
              </Tabs.List>
            </Tabs>
          </>
        )}

        {error && <p className="mt-4 text-red-500">{error}</p>}

        {selectedTab === "highlights" && highlights && (
          <>
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
          </>
        )}

        {stories && stories.length > 0 && (
          <div className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-content-center">
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
                  <div key={index} style={{ height: "fit-content" }} className="p-2 bg-gray-800 rounded">
                    <div className="" style={{ flex: 1, height: "480px", width: "100%", overflow: "hidden" }}>
                      {story.media_type === 2 ? (
                        <video
                          controls
                          src={story.video_url}
                          className="w-full  rounded"
                          style={{ width: "100%", objectFit: "cover" }}
                        />
                      ) : (
                        <img
                          src={`/api/proxy?url=${encodeURIComponent(
                            story.image_versions.items[0].url
                          )}`}
                          alt={`Story ${index}`}
                          className="w-full  rounded"
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      )}
                    </div>
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