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

    
};