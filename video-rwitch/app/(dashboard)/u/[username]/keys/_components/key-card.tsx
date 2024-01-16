"use client"

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { CopyButton } from "./copy-button";
import { Button } from "@/components/ui/button";

interface KeyCardProps {
    value: string | null;
};

export const KeyCard = ({
    value
}: KeyCardProps) => {

    const [show, setShow] = useState(false);


    return (
        <div className="p-6 rounded-xl bg-muted">
            <div className="flex items-start gap-x-10">
                <p className="font-semibold shrink-0">
                    Stream Key
                </p>
                <div className="w-full space-y-2 ">
                    <div className="flex items-center w-full gap-x-2">
                        <Input
                            value={value || ""}
                            type={show ? "text" : "password"}
                            disabled
                            placeholder="Stream Key"
                        />
                        <CopyButton value={value || ""} />
                    </div>
                    <Button
                        onClick={() => setShow(!show)}
                        size={"sm"}
                        variant={"link"}
                    >
                        {show ? "Hide" : "Show"}
                    </Button>
                </div>
            </div>
        </div>
    )
}