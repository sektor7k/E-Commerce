"use client"

import { UserAvatar } from "../user-avatar";

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

    return (
        <div className="flex flex-col items-start justify-between px-4 lg:flex-row gap-y-4 lg:gap-y-0">
            <div className="flex items-center gap-x-3">
                <UserAvatar
                    imageUrl={imageUrl}
                    username={hostName}
                    size={"lg"}
                    isLive={true}
                    showBadge
                />
                <div className="space-y-1 ">
                    <div className="flex items-center gap-x-2">
                        <h2 className="text-lg font-semibold ">
                            {hostName}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}