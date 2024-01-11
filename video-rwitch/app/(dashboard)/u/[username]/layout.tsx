import { getSelfByUsername } from "@/lib/auth-service";
import { redirect } from "next/navigation";
import { Navbar } from "./_componets/navbar";
import { Sidebar } from "./_componets/sidebar";

interface CreatorLayoutProps {
    params: { username: string };
    children: React.ReactNode;
}

const CreatorLayout = async ({
    params,
    children,
}: CreatorLayoutProps) => {
    const self = await getSelfByUsername(params.username);
    if (!self) {
        redirect("/");
    }

    return (
        <>
        <Navbar/>
        <div className="flex h-full pt-20">
            <Sidebar/>
            {children}
        </div>
        </>
    )
}

export default CreatorLayout;