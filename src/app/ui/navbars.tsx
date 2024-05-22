import Image from "next/image";

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
            <a href="/" className="p-4"> 
                <Image src="/bluelog.jpg" alt="Logo" width={40} height={40}/>
            </a>
            <h1 className="text-2xl"> Track Your Coding Practice </h1>
        </INavbar>
    );
}

export function MySpaceNavbar() {
    return (
        <INavbar>
            <a href="/" className="p-4"> 
                <Image src="/bluelog.jpg" alt="Logo" width={40} height={40}/>
            </a>
            <div className="ml-auto"> Login </div>
        </INavbar>
    );
}