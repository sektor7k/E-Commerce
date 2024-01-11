"use client";

import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { useCreatorSidebar } from "@/store/use-creator-sidebar";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";

export const Toggle = () => {
    const {
        collapsed,
        onExpand,
        onCollapse,
    } = useCreatorSidebar((state) => state);

    const label = collapsed ? "Expand" : "Collapse";
    return (
        <>
            {collapsed && (
                <div className="items-center justify-center hidden w-full pt-4 mb-4 lg:flex">
                    <Hint label={label} side="right" asChild>
                        <Button
                            onClick={onExpand}
                            variant={"ghost"}
                            className="h-auto p-2"
                        >
                            <ArrowRightFromLine className="w-4 h-4"/>
                        </Button>
                    </Hint>
                </div>
            )}
            {! collapsed && (
                <div className="items-center hidden w-full p-3 pl-6 mb-2 lg:flex">
                    <p className="font-semibold text-primary">
                    Dashboard
                    </p>
                    <Hint label={label} side="right" asChild>
                        <Button
                        onClick={onCollapse}
                        variant={"ghost"}
                        className="h-auto p-2 ml-auto"
                        >
                            <ArrowLeftFromLine className="w-4 h-4"/>

                        </Button>
                    </Hint>

                </div>
            )}
        </>
    )
}