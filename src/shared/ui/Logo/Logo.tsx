import logo from "@/assets/img/Logo.svg";

type LogoProps = {
    className?: string
}

export const Logo = ({className} : LogoProps) => {
    return (
        <>
            <img src={logo} alt="logo" className={className}/>
        </>
    );
};