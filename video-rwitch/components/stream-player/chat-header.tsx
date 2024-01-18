"use client";

import { Skeleton } from "../ui/skeleton";

export const ChatHeader = () => {
    return (
        <div className="relative p-3 border-b ">
            {/* TODO: Togle Chat Sidebar */}
            <p className="font-semibold text-center text-primary">
                Stream Chat
            </p>
            {/* TODO: Toggle Chat Community */}

        </div>
    )
};

export const ChatHeaderSkeleton = () => {
    return (
        <div className="relative hidden p-3 border-b  md:block">
            <Skeleton className="absolute w-6 h-6  left-3 top-3"/>
            <Skeleton className="h-6 mx-auto  w-28"/>
        </div>
    )
}