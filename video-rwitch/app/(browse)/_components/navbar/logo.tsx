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
            <div className="items-center hidden transition lg:flex gap-x-4 hover:opacity-75">
                <div className="p-1 bg-white rounded-full">
                <Image
                    src={"/spooky.svg"}
                    alt={"Logo"}
                    height={"32"}
                    width={"32"} />
                </div>
                <div className={cn(font.className)}>
                <p className="text-lg font-semibold">
                    Rwitch
                </p>
                <p className="text-sm text-muted-foreground">
                    Let&apos;s play
                </p>
            </div>
            </div>
            
        </Link>

    )
}