"use client"

import { Participant, Track } from "livekit-client"
import { useRef, useState } from "react";
import { useTracks } from "@livekit/components-react";
import { FullscreenControl } from "./fullscreen-control";

interface LiveVideoProps {
    participant: Participant;
};

export const LiveVideo = ({
    participant
}: LiveVideoProps) => {

    const videoRef = useRef<HTMLVideoElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    

    useTracks([Track.Source.Camera, Track.Source.Microphone])
        .filter((track) => track.participant.identity === participant.identity)
        .forEach((track) => {
            if (videoRef.current) {
                track.publication.track?.attach(videoRef.current)
            }
        });
    return (
        <div
            ref={wrapperRef}
            className="relative flex h-full "
        >
            <video
                ref={videoRef}
                width={"100%"}
            />
            <div className="absolute top-0 w-full h-full opacity-0 hover:opacity-100 hover:transition-all">
                <div className="absolute bottom-0 flex items-center justify-between w-full px-4 h-14 bg-gradient-to-r from-neutral-900">
                    <FullscreenControl isFullscreen={false} onToggle={() => { }}
                    />
                </div>
            </div>
        </div>
    )
}


