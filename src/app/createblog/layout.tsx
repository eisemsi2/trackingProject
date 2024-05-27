import { BlogNavbar } from "../ui/navbars";

export default function Blog({children} : Readonly<{children: React.ReactNode;}>) {
    return (
        <div>
            <BlogNavbar />
            {children}
        </div>

    );

}