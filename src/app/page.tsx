import {NavbarMain} from "./ui/navbars";
import Link from "next/link";

export default function Home() {
    return (
      <>
        <NavbarMain />
        <div className=" px-4 py-6 text-center">
            to add about this site here <br />
            on successfull login, redirect to myspace <br />
            on unsuccessfull login, show error message and bring back here. <br />
            for now go to myspace from here <Link href="/myspace" className="underline">MySpace</Link>
        </div>
      </>
    );
}
