import Login from "../ui/login";
import { SideBarLeft } from "../ui/sidebars";
import { SideBarRight } from "../ui/sidebars";

export default function MySpace() {
    return (
        <div className="flex flex-row">
            <SideBarLeft />
            <SideBarRight />
        </div>

    );
}