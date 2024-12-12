'use client'

import { fetchUserProfile } from '@/utils/fetchUserProfile'
import { formatNumber } from '@/utils/formatNumbers'
import { Avatar, Badge, Group, Paper, Text, ActionIcon } from '@mantine/core'
import { IconCheck, IconLink } from '@tabler/icons-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";


interface ProfileCardProps {
    username: string
}

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

export default function InstagramProfileCard({
    username
}: ProfileCardProps) {
    const [profileData, setProfileData] = useState<InstagramProfileData | null>(null);
    useEffect(() => {
        async function fetchProfileData() {
            const data = await fetchUserProfile(username);
            setProfileData(data);
        }

        fetchProfileData();

    }, [username])
    if (profileData)
        return (
            <Paper
                className="max-w-md w-full text-white p-4 rounded-lg"
                shadow="sm"
                style={{ background: "none", margin: "0 auto" }}
            >
                <Text style={{ fontSize: "2rem" }} className="mb-4 font-medium">Search result</Text>

                <div className='flex gap-11 items-center justify-between mb-1 mt-9 max-w-md w-full' >
                    <div>
                        <Avatar
                            src={`/api/proxy?url=${encodeURIComponent(
                                profileData?.hd_profile_pic_url_info?.url!
                            )}`}
                            size="xxl"
                            className="border-2 border-gray-700"
                            style={{fontSize:"5rem"}}
                        />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                        <Group>
                            <Link style={{ fontSize: "22px", fontWeight: "600", display: "flex", alignItems: "center", gap: "5px" }} href={`https://instagram.com/${profileData?.username}`} target='_blank' className="font-medium">@{profileData?.username}

                                {profileData?.isVerified && (
                                    <Badge
                                        variant="filled"
                                        className="bg-[#1DA1F2] px-1"
                                        size="sm"
                                    >
                                        <IconCheck size={12} />
                                    </Badge>

                                )}
                                <FaExternalLinkAlt size={12} />
                            </Link>
                        </Group>
                        <Group className="my-4 text-sm" style={{ display: "flex", justifyContent: "space-between", width: "12rem" }}>
                            <div>
                                <Text className="font-medium">{formatNumber(profileData?.media_count)}</Text>
                                <Text size="sm" c="dimmed">posts</Text>
                            </div>
                            <div>
                                <Text className="font-medium">{formatNumber(profileData?.follower_count)}</Text>
                                <Text size="sm" c="dimmed">followers</Text>
                            </div>
                            <div>
                                <Text className="font-medium">{formatNumber(profileData?.following_count)}</Text>
                                <Text size="sm" c="dimmed">following</Text>
                            </div>
                        </Group>

                        <Text className="font-medium mb-2">{profileData?.fullName}</Text>

                        <div className="space-y-1 my-2 " style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                            <Text size="lg" c="" style={{ textAlign:"start" }}>
                                {profileData?.biography}
                            </Text>

                        </div>
                    </div>
                </div>
            </Paper>
        )
}

