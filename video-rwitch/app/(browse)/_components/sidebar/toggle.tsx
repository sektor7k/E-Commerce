"use client"
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/store/use-sidebar"
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import { Hint } from "@/components/hint"
import { Skeleton } from "@/components/ui/skeleton";

export const Toggle = () => {

    const { collapsed, onExpand, onCollapse } = useSidebar((state) => state);

    const label = collapsed ? "Expand" : "Collapse";
    return (
        <>
            {collapsed && (
                <div className="items-center justify-center hidden w-full pt-4 mb-4 lg:flex ">
                    <Hint label={label} side="right" asChild>
                        <Button
                            onClick={onExpand}
                            className="h-auto p-2 "
                            variant={"ghost"}>
                            <ArrowRightFromLine className="w-4 h-4" />
                        </Button>
                    </Hint>
                </div>
            )}
            {!collapsed && (
                <div className="flex items-center w-full p-3 pl-6 mb-2">
                    <p className="font-semibold text-primary">
                        For you
                    </p>
                    <Hint label={label} side="right" asChild>
                        <Button
                            onClick={onCollapse}
                            className="h-auto p-2 ml-auto "
                            variant={"ghost"}>
                            <ArrowLeftFromLine className="w-4 h-4" />
                        </Button>
                    </Hint>
                </div>
            )}
        </>
    )
}

export const ToggleSkeleton = () => {
    return (
        <div className="items-center justify-between hidden w-full p-3 pl-6 mb-2 lg:flex">
            <Skeleton className="h-6 w-[100px]"/>
            <Skeleton className="w-6 h-6"/>
        </div>
    )
}