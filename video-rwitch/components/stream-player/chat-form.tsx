"use client"

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { isFollowingUser } from "@/lib/follow-service";
import { ChatInfo } from "./chat-info";



interface ChatFormProps {
    onSubmit: () => void;
    value: string;
    onChange: (value: string) => void;
    hidden: boolean;
    isFollowersOnly: boolean;
    isDelayed: boolean;
    isFollowing: boolean;
}
export const ChatForm = ({
    onSubmit,
    value,
    onChange,
    hidden,
    isFollowersOnly,
    isDelayed,
    isFollowing
}: ChatFormProps) => {

    const [isDelayBlocked, setIsDelayBlocked] = useState(false);
    const isFollowerOnlyAndNotFollowing = isFollowersOnly && !isFollowing;
    const isDisabled = hidden || isDelayBlocked || isFollowerOnlyAndNotFollowing;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();

        if (!value || isDisabled) return;

        if (isDelayed && !isDelayBlocked) {
            setIsDelayBlocked(true);
            setTimeout(() => {
                setIsDelayBlocked(false);
                onSubmit();
            }, 3000);
        } else {
            onSubmit();
        }
    }

    if (hidden) {
        return null;
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center p-3 gap-y-4"
        >
            <div className="w-full ">
                <ChatInfo
                    isDelayed={isDelayed}
                    isFollowersOnly={isFollowersOnly}
                />

                <Input
                    onChange={(e) => onChange(e.target.value)}
                    value={value}
                    disabled={isDisabled}
                    placeholder="Send a message"
                    className={cn(
                        "border-white/10",
                        isFollowersOnly && "rounded-t-none border-t-0"
                    )}
                />
            </div>
            <div>
                <Button
                    type="submit"
                    variant={"primary"}
                    size={"sm"}
                    disabled={isDisabled}
                >
                    Chat
                </Button>
            </div>

        </form>
    );
};

export const ChatFormSkeleton = () => {
    return (
        <div className="flex flex-col items-center p-3 gap-y-4">
            <Skeleton className="w-full h-10 " />
            <div className="flex items-center ml-auto gap-x-2">
                <Skeleton className=" h-7 w-7" />
                <Skeleton className="w-12 h-7" />
            </div>
        </div>
    )
}