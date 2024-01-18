import { Loader } from "lucide-react";

interface LoadingVideoProps {
    label: string;
}

export const LoadingVideo = ({
    label
}: LoadingVideoProps) => {

    return (
        <div className="flex flex-col items-center justify-center h-full space-y-4 ">
            <Loader className="w-10 h-10 text-muted-foreground animate-spin" />
            <p className=" text-muted-foreground">
                {label}
            </p>
        </div>
    )
}


