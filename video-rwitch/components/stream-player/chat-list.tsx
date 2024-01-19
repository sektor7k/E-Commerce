"use client"

import { ReceivedChatMessage } from "@livekit/components-react"
import { ChatMessage } from "./chat-message";


interface ChatListProps {
    messages: ReceivedChatMessage[];
    isHidden: boolean;
};

export const ChatList = ({
    isHidden,
    messages,
}: ChatListProps) => {

    if (isHidden || !messages || messages.length === 0) {
        return (
            <div className="flex items-center justify-center flex-1 ">
            <p className="text-sm text-muted-foreground">
                {isHidden ? "Chat is disabled" : "Welcome to the chat!"}
            </p>
        </div>
        )
    }

    return (
        <div className="flex flex-col-reverse flex-1 h-full p-3 overflow-y-auto ">
            {messages.map((message) =>(
                <ChatMessage 
                    key={message.timestamp}
                    data={message }
                />
            ))}
        </div>
    )
}