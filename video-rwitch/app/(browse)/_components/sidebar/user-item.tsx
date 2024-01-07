"use client"

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/store/use-sidebar";

interface UserItemsProps {
    username: string;
    imageUrl: string;
    isLive?: boolean;
}

export const UserItem = ({
    username,
    imageUrl,
    isLive }: UserItemsProps) => {
    return (
        <div>
            User Item
        </div>
    )
}