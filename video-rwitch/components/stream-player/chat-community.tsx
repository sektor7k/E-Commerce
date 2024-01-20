"use client"

import { useParticipants } from "@livekit/components-react";
import { useState } from "react";
import { useDebounce } from "usehooks-ts";
import { Input } from "../ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ChatCommunityProps {
    viewerName: string;
    hostName: string;
    isHidden: boolean;
}

export const ChatCommunity = ({
    viewerName,
    hostName,
    isHidden,
}: ChatCommunityProps) => {

    const [value, setValue] = useState("");
    const debouncedValue = useDebounce<string>(value, 500);

    const participants = useParticipants();

    const onChange = (newValue: string) => {
        setValue(newValue);
    };

    // if (isHidden) {
    //     return (
    //         <div className="flex items-center justify-center flex-1">
    //             <p className="text-sm text-muted-foreground">
    //                 Community is disabled
    //             </p>
    //         </div>
    //     );
    // }

    return (
        <div className="p-4 ">
            <Input
                onChange={(e) => onChange(e.target.value)}
                placeholder="Search community"
                className=" border-white/10"
            />
            <ScrollArea className="mt-4 gap-y-2">
                <p className="hidden p-2 text-sm text-center text-muted-foreground last:block">
                    No results
                    {participants.map((participant)=>(
                        <div>
                            
                        </div>
                    ))}
                </p>
            </ScrollArea>
        </div>
    )
}