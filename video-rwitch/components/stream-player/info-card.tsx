"use client";

import Image from "next/image";
import { Pencil } from "lucide-react";
import { Separator } from "../ui/separator";
import { InfoModal } from "./info-modal";

interface InfoCardProps {
    name: string;
    thumbnailUrl: string | null;
    hostIdentity: string;
    viewerIdentity: string;
};

export const InfoCard = ({
    name,
    thumbnailUrl,
    hostIdentity,
    viewerIdentity,
}: InfoCardProps) => {

    const hostAsViewer = `host-${hostIdentity}`;
    const isHost = viewerIdentity === hostAsViewer;

    if (!isHost) return null;

    return (
        <div className="px-4">
            <div className=" rounded-xl bg-background">
                <div className=" flex items-center gap-x-2.5 p-4">
                    <div className="w-auto h-auto p-2 bg-blue-600 rounded-md ">
                        <Pencil className="w-5 h-5 " />
                    </div>
                    <div>
                        <h2 className="text-sm font-semibold capitalize lg:text-lg">
                            Edit your stream info
                        </h2>
                        <p className="text-xs text-muted-foreground lg:text-sm">
                            Maximize your visibility
                        </p>
                    </div>
                    <InfoModal 
                        initialName={name}
                        initialThumbnailUrl={thumbnailUrl}
                    />
                </div>
                <Separator />
                <div className="p-4 space-y-4 lg:p-6">
                    <div>
                        <h3 className="mb-2 text-sm text-muted-foreground">
                            Name
                        </h3>
                        <p className="text-sm font-semibold ">
                            {name}
                        </p>
                    </div>
                    <div>
                        <h3 className="mb-2 text-sm text-muted-foreground">
                            Thumbnail
                        </h3>
                        <p className="text-sm font-semibold ">
                            {thumbnailUrl && (
                                <div className=" relative aspect-video rounded-md overflow-hidden w-[200px] border border-white/10">
                                    <Image
                                        fill
                                        src={thumbnailUrl}
                                        alt={name}
                                        className="onject-cover"
                                    />
                                </div>
                            )}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};


