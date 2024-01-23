"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full space-y-4 text-muted-foreground">
            <p>
                Something went wrong
            </p>
            <Button variant={"secondary"} asChild>
        <Link href="/">
        Go back home
        </Link>
            </Button>
        </div>
    )
}

export default ErrorPage;