"use client"

import { useParticipants, useRemoteParticipant } from "@livekit/components-react";
import { UserAvatar, UserAvatarSkeleton } from "../user-avatar";
import { VerifiedMark } from "../verified-mark";
import { UserIcon } from "lucide-react";
import { ActionSkeleton, Actions } from "./actions";
import { Skeleton } from "../ui/skeleton";

interface HeaderProps {
    hostName: string;
    hostIdentity: string;
    viewerIdentity: string;
    imageUrl: string;
    isFollowing: boolean;
    name: string;
}


export const Header = ({
    hostName,
    hostIdentity,
    viewerIdentity,
    imageUrl,
    isFollowing,
    name
}: HeaderProps) => {
    const participants = useParticipants();
    const participant = useRemoteParticipant(hostIdentity);

    const isLive = !!participant;
    const participantCount = participants.length - 1;

    const hostAsViewer = `host-${hostIdentity}`;
    const isHost = viewerIdentity === hostAsViewer;

    return (
        <div className="flex flex-col items-start justify-between px-4 lg:flex-row gap-y-4 lg:gap-y-0">
            <div className="flex items-center gap-x-3">
                <UserAvatar
                    imageUrl={imageUrl}
                    username={hostName}
                    size={"lg"}
                    isLive={isLive}
                    showBadge
                />
                <div className="space-y-1 ">
                    <div className="flex items-center gap-x-2">
                        <h2 className="text-lg font-semibold ">
                            {hostName}
                        </h2>
                        <VerifiedMark />
                    </div>
                    <p className="text-sm font-semibold ">
                        {name}
                    </p>
                    {isLive ? (
                        <div className="flex items-center text-xs font-semibold gap-x-1 text-rose-500">
                            <UserIcon className="w-4 h-4 " />
                            <p>
                                {participantCount} {participantCount === 1 ? "viewer" : "viewers"}
                            </p>
                        </div>
                    ) : (
                        <p className="text-xs font-semibold text-muted-foreground">
                            Offline
                        </p>
                    )}
                </div>
            </div>
            <Actions
                isFollowing={isFollowing}
                hostIdentity={hostIdentity}
                isHost={isHost}
            />
        </div>
    )
}

export const HeaderSkeleton = () => {
    return (
        <div className="flex flex-col items-start justify-between px-4 lg:flex-row gap-y-4 lg:gap-y-0">
            <div className="flex items-center gap-x-2">
                <UserAvatarSkeleton size={"lg"} />
                <div className="space-y-2 ">
                    <Skeleton className="w-32 h-6 " />
                    <Skeleton className="w-24 h-4 " />
                </div>
            </div>
            <ActionSkeleton />
        </div>
    )
}