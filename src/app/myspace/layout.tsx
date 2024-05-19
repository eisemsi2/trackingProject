import { MySpaceNavbar } from "../ui/navbars";

export default function MySpace({children} : Readonly<{children: React.ReactNode;}>) {
    return (
        <div>
            <MySpaceNavbar />
            {children}
        </div>

    );

}