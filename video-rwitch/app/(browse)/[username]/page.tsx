import { getUserByUsername } from "@/lib/user-service"
import { notFound } from "next/navigation";

interface UserPageProps {
    params: {
        username: string
    }
}

const UserPage = async({
    params
}: UserPageProps) => {

    const user = await getUserByUsername(params.username);

    if (!user) {
        notFound();
    }

    return(
        <div className="flex flex-col gap-y-4">
            <p>username: {user.username} </p>
            <p>user ID: {user.id} </p>
        </div>
    )
}

export default UserPage;
