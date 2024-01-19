"use client"

import { useViewerToken } from "@/hooks/use-viewer-token";
import { User, Stream } from "@prisma/client";
import { LiveKitRoom } from "@livekit/components-react";
import { Video } from "./video";
import { useChatSidebar } from "@/store/use-chat-sidebar";
import { cn } from "@/lib/utils";
import { Chat } from "./chat";
import { ChatToggle } from "./chat-toggle";
interface StreamPlayersProps {
    user: User & { stream: Stream | null };
    stream: Stream;
    isFollowing: boolean;
}

export const StreamPlayer = ({
    user,
    stream,
    isFollowing
}: StreamPlayersProps) => {
    const {
        token,
        name,
        identity
    } = useViewerToken(user.id);

    const { collapsed } = useChatSidebar((state) => state);

    if (!token || !name || !identity) {
        return (
            <div>
                Cannot watch the stream
            </div>
        )
    }

    return (
        <>
            {collapsed && (
                <div className="hidden lg:block fixed top-[100px] right-2 z-50">
                    <ChatToggle />
                </div>
            )}
            <LiveKitRoom
                serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_WS_URL}
                token={token}
                className={cn(
                    "grid h-full grid-cols-1 lg:gap-y-0 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6",
                    collapsed && "lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2"
                )}
            >
                <div className="col-span-1 pb-10 space-y-4 lg:col-span-2 xl:col-span-2 2xl:col-span-5 lg:overflow-y-auto hidden-scrollbar">
                    <Video
                        hostName={user.username}
                        hostIdentity={user.id}
                    />
                </div>
                <div className={cn(
                    "col-span-1",
                    collapsed && "hidden"
                )}>
                    <Chat
                        viewerName={name}
                        hostName={user.username}
                        hostIdentity={user.id}
                        isFollowing={isFollowing}
                        isChatEnabled={stream.isChatEnabled}
                        isChatDelayed={stream.isChatDelayed}
                        isChatFollowersOnly={stream.isChatFollowersOnly}
                    />
                </div>
            </LiveKitRoom>
        </>
    )
}