import { WifiOff } from "lucide-react";

interface OfflineVideoProps {
    username: string;
}

export const OfflineVideo = ({
    username
}: OfflineVideoProps) => {

    return (
        <div className="flex flex-col items-center justify-center h-full space-y-4 ">
            <WifiOff className="w-10 h-10 text-muted-foreground" />
            <p className=" text-muted-foreground">
                {username} is offline
            </p>
        </div>
    )
}


