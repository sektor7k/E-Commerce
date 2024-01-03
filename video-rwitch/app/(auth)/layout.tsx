import { Logo } from "./_components/logo";

const AuthLayout = ({children}:{children:React.ReactNode}) =>{
    return(
        <div className="flex flex-col items-center justify-center h-full">
            <Logo/>
            {children}
        </div>
    )
}

export default AuthLayout;