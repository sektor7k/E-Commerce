import Image from "next/image";
import Link from "next/link"
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],

});

export const Logo = () => {
    return (
        <Link href={"/"}>
            <div className="flex items-center gap-x-4 hover:opacity-75">
                <div className="p-1 mr-12 bg-white rounded-full shrink-0 lg:mr-0 lg:shrink">
                    <Image
                        src={"/spooky.svg"}
                        alt={"Logo"}
                        height={"32"}
                        width={"32"} />
                </div>
                <div className={cn(
                    "hidden lg:block",
                    font.className
                    )}>
                    <p className="text-lg font-semibold">
                        Rwitch
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Creator dashboard
                    </p>
                </div>
            </div>

        </Link>

    )
}