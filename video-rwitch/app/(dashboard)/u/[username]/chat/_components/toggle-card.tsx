"use client";

import { toast } from "sonner";
import {useTransition } from "react";

import { updateStream } from "@/actions/stream";
import { Switch } from "@/components/ui/switch";

type FieldTypes = "isChatEnabled" | "isChatDelayed" | "isChatFollowersOnly";

interface ToggleCardProps {
    field: FieldTypes;
    label: string;
    value: boolean;
}

export const ToggleCard = ({
    field,
    label,
    value = false,
}: ToggleCardProps) => {

    const [isPending, startTransition] = useTransition();

    const onChange = () => {
        startTransition(() => {
            updateStream({ [field]: !value })
            .then(() => toast.success("Chat settings update!"))
            .catch(() => toast.error("Something went wrong"));
        })
    }


    return (
        <div className="p-6 rounded-xl bg-muted">
            <div className="flex items-center justify-between">
                <p className="font-semibold shrink-0">
                    {label}
                </p>
                <div className="space-y-2 ">
                    <Switch
                        disabled={isPending}
                        onCheckedChange={onChange}
                        checked={value}
                    >
                        {value ? "On" : "Off"}
                    </Switch>
                </div>
            </div>
        </div>
    )
}