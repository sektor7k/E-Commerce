"use client"

import { User, Stream } from "@prisma/client";
import { } from "stream"

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
    return (
        <div>
            Stream Player
        </div>
    )
}