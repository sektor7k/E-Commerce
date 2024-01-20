"use client"


import { cn, stringToColor } from "@/lib/utils";


interface CommunityItemProps {
    hostName: string;
    viewerName: string;
    participantName?: string;
    participantIdentity: string;
}

export const CommunityItem = ({
    hostName,
    viewerName,
    participantName,
    participantIdentity
}: CommunityItemProps) => {

   

    const color = stringToColor(participantName || "");
    const isSelf = participantName === viewerName;
    const isHost = viewerName === hostName;

   

    return (
        <div className={cn(
            "group flex items-center justify-between w-full p-2 rounded-md text-sm hover:bg-white/5",
           
        )}>
            <p style={{ color: color }}>
                {participantName}
            </p>
            
        </div>
    )
}