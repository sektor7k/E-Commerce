"use client";

import { Switch } from "@/components/ui/switch";

type FieldTypes = "isChatEnabled" | "isChatDelay" | "isChatFollowersOnly";

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
    return (
        <div className="p-6 rounded-xl bg-muted">
            <div className="flex items-center justify-between">
                <p className="font-semibold shrink-0">
                    {label}
                </p>
                <div className="space-y-2 ">
                    <Switch
                        checked={value}
                    >
                        {value ? "On": "Off"}
                    </Switch>
                </div>
            </div>
        </div>
    )
}