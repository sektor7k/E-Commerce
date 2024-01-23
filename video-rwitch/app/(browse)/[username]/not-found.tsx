import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full space-y-4 text-muted-foreground">
            <h1 className="text-4xl ">
            404
            </h1>
            <p>
                We couldn&apos;t find the user you were looking for.
            </p>
            <Button variant={"secondary"} asChild>
        <Link href="/">
        Go back home
        </Link>
            </Button>
        </div>
    )
}

export default NotFoundPage;