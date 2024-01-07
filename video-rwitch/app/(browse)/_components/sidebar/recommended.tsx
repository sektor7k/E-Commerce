"use client"

import { useSidebar } from "@/store/use-sidebar";
import { User } from "@prisma/client";
import { UserItem } from "./user-item";


interface RecommendedProps {
    data: User[];
};

export const Recommended = ({
    data,
}: RecommendedProps) => {
    const { collapsed } = useSidebar((state) => state);


    const showLabel = !collapsed && data.length > 0;

    return (

        <div>
            {showLabel && (
                <div className="pl-6 mb-4">
                    <p className="text-sm text-muted-foreground">
                        Recommended
                    </p>
                </div>
            )}
            <ul className="px-2 space-y-2 ">
                {data.map((user) => (
                    <UserItem 
                    key={user.id}
                    username={user.username}
                    imageUrl={user.imageUrl}
                    isLive={false}
                    />
                ))}
            </ul>
        </div>
    )
}