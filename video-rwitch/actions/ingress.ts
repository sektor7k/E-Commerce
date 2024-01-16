"use server"

import {
    IngressAudioEncodingPreset,
    IngressInput,
    IngressClient,
    IngressVideoEncodingPreset,
    RoomServiceClient,
    type CreateIngressOptions,
} from "livekit-server-sdk";

import { TrackSource } from "livekit-server-sdk/dist/proto/livekit_models"

import { db } from "@/lib/db";
import { getSelf } from "@/lib/auth-service";

const roomService = new RoomServiceClient(
    process.env.LIVEKIT_API_URL!,
    process.env.LIVEKIT_API_KEY!,
    process.env.LIVEKIT_API_SECRET!,
);

export const createIngress = async (ingressType: IngressInput) => {
    const self = await getSelf();

    // TODO: Reset previous ingress

    const options: CreateIngressOptions = {
        name: self.username,
        roomName: self.id,
        participantName: self.username,
        participantIdentity: self.id,
    };

    if (ingressType === IngressInput.WHIP_INPUT) {
        options.bypassTranscoding = true;
    } else {
        options.video = {
            source: TrackSource.CAMERA,
            preset: IngressVideoEncodingPreset.H264_1080P_30FPS_3_LAYERS,
        };
        options.audio = {
            source: TrackSource.MICROPHONE,
            preset: IngressAudioEncodingPreset.OPUS_STEREO_96KBPS
        };
    }; 
};