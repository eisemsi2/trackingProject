import Image from "next/image";
import Grid from "./ui/grid";
import {NavbarMain} from "./ui/navbars";

export default function Home() {
    return (
      <>
        <NavbarMain />
        <div className="px-4">
            Hello
        </div>
      </>
    );
}
