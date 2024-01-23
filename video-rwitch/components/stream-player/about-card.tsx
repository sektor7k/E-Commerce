"use client"

import { VerifiedMark } from "../verified-mark";

interface AboutCardProps {
    hostName: string;
    hostIdentity: string;
    viewerIdentity: string;
    bio: string | null;
    followedByCount: number;
}

export const AboutCard = ({
    hostName,
    hostIdentity,
    viewerIdentity,
    bio,
    followedByCount,
}: AboutCardProps) => {

    const hostAsViewer = `host-${hostIdentity}`;
    const isHost = viewerIdentity === hostAsViewer;

    const followedByLabel = followedByCount === 1 ? "follower" : "followers";

    return (
        <div className="px-4 ">
            <div className="flex flex-col p-6 group rounded-xl bg-background lg:p-10 gap-y-3">
                <div className="flex items-center justify-between ">
                    <div className="flex items-center text-lg font-semibold gap-x-2 lg:text-2xl">
                        About {hostName}
                        <VerifiedMark />
                    </div>
                    {isHost && (
                        <p>EDIT</p>
                    )}
                </div>
                <div className="text-sm text-muted-foreground">
                    <span className="font-semibold text-primary">{followedByCount}</span> {followedByLabel}
                </div>
                <p className="text-sm ">
                    {bio || "This user prefers to keep an air of mystery about them"}
                </p>
            </div>
        </div>
    )
}