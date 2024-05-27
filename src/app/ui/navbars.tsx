import Image from "next/image";
import Link from "next/link";

export function INavbar({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        // <nav className="flex flex-row h-14 items-center justify-center rounded shadow-md mb-8 px-4"> 
        //     <a href="/" className="p-4"> 
        //         <Image src="/bluelog.jpg" alt="Logo" width={40} height={40}/>
        //     </a>
        //     <div className="ml-auto"> Login </div>
        // </nav>
        <nav className="flex flex-row h-14 items-center justify-center rounded shadow-md px-4">
            {children}
        </nav>


    );
}

export function NavbarMain() {
    return (
        <INavbar>
            <Link href="/" className="p-4"> 
                <Image src="/bluelog.jpg" alt="Logo" width={40} height={40}/>
            </Link>
            <h1 className="text-2xl"> Track Your Coding Practice </h1>
            <a href="/login" className="ml-auto"> Login </a>
        </INavbar>
    );
}

export function MySpaceNavbar() {
    return (
        <INavbar>
            <Link href="/" className="p-4"> 
                <Image src="/bluelog.jpg" alt="Logo" width={40} height={40}/>
            </Link>
            <div className="ml-auto">
                <button className="mr-4"> Add Platform </button>
                <Link href="/createblog" className="mr-4"> Create Blog </Link>
                <Link href="/"> Logout </Link>
            </div>
        </INavbar>
    );
}

export function BlogNavbar() {
    return (
        <INavbar>
            <Link href="/" className="p-4"> 
                <Image src="/bluelog.jpg" alt="Logo" width={40} height={40}/>
            </Link>
            <div className="ml-auto">
                <Link href="/myspace" className="mr-4"> MySpace </Link>
            </div>
        </INavbar>
    );
}