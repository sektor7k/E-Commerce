"use client";

import { Pencil } from "lucide-react";

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
                        <Pencil className="w-5 h-5 "/>
                    </div>
                    <div>
                        <h2 className="text-sm font-semibold capitalize lg:text-lg">
                            Edit your stream info
                        </h2>
                        <p className="text-xs text-muted-foreground lg:text-sm">
                        Maximize your visibility
                        </p>
                    </div>
                    {/* TODO: Add a modal button */}
                </div>

            </div>
        </div>
    );
};


