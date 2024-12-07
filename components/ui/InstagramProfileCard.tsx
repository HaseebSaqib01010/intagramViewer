import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Instagram } from 'lucide-react'
import { fetchUserProfile } from "../../utils/fetchUserProfile";

interface InstagramProfileData {
    username: string;
    fullName: string;
    bio: string;
    profilePicture: string;
    posts: number;
    followers: number;
    following: number;
    isVerified: boolean;
}

export default function InstagramProfileCard({ username }) {
    // This is placeholder data. In a real application, you'd fetch this data from an API
    const [profileData, setProfileData] = useState(null);
    useEffect(() => {
        async function fetchProfileData() {
            console.log('username: ', username)
            const data = await fetchUserProfile(username);
            console.log('data: ', data)
            setProfileData(data);
        }

        fetchProfileData();

    }, [username])



    console.log('profileData: ', profileData)
    // const profileData: InstagramProfileData = {
    //     username: "travel_enthusiast",
    //     fullName: "Alex Wanderlust",
    //     bio: "🌍 Explorer | 📸 Photographer | ✈️ 30 countries and counting!",
    //     profilePicture: "/placeholder.svg?height=100&width=100",
    //     posts: 248,
    //     followers: 10500,
    //     following: 305,
    //     isVerified: true,
    // }

    return (
        <Card className="w-full max-w-md mx-auto bg-gray-900 text-gray-100">
            <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="w-24 h-24 border-2 border-primary">
                    <AvatarImage
                        src={`/api/proxy?url=${encodeURIComponent(
                            profileData?.hd_profile_pic_url_info?.url
                        )}`}
                        // src={profileData?.hd_profile_pic_url_info?.url} 
                        alt={profileData?.username} />
                    <AvatarFallback>{profileData?.username?.slice(0, 2)?.toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <h2 className="text-2xl font-bold">{profileData?.username}</h2>
                        {profileData?.isVerified && (
                            <Badge variant="secondary" className="bg-blue-600 text-white">
                                <Instagram className="w-3 h-3 mr-1" />
                                Verified
                            </Badge>
                        )}
                    </div>
                    <p className="text-gray-400">{profileData?.fullName}</p>
                </div>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                    <div>
                        <p className="text-2xl font-bold text-white">{profileData?.media_count}</p>
                        <p className="text-sm text-gray-400">Posts</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-white">{profileData?.follower_count?.toLocaleString()}</p>
                        <p className="text-sm text-gray-400">Followers</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-white">{profileData?.following_count?.toLocaleString()}</p>
                        <p className="text-sm text-gray-400">Following</p>
                    </div>
                </div>
                <p className="text-sm whitespace-pre-wrap text-gray-300">{profileData?.bio}</p>
            </CardContent>
        </Card>
    )
}  