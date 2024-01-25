import { UserAvatar } from "@/components/user-avatar";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { LiveBadge } from "./live-badge";

interface ThumbnailProps {
    src: string | null;
    fallback: string;
    isLive: boolean;
    username: string;
};

export const Thumbnail = ({
    src,
    fallback,
    isLive,
    username
}: ThumbnailProps) => {
    let content;

    if (!src) {
        content = (
            <div className="flex flex-col items-center justify-center w-full h-full transition-transform rounded-md bg-background gap-y-4 group-hover:translate-x-2 group-hover:-translate-y-1">
                <UserAvatar
                    size="lg"
                    showBadge
                    username={username}
                    imageUrl={fallback}
                    isLive={isLive}
                />
            </div>
        )
    } else {
        content = (
            <Image
                src={src}
                fill
                alt="Thumbnail"
                className="object-cover transition-transform rounded-md group-hover:translate-x-2 group-hover:-translate-y-2"
            />
        )
    }

    return (
        <div className="relative rounded-md cursor-pointer group aspect-video">
            <div className="absolute inset-0 flex items-center transition-opacity bg-blue-600 rounded-md opacity-0 group-hover:opacity-100" />
            {content}
            {isLive && src && (
                <div className="absolute transition-transform top-2 left-2 group-hover:translate-x-2 group-hover:-translate-y-2">
                    <LiveBadge />
                </div>
            )}
        </div>
    )
}

export const ThumbnailSkeleton = () => {
    return (
        <div className="relative cursor-pointer group aspect-video rounded-xl">
            <Skeleton className="w-full h-full " />
        </div>
    )
}
